import { NextRequest, NextResponse } from 'next/server';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  lacdChapter?: string;
  otherState?: string;
  paymentMethod?: string;
  dietaryRestrictions?: string;
}

// Google Sheets API submission function
async function submitToGoogleSheet(formData: FormData, formType?: string) {
  // Use the registration-specific Google Sheet (the _2 variables)
  const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID_2 || '1wQiWHpQd4Ub8tluqxYCJIbVtdxm9i0dKpUbOK3bmtb0';
  const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL_2 || process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  
  // Use the private key from environment variables
  const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY_2?.replace(/\\n/g, '\n');


  if (!GOOGLE_SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    console.error('Missing Google Sheets configuration:', {
      GOOGLE_SHEET_ID: !!GOOGLE_SHEET_ID,
      GOOGLE_SERVICE_ACCOUNT_EMAIL: !!GOOGLE_SERVICE_ACCOUNT_EMAIL,
      GOOGLE_PRIVATE_KEY: !!GOOGLE_PRIVATE_KEY
    });
    return { success: false, error: 'Google Sheets not configured' };
  }


  try {
    // Create JWT token for Google Sheets API
    const jwt = await import('jsonwebtoken');
    const now = Math.floor(Date.now() / 1000);
    
    const token = jwt.default.sign({
      iss: GOOGLE_SERVICE_ACCOUNT_EMAIL,
      scope: 'https://www.googleapis.com/auth/spreadsheets',
      aud: 'https://oauth2.googleapis.com/token',
      exp: now + 3600,
      iat: now
    }, GOOGLE_PRIVATE_KEY, { algorithm: 'RS256' });

    // Get access token
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: token,
      }),
    });

    const tokenData = await tokenResponse.json();
    
    if (!tokenData.access_token) {
      throw new Error('Failed to get access token');
    }

    // Prepare data for Google Sheets (event registration only)
    const chapterInfo = formData.lacdChapter === 'Other' 
      ? `Other: ${formData.otherState || ''}` 
      : formData.lacdChapter || '';
    
    const rowData = [
      new Date().toISOString(), // Timestamp
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phone || '',
      chapterInfo,
      formData.paymentMethod || '',
      formData.dietaryRestrictions || '',
      '2025 LACD Annual Convention', // Event name
      '$200' // Registration cost
    ];


        // Append data to Google Sheet
  const sheetsResponse = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/Sheet1!A1:append?valueInputOption=USER_ENTERED`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenData.access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        values: [rowData]
      }),
    }
  );

  if (!sheetsResponse.ok) {
    const errorData = await sheetsResponse.json();
    console.error('Google Sheets API error:', errorData);
    throw new Error(`Google Sheets API error: ${JSON.stringify(errorData)}`);
  }

  await sheetsResponse.json();
  return { success: true };
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Email notification function
async function sendRegistrationEmail(formData: FormData) {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

  if (!ADMIN_EMAIL) {
    console.error('Admin email not configured');
    return { success: false, error: 'Email not configured' };
  }

  try {
    const chapterInfo = formData.lacdChapter === 'Other' 
      ? `Other: ${formData.otherState || ''}` 
      : formData.lacdChapter || '';

    const emailData = {
      to: ADMIN_EMAIL,
      subject: 'New LACD Event Registration',
      html: `
        <h2>New Event Registration Received</h2>
        <p>A new user has registered with LACD for the 2025 Annual Convention.</p>
        
        <h3>Registration Details:</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${formData.firstName} ${formData.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${formData.email}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${formData.phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">LACD Chapter:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${chapterInfo}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Payment Method:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${formData.paymentMethod || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Dietary Restrictions:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${formData.dietaryRestrictions || 'None specified'}</td>
          </tr>
        </table>
        
        <p><strong>Registration Time:</strong> ${new Date().toLocaleString()}</p>
      `
    };

    // Try Resend first if configured (same as subscription API)
    if (process.env.RESEND_API_KEY) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'onboarding@resend.dev',
          to: [ADMIN_EMAIL],
          subject: emailData.subject,
          html: emailData.html,
        }),
      });

      if (resendResponse.ok) {
        console.log('Email sent successfully via Resend');
        return { success: true };
      } else {
        console.error('Resend failed:', await resendResponse.text());
      }
    }

    // Fallback to SendGrid if Resend fails or is not configured
    if (process.env.SENDGRID_API_KEY) {
      const sendGridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{
            to: [{ email: ADMIN_EMAIL }],
            subject: emailData.subject,
          }],
          from: { email: 'noreply@lacd.org' },
          content: [{
            type: 'text/html',
            value: emailData.html,
          }],
        }),
      });

      if (sendGridResponse.ok) {
        console.log('Email sent successfully via SendGrid');
        return { success: true };
      } else {
        console.error('SendGrid failed:', await sendGridResponse.text());
      }
    }

    console.error('No email service configured');
    return { success: false, error: 'No email service configured' };


  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Register API called');
    
    const body = await request.json();
    const { firstName, lastName, email, phone, formType, lacdChapter, otherState, paymentMethod, dietaryRestrictions } = body;

    // Only support event registration
    if (!formType || formType !== 'event') {
      return NextResponse.json(
        { error: 'Only event registration is supported' },
        { status: 400 }
      );
    }

    // Event registration validation
    if (!firstName || !lastName || !email || !phone || !lacdChapter || !paymentMethod) {
      return NextResponse.json(
        { error: 'Missing required fields for event registration' },
        { status: 400 }
      );
    }
    
    // If "Other" is selected, otherState is required
    if (lacdChapter === 'Other' && !otherState) {
      return NextResponse.json(
        { error: 'State is required when selecting "Other" chapter' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Note: Google Sheets doesn't have built-in duplicate checking like a database
    // Users can register multiple times if needed

    // Prepare form data for external services (event registration only)
    const formData = {
      firstName,
      lastName,
      email,
      phone,
      lacdChapter,
      otherState,
      paymentMethod,
      dietaryRestrictions
    };

    // Submit to Google Sheet
    const googleSheetResult = await submitToGoogleSheet(formData, formType);

    // Send email notification
    const emailResult = await sendRegistrationEmail(formData);

    if (!emailResult.success) {
      console.warn('Email notification failed, but registration was saved to Google Sheets');
    } else {
      console.log('Email notification sent successfully');
    }

    console.log('User registered successfully to Google Sheets');

    return NextResponse.json(
      { 
        success: true, 
        message: formType === 'event' ? 'Event registration successful' : 'Registration successful',
        googleSheetSubmitted: googleSheetResult.success,
        emailSent: emailResult.success
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
