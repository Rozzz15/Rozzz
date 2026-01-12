# Google Forms Integration Setup Guide

## Step 1: Create a Google Apps Script

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project"
3. Replace the default code with this script:

```javascript
function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Get or create a Google Sheet to store submissions
    const sheetId = 'YOUR_SHEET_ID_HERE'; // Replace with your Google Sheet ID
    const sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
    
    // Add headers if this is the first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message']);
    }
    
    // Append the form data
    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.message
    ]);
    
    // Optional: Send email notification
    const email = 'rozelramos17@gmail.com'; // Your email
    const subject = 'New Contact Form Submission';
    const body = `
      New message from your portfolio website:
      
      Name: ${data.name}
      Email: ${data.email}
      Message: ${data.message}
      
      Timestamp: ${new Date()}
    `;
    
    MailApp.sendEmail(email, subject, body);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Form submitted successfully' })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 2: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "Contact Form Submissions" (or any name you prefer)
4. Copy the Sheet ID from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the `SHEET_ID_HERE` part
5. Replace `YOUR_SHEET_ID_HERE` in the script with your actual Sheet ID

## Step 3: Deploy as Web App

1. In Google Apps Script, click "Deploy" > "New deployment"
2. Click the gear icon ⚙️ next to "Select type"
3. Choose "Web app"
4. Set the following:
   - **Description**: "Contact Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone" (this allows your website to submit)
5. Click "Deploy"
6. **Copy the Web App URL** - this is what you'll use in your website

## Step 4: Update Your Website

1. Open `index.html`
2. Find the line: `const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_URL_HERE` with your Web App URL from Step 3

## Step 5: Test

1. Submit a test form on your website
2. Check your Google Sheet - you should see the submission
3. Check your email - you should receive a notification

## Alternative: Simple Google Form Method

If you prefer a simpler approach without coding:

1. Create a Google Form at [forms.google.com](https://forms.google.com)
2. Add three questions:
   - Name (Short answer)
   - Email (Short answer)
   - Message (Paragraph)
3. Get the form's action URL (view page source to find it)
4. Update the form submission code to submit directly to the Google Form

## Troubleshooting

- **CORS errors**: Make sure you set `mode: 'no-cors'` in the fetch request (already done)
- **Permission errors**: Make sure "Who has access" is set to "Anyone"
- **Sheet not found**: Double-check your Sheet ID is correct
- **Email not sending**: Check your Google account permissions for MailApp

## Security Note

The Web App URL will be visible in your website's code. This is normal for Google Apps Script web apps. The script will only accept POST requests with the correct data format.
