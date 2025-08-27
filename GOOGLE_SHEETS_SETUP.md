# Google Sheets API Integration Setup Guide

This guide will help you set up Google Sheets API integration to automatically save registration information to a Google Sheet when users submit the registration form.

## Overview

The integration works by:
1. User submits registration form on your website
2. Data is saved to your Supabase database (existing functionality)
3. Data is also written directly to a Google Sheet (new functionality)
4. You can view all submissions in real-time in Google Sheets

## Prerequisites

- A Google account
- Access to Google Cloud Console
- Node.js project with npm

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Note down your Project ID

## Step 2: Enable Google Sheets API

1. In your Google Cloud Project, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on "Google Sheets API"
4. Click "Enable"

## Step 3: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - **Service account name**: `lacd-registration-sheets`
   - **Service account ID**: Will be auto-generated
   - **Description**: `Service account for LACD registration sheets integration`
4. Click "Create and Continue"
5. Skip role assignment (click "Continue")
6. Click "Done"

## Step 4: Generate Service Account Key

1. Click on your newly created service account
2. Go to the "Keys" tab
3. Click "Add Key" > "Create New Key"
4. Choose "JSON" format
5. Click "Create"
6. The JSON file will be downloaded automatically
7. **Keep this file secure** - it contains sensitive credentials

## Step 5: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "LACD Registrations" or similar
4. Copy the Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID/edit`
   - The Sheet ID is the long string between `/d/` and `/edit`

## Step 6: Share the Sheet with Service Account

1. In your Google Sheet, click "Share" (top right)
2. Add your service account email (found in the JSON file under `client_email`)
3. Give it "Editor" permissions
4. Click "Send" (you can uncheck "Notify people")

## Step 7: Install Required Packages

Run these commands in your project directory:

```bash
npm install jsonwebtoken
npm install --save-dev @types/jsonwebtoken
```

## Step 8: Set Up Environment Variables

1. Create or edit your `.env.local` file in the project root
2. Add the following variables:

```env
# Google Sheets Configuration
GOOGLE_SHEET_ID=your_sheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account_email@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key from JSON file\n-----END PRIVATE KEY-----\n"
```

**Important Notes:**
- Replace `your_sheet_id_here` with your actual Sheet ID
- Replace `your_service_account_email@project.iam.gserviceaccount.com` with the email from your JSON file
- For `GOOGLE_PRIVATE_KEY`, copy the `private_key` value from your JSON file
- Make sure to include the quotes and `\n` characters exactly as shown

## Step 9: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to `/admin/test-google-sheets`
3. Enter your Google Sheet URL
4. Click "Test Connection" to verify the setup
5. Click "Create Headers" to add column headers to your sheet

## Step 10: Verify the Setup

1. Submit a test registration through your website
2. Check your Google Sheet to see if the data appears
3. The data should be added as a new row with the following columns:
   - Timestamp
   - First Name
   - Last Name
   - Email
   - Phone
   - Date of Birth
   - Address
   - City
   - State
   - ZIP Code
   - Emergency Contact
   - Emergency Phone

## Troubleshooting

### Common Issues

1. **"Missing environment variables" error**
   - Check that all three environment variables are set correctly
   - Make sure the private key includes the `\n` characters

2. **"Failed to get access token" error**
   - Verify your service account email and private key
   - Check that the Google Sheets API is enabled

3. **"Failed to access Google Sheet" error**
   - Make sure you've shared the sheet with your service account email
   - Verify the Sheet ID is correct

4. **"JWT package not found" error**
   - Run `npm install jsonwebtoken` and `npm install --save-dev @types/jsonwebtoken`

### Testing

Use the test page at `/admin/test-google-sheets` to:
- Validate your Google Sheet URL
- Test the API connection
- Create headers in your sheet
- See detailed error messages

## Security Considerations

- **Never commit your service account JSON file to version control**
- Store environment variables securely
- Use environment-specific configurations for development/production
- Consider using Google Cloud Secret Manager for production deployments
- Regularly rotate your service account keys

## Production Deployment

For production deployment:

1. Set up environment variables in your hosting platform (Vercel, Netlify, etc.)
2. Use Google Cloud Secret Manager for sensitive credentials
3. Set up proper CORS and security headers
4. Consider implementing rate limiting
5. Monitor API usage and costs

## Data Structure

The Google Sheet will have the following structure:

| Column | Field | Description |
|--------|-------|-------------|
| A | Timestamp | When the registration was submitted |
| B | First Name | User's first name |
| C | Last Name | User's last name |
| D | Email | User's email address |
| E | Phone | User's phone number |
| F | Date of Birth | User's date of birth |
| G | Address | User's street address |
| H | City | User's city |
| I | State | User's state |
| J | ZIP Code | User's ZIP code |
| K | Emergency Contact | Emergency contact name |
| L | Emergency Phone | Emergency contact phone |

## Benefits

- **Real-time data**: Registrations appear immediately in Google Sheets
- **Easy access**: View and manage data in familiar spreadsheet interface
- **Export capabilities**: Easy to export to Excel, CSV, or other formats
- **Collaboration**: Share the sheet with team members
- **Data analysis**: Use Google Sheets formulas and charts for insights
- **Backup**: Automatic backup and version history

The integration is now ready! Users can register through your website, and all their information will be automatically saved to both your Supabase database and Google Sheets.
