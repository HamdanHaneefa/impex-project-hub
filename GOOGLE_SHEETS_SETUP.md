# Google Sheets Integration Setup Guide

## Overview
This guide will help you connect your form submissions to Google Sheets and WhatsApp.

## Step-by-Step Setup

### 1. Prepare Your Google Spreadsheet

1. Open your Google Spreadsheet
2. In the first row, add these column headers:
   - **A1**: Timestamp
   - **B1**: Name
   - **C1**: Phone
   - **D1**: Email
   - **E1**: Organisation
   - **F1**: Model
   - **G1**: Size
   - **H1**: Quantity
   - **I1**: Purpose

### 2. Create Google Apps Script

1. In your spreadsheet, click **Extensions** → **Apps Script**
2. Delete any existing code
3. Paste this UPDATED code:

```javascript
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const params = e.parameter;
    
    // Append data to sheet
    sheet.appendRow([
      new Date(),
      params.name || '',
      params.phone || '',
      params.email || '',
      params.organisation || '',
      params.model || '',
      params.size || '',
      params.quantity || '',
      params.purpose || ''
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Append data to sheet
    sheet.appendRow([
      new Date(),
      data.name,
      data.phone,
      data.email,
      data.organisation,
      data.model,
      data.size,
      data.quantity,
      data.purpose
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: 'success',
      message: 'Data saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: 'error',
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click **Save** (💾 icon)
5. Name your project: "Form Submission Handler"

### 3. Deploy the Script (IMPORTANT - REDEPLOY!)

**⚠️ IMPORTANT: You need to create a NEW deployment for the updated code!**

1. Click **Deploy** → **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure:
   - **Description**: Form Submission Handler v2
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
5. Click **Deploy**
6. Click **Authorize access**
7. Choose your Google account
8. Click **Advanced** → **Go to [Project Name] (unsafe)**
9. Click **Allow**
10. **IMPORTANT**: Copy the NEW **Web App URL** that appears
    - It will look like: `https://script.google.com/macros/s/AKfycby.../exec`
    - This will be a DIFFERENT URL than before!

### 4. Update Your React Code

The code has already been updated to use GET requests which bypass CORS issues!

### 5. Test Your Form

1. Run your development server: `npm run dev`
2. Fill out the form and submit
3. Check your Google Spreadsheet - a new row should appear with the data
4. WhatsApp should also open with the pre-filled message

## How It Works

When a user submits the form:
1. ✅ Data is sent to Google Sheets via GET request (bypasses CORS)
2. ✅ WhatsApp opens with a pre-filled message template
3. ✅ User sees success message
4. ✅ Form resets for next submission

## Troubleshooting

### Data not appearing in Google Sheets?
- Make sure you REDEPLOYED the script with the new code
- Check that you copied the correct NEW Web App URL
- Make sure you set "Who has access" to "Anyone"
- Check the Apps Script execution logs: Extensions → Apps Script → Executions

### Still getting connection timeout?
- Clear your browser cache
- Try in incognito/private mode
- Make sure the script is deployed as "Anyone" can access

### WhatsApp not opening?
- Check the phone number format: `919778665499`
- Make sure WhatsApp is installed or WhatsApp Web is accessible

### Form shows error?
- Open browser console (F12) to see error messages
- Check network tab to see if the request is being sent

## Security Notes

- The Google Apps Script URL is public but only accepts form data
- No sensitive data should be stored in the frontend code
- Consider adding rate limiting if you get spam submissions

## Future Enhancements

Consider adding:
- Email notifications when form is submitted
- Data validation in Google Apps Script
- Duplicate submission prevention
- Admin dashboard to view submissions
