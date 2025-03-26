# Setting Up Email Functionality

This guide explains how to configure the email functionality for the contact form.

## Prerequisites

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service in EmailJS (Gmail, Outlook, custom SMTP, etc.)
3. Create an email template in EmailJS

## Configuration Steps

1. Log in to your EmailJS account
2. Navigate to "Email Services" and add a new service or use an existing one
3. Navigate to "Email Templates" and create a new template
   - Use template variables: {{name}}, {{email}}, {{phone}}, and {{message}}
   - Design your email template as needed
4. Get your Service ID, Template ID, and Public Key from EmailJS
5. Create a `.env` file in the root directory of the project (if it doesn't exist already)
6. Add the following environment variables:

```
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
VITE_EMAILJS_PUBLIC_KEY=your-public-key
```

### Notes:

- Replace `your-service-id` with the service ID from EmailJS
- Replace `your-template-id` with the template ID from EmailJS
- Replace `your-public-key` with your public key from EmailJS

## Security Considerations

- The `.env` file is excluded from version control in `.gitignore` to protect your credentials
- Make sure to keep your `.env` file secure and never commit it to public repositories
- In production environments, use environment variables provided by your hosting service
- The EmailJS public key is exposed to the client, but it's designed to be used this way

## Testing the Form

1. Run the development server: `npm run dev`
2. Navigate to the contact form on the website
3. Fill out the form and submit it
4. Check the email address associated with your EmailJS service for the form submission

## Troubleshooting

- If emails aren't being sent, check the browser console for error messages
- Verify that your EmailJS credentials are correct
- Make sure your email template variables match what's being sent from the form
- Check your EmailJS dashboard for any quota limitations or errors

For any issues or questions, please contact the development team. 