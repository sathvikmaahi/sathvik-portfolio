# Contact Form Setup Guide

## Overview
Your portfolio now includes a fully functional contact form that allows visitors to send you messages directly from your website. The form includes:

- Name, email, phone, subject, and message fields
- Form validation
- Loading states and success/error feedback
- Email notifications sent to your inbox
- Responsive design that matches your portfolio theme

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Email Settings
1. Create a `.env` file in the root directory:
```bash
cp env.example .env
```

2. Edit the `.env` file with your Gmail credentials:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

### 3. Gmail App Password Setup
To use Gmail for sending emails, you need to create an App Password:

1. Go to your Google Account settings
2. Navigate to Security > 2-Step Verification
3. Create an App Password for "Mail"
4. Use this password in your `.env` file (not your regular Gmail password)

### 4. Run the Application
```bash
# Run both frontend and backend
npm run dev

# Or run them separately:
npm run server  # Backend only
npm start       # Frontend only
```

## Features

### Form Fields
- **Name** (required): Visitor's full name
- **Email** (required): Visitor's email address
- **Phone** (optional): Contact phone number
- **Subject** (optional): Message subject line
- **Message** (required): The main message content

### Validation
- Required fields are validated before submission
- Email format is validated
- Form cannot be submitted while processing

### User Experience
- Loading spinner during submission
- Success/error messages with appropriate styling
- Form resets after successful submission
- Responsive design for all screen sizes

### Email Notifications
When someone submits the form, you'll receive an email with:
- Sender's name, email, and phone
- Subject line and message content
- Formatted HTML email for easy reading

## Customization

### Styling
The contact form uses Tailwind CSS classes and matches your portfolio's design theme. You can customize the styling by modifying the classes in `src/components/ContactForm.js`.

### Email Template
To customize the email format, edit the `mailOptions.html` template in `server.js`.

### Form Fields
To add or remove form fields:
1. Update the form state in `ContactForm.js`
2. Add/remove input fields in the JSX
3. Update the backend validation in `server.js`
4. Modify the email template if needed

## Troubleshooting

### Common Issues

1. **Email not sending**: Check your Gmail app password and ensure 2FA is enabled
2. **CORS errors**: Make sure the backend is running on port 5000
3. **Form not submitting**: Check browser console for JavaScript errors

### Testing
- Test the form with valid and invalid data
- Verify emails are received in your inbox
- Test on different devices and screen sizes

## Security Notes

- The form includes basic validation but consider adding rate limiting for production
- Gmail app passwords are more secure than regular passwords
- Consider adding CAPTCHA for additional spam protection
- The backend includes CORS configuration for security

## Production Deployment

For production deployment:
1. Use environment variables for sensitive data
2. Set up proper CORS origins
3. Consider using a service like SendGrid or AWS SES for email
4. Add rate limiting and spam protection
5. Use HTTPS for secure form submission

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify your `.env` configuration
3. Ensure all dependencies are installed
4. Test the backend API endpoint directly 