# EmailJS Setup Guide

This guide will help you set up EmailJS to make the contact form functional.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (starts with "service_")

## Step 3: Create Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Contact Form Message from {{user_name}}
```

**Email Body:**
```
Name: {{user_name}}
Email: {{user_email}}
Subject: {{user_subject}}

Message:
{{user_message}}

---
This message was sent from your portfolio website contact form.
```

4. Save the template and note down your **Template ID** (starts with "template_")

## Step 4: Get Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

## Step 5: Update Configuration

1. Open `src/config/emailConfig.ts`
2. Replace the placeholder values with your actual credentials:

```typescript
export const emailConfig = {
  serviceId: 'service_your_actual_service_id', // Replace with your Service ID
  templateId: 'template_your_actual_template_id', // Replace with your Template ID
  publicKey: 'your_actual_public_key', // Replace with your Public Key
};
```

## Step 6: Test the Contact Form

1. Start your development server: `npm start`
2. Go to the Contact section
3. Fill out the form and submit
4. Check your email to see if the message was received

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Email not received**: Verify your EmailJS service is properly connected
- **Template variables not working**: Make sure your template uses the exact variable names: `{{user_name}}`, `{{user_email}}`, `{{user_subject}}`, `{{user_message}}`

## Security Notes

- The public key is safe to use in frontend code
- EmailJS handles the email sending securely
- No backend server required
- Free tier allows 200 emails per month

## Alternative: Direct Email Links

If you prefer not to use EmailJS, the portfolio already includes direct email links:
- Click "Email Me" button in Hero section
- Click email address in Contact section
- Both will open the user's default email client with your email pre-filled 