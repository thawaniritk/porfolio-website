# EmailJS Setup Guide for Portfolio Website

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Note down your Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Ritik,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Note down your Template ID** (e.g., `template_xyz789`)

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. **Copy your Public Key** (e.g., `user_abc123def456`)

### Step 5: Update Your Code
Open `js/script.js` and replace these placeholders:

```javascript
// Line 197: Replace YOUR_PUBLIC_KEY
emailjs.init('YOUR_PUBLIC_KEY');

// Line 243: Replace YOUR_SERVICE_ID and YOUR_TEMPLATE_ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Example:**
```javascript
emailjs.init('user_abc123def456');
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

### Step 6: Test Your Contact Form
1. Open your website: http://localhost:8000
2. Go to the Contact section
3. Fill out and submit the form
4. Check your email for the message!

## ✅ What's Already Done

- ✅ EmailJS script added to HTML
- ✅ Contact form JavaScript updated
- ✅ Email validation included
- ✅ Loading states added
- ✅ Success/error notifications
- ✅ Form reset after submission

## 🎯 Features Included

- **Real email delivery** to ritik11thawani@gmail.com
- **Form validation** (required fields, email format)
- **Loading indicator** ("Sending..." button)
- **Success/error messages** with notifications
- **Spam protection** built-in
- **Mobile responsive** contact form

## 📧 Free Tier Limits

- **200 emails per month** (free)
- **No credit card required**
- **Perfect for portfolio websites**

## 🔧 Troubleshooting

**If emails don't arrive:**
1. Check spam folder
2. Verify Service ID and Template ID are correct
3. Check browser console for errors (F12)
4. Ensure your email service is properly connected

**If form shows error:**
1. Verify all IDs are correct
2. Check that template variables match: {{from_name}}, {{from_email}}, etc.
3. Make sure your email service is active

## 🚀 Next Steps

1. Complete the EmailJS setup above
2. Test the contact form
3. Deploy your website online
4. Start receiving contact form submissions!

---

**Need help?** Check the EmailJS documentation or contact their support.
