import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message, organization, inquiryType } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Log the inquiry for debugging
    console.log('Contact inquiry received:', {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
      organization,
      inquiryType,
      timestamp: new Date().toISOString()
    });

    // Here you could add email sending logic:
    // await sendEmail({
    //   to: 'admin@lacd.org',
    //   subject: `New Contact Inquiry: ${subject}`,
    //   body: `
    //     Name: ${firstName} ${lastName}
    //     Email: ${email}
    //     Phone: ${phone}
    //     Organization: ${organization}
    //     Inquiry Type: ${inquiryType}
    //     
    //     Message:
    //     ${message}
    //   `
    // });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Send notification to admin
    // await sendAdminNotification({
    //   from: email,
    //   subject: `New Contact Inquiry: ${subject}`,
    //   message: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nOrganization: ${organization}\nInquiry Type: ${inquiryType}\n\nMessage:\n${message}`
    // });

    // Send confirmation email to user
    // await sendConfirmationEmail(email, firstName, subject);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully. We will get back to you within 24-48 hours.',
        inquiryId: `inq_${Date.now()}`
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Contact inquiry error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
