<?php
// SMTP configuration for Exchange/Office 365
// IMPORTANT: Fill in real values on the server. Avoid committing secrets.

// Typical O365 settings
$smtpHost = 'smtp.office365.com';
$smtpPort = 587;
$smtpSecure = 'tls';

// Exchange mailbox credentials for jay@pedmoreinvestments.co.uk
// Leave blank to use PHP's mail() fallback via cPanel sendmail (current production setup)
$smtpUser = '';
$smtpPass = '';

// Optional SendGrid API key (HTTPS-based sending; avoids SMTP port blocks)
// Create an API key in SendGrid and paste it here on the server only
$sendgridApiKey = '';


