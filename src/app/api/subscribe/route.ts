import { NextRequest, NextResponse } from 'next/server';

interface SubscribeData {
  firstName: string;
  lastName: string;
  email: string;
  note?: string;
}

// Google Sheets API submission function
async function submitToGoogleSheet(subscriberData: SubscribeData) {
  const GOOGLE_SHEET_ID = '1GUZugY1Ro_-t0CNFjM7xEmVpq_M0IPIRdqsfVqFUZbY';
  const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!GOOGLE_SHEET_ID || !GOOGLE_SERVICE_ACCOUNT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    console.error('Missing Google Sheets configuration');
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

    // Prepare data for Google Sheets
    const rowData = [
      new Date().toISOString(), // Timestamp
      subscriberData.firstName,
      subscriberData.lastName,
      subscriberData.email,
      subscriberData.note || '', // Note field
      'Newsletter Subscription' // Subscription type
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
async function sendSubscriptionEmail(subscriberData: SubscribeData) {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

  if (!ADMIN_EMAIL) {
    console.error('Admin email not configured');
    return { success: false, error: 'Email not configured' };
  }

  try {
    const emailData = {
      to: ADMIN_EMAIL,
      subject: 'New Newsletter Subscription',
      html: `
        <h2>New Newsletter Subscription Received</h2>
        <p>A new user has subscribed to the LACD newsletter.</p>
        
        <h3>Subscription Details:</h3>
        <table style="border-collapse: collapse; width: 100%;">
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${subscriberData.firstName} ${subscriberData.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${subscriberData.email}</td>
          </tr>
          <tr style="background-color: #f8f9fa;">
            <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Subscription Date:</td>
            <td style="padding: 8px; border: 1px solid #ddd;">${new Date().toLocaleDateString()}</td>
          </tr>
        </table>
        
        <p>This subscription has been automatically added to your Google Sheets.</p>
      `
    };

    // Try SendGrid first if configured
    if (process.env.SENDGRID_API_KEY) {
      const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personalizations: [{ to: [{ email: ADMIN_EMAIL }] }],
          from: { email: 'noreply@yourdomain.com' },
          subject: emailData.subject,
          content: [{ type: 'text/html', value: emailData.html }],
        }),
      });

      if (sendgridResponse.ok) {
        console.log('Email sent successfully via SendGrid');
        return { success: true };
      }
    }

    // If no email service is configured, log the email content
    console.log('Email service not configured. Email content:', emailData);
    return { success: false, error: 'No email service configured' };

  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function POST(request: NextRequest) {
  try {
    console.log('Subscribe API called');
    
    const body = await request.json();
    const { email, firstName, lastName } = body;

    // Validate required fields
    if (!email || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Email, first name, and last name are required' },
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
    // Users can subscribe multiple times if needed

    // Prepare subscriber data
    const subscriberData: SubscribeData = {
      firstName,
      lastName,
      email,
      note: body.note || ''
    };

    // Submit to Google Sheet
    const googleSheetResult = await submitToGoogleSheet(subscriberData);

    if (!googleSheetResult.success) {
      console.error('Failed to save to Google Sheets:', googleSheetResult.error);
      return NextResponse.json(
        { error: 'Failed to save to Google Sheets' },
        { status: 500 }
      );
    }

    // Send email notification
    const emailResult = await sendSubscriptionEmail(subscriberData);

    if (!emailResult.success) {
      console.warn('Email notification failed, but subscription was saved to Google Sheets');
    } else {
      console.log('Email notification sent successfully');
    }

    console.log('User subscribed successfully to Google Sheets');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully subscribed to newsletter',
        googleSheetSubmitted: googleSheetResult.success,
        emailSent: emailResult.success
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
