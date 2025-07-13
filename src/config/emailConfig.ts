// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/ and create an account
// 2. Create an Email Service (Gmail, Outlook, etc.)
// 3. Create an Email Template
// 4. Replace the values below with your actual credentials

export const emailConfig = {
  serviceId: 'service_your_service_id', // Replace with your EmailJS service ID
  templateId: 'template_your_template_id', // Replace with your EmailJS template ID
  publicKey: 'your_public_key', // Replace with your EmailJS public key
};

// Email Template Variables:
// Your EmailJS template should include these variables:
// - {{user_name}} - Name from the contact form
// - {{user_email}} - Email from the contact form
// - {{user_subject}} - Subject from the contact form
// - {{user_message}} - Message from the contact form
// - {{to_email}} - Your email address (sarvik.student.cd.eee24@iitbhu.ac.in)

// Example EmailJS Template:
/*
Subject: New Contact Form Message from {{user_name}}

Name: {{user_name}}
Email: {{user_email}}
Subject: {{user_subject}}

Message:
{{user_message}}

---
This message was sent from your portfolio website contact form.
*/ 