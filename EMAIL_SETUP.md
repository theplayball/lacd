# Email Notification Setup Guide

This guide will help you set up email notifications for new registrations. When a user submits the registration form, you'll receive an email with all their details.

## Email Service Options

### Option 1: Resend (Recommended - Free Tier)
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add to your `.env.local`:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ADMIN_EMAIL=your_email@example.com
   ```

### Option 2: SendGrid
1. Go to [sendgrid.com](https://sendgrid.com)
2. Sign up for a free account (100 emails/day)
3. Get your API key from the dashboard
4. Add to your `.env.local`:
   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ADMIN_EMAIL=your_email@example.com
   ```

### Option 3: Mailgun
1. Go to [mailgun.com](https://mailgun.com)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add to your `.env.local`:
   ```env
   MAILGUN_API_KEY=your_mailgun_api_key_here
   MAILGUN_DOMAIN=your_domain.com
   ADMIN_EMAIL=your_email@example.com
   ```

## Environment Variables

Add these to your `.env.local` file:

```env
# Email Configuration
ADMIN_EMAIL=your_email@example.com

# Choose one email service:
RESEND_API_KEY=your_resend_api_key_here
# OR
SENDGRID_API_KEY=your_sendgrid_api_key_here
# OR
MAILGUN_API_KEY=your_mailgun_api_key_here
MAILGUN_DOMAIN=your_domain.com
```

## Email Content

The email will include:
- User's full name
- Email address
- Phone number
- Date of birth
- Complete address
- Emergency contact information
- Registration timestamp

## Testing

1. Set up your email service
2. Add the environment variables
3. Submit a test registration
4. Check your email for the notification

## Troubleshooting

### Email not sending
- Check that your API key is correct
- Verify the ADMIN_EMAIL is set
- Check the console logs for error messages

### Email service not working
- Try a different email service
- Check the service's documentation
- Verify your account is active

## Security Notes

- Never commit API keys to version control
- Use environment variables for all sensitive data
- Consider using a dedicated email domain for sending
- Monitor email sending limits and costs

## Customization

You can customize the email template by editing the `emailData.html` section in `src/app/api/register/route.ts`. The email uses HTML formatting and can include:

- Custom styling
- Your organization's logo
- Additional information
- Links to your website
- Contact information
