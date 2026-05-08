<?php
// Simple PHP handler for static-exported forms
// Sends email to the specified recipient and redirects to /thank-you.html

// CONFIG
$to = 'jay@pedmoreinvestments.co.uk';
$siteName = 'Pedmore Investments';
$fromEmail = 'jay@pedmoreinvestments.co.uk'; // Use a domain-aligned address for better deliverability

// Optional SMTP config for Exchange/Office 365 (recommended)
// Fill values in mail-config.php (same directory) to enable SMTP
$smtpHost = 'smtp.office365.com';
$smtpPort = 587;
$smtpSecure = 'tls';
$smtpUser = '';
$smtpPass = '';
// Optional HTTPS mail provider (avoids SMTP port blocks)
$sendgridApiKey = '';
$configPath = __DIR__ . '/mail-config.php';
$configLocalPath = __DIR__ . '/mail-config.local.php';
// Prefer local override if present (not replaced by exports)
if (file_exists($configLocalPath)) {
    include $configLocalPath;
} elseif (file_exists($configPath)) {
    include $configPath; // Overrides $smtpHost/$smtpPort/$smtpSecure/$smtpUser/$smtpPass if provided
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /');
    exit;
}

function field($key) {
    return isset($_POST[$key]) ? trim((string)$_POST[$key]) : '';
}

// Basic sanitization
function sanitize($value) {
    $value = strip_tags($value);
    $value = str_replace(["\r", "\n"], [' ', ' '], $value);
    return $value;
}

$formType = sanitize(field('formType')) ?: 'contact';

// Common fields
$name = sanitize(field('name'));
$phone = sanitize(field('phone'));
$email = sanitize(field('email'));

// Contact page specific
$location = sanitize(field('location'));
$link = sanitize(field('link'));
$message = trim((string)field('message')); // allow newlines in message body
$amount = sanitize(field('amount'));
$termsAccepted = sanitize(field('terms'));

// Compose email
$subject = "[{$siteName}] New " . ucfirst($formType) . " submission";

$lines = [];
$lines[] = "Form Type: " . ucfirst($formType);
$lines[] = "Name: " . $name;
$lines[] = "Phone: " . $phone;
if ($email !== '') { $lines[] = "Email: " . $email; }
if ($formType === 'contact') {
    if ($location !== '') { $lines[] = "Location: " . $location; }
    if ($link !== '') { $lines[] = "Link: " . $link; }
    if ($amount !== '') { $lines[] = "Estimated Amount: " . $amount; }
    $lines[] = "Terms Accepted: " . ($termsAccepted ? 'Yes' : 'No');
}
if ($message !== '') {
    $lines[] = ""; // blank line
    $lines[] = "Message:";
    $lines[] = $message;
}

$body = implode("\n", $lines) . "\n";

// Headers
$headers = [];
$headers[] = 'From: ' . $siteName . ' <' . $fromEmail . '>';
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
}
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'X-PI-Transport: MAIL';

// Try SendGrid HTTPS first if API key provided; then SMTP via PHPMailer; else fall back to mail()
$sent = false;
$usingSmtp = !empty($smtpUser) && !empty($smtpPass);
$errorReason = '';
$errorDetail = '';

// Send via SendGrid REST API if available
if (!$sent && !empty($sendgridApiKey)) {
    try {
        $payload = [
            'personalizations' => [[ 'to' => [[ 'email' => $to ]] ]],
            'from' => [ 'email' => $fromEmail, 'name' => $siteName ],
            'subject' => $subject,
            'content' => [[ 'type' => 'text/plain', 'value' => $body ]]
        ];
        if (!empty($email)) {
            $payload['reply_to'] = [ 'email' => $email ];
        }
        $ch = curl_init('https://api.sendgrid.com/v3/mail/send');
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: Bearer ' . $sendgridApiKey,
            'Content-Type: application/json'
        ]);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 15);
        $responseBody = curl_exec($ch);
        $httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
        $curlErr = curl_error($ch);
        curl_close($ch);
        if ($httpCode === 202) {
            $sent = true;
        } else {
            $sent = false;
            $errorReason = 'sendgrid_failed';
            $errorDetail = 'HTTP ' . $httpCode;
            if (!empty($curlErr)) { $errorDetail .= ' ' . preg_replace('/[^A-Za-z0-9 .:_-]/','', $curlErr); }
            error_log('[contact.php] SendGrid error: code ' . $httpCode . ' body: ' . substr((string)$responseBody, 0, 200));
        }
    } catch (\Throwable $eSG) {
        $sent = false;
        $errorReason = 'sendgrid_exception';
        $errorDetail = substr(preg_replace('/[^A-Za-z0-9 .:_-]/','', (string)$eSG->getMessage()), 0, 160);
        error_log('[contact.php] SendGrid exception: ' . $errorDetail);
    }
}
if (!$sent && $usingSmtp) {
    $vendorPath = __DIR__ . '/vendor/PHPMailer/src/';
    if (file_exists($vendorPath . 'PHPMailer.php')) {
        try {
            require_once $vendorPath . 'PHPMailer.php';
            require_once $vendorPath . 'SMTP.php';
            require_once $vendorPath . 'Exception.php';
            $mailer = new \PHPMailer\PHPMailer\PHPMailer(true);
            $mailer->isSMTP();
            $mailer->Host = $smtpHost;
            $mailer->SMTPAuth = true;
            $mailer->Username = $smtpUser;
            $mailer->Password = $smtpPass;
            $mailer->SMTPSecure = $smtpSecure; // 'tls'
            $mailer->Port = $smtpPort; // 587
            $mailer->CharSet = 'UTF-8';
            // TEMPORARY DEBUGGING - writes SMTP conversation to PHP error_log
            $mailer->SMTPDebug = 2; // set to 0 after diagnosing
            $mailer->Debugoutput = 'error_log';

            $mailer->setFrom($fromEmail, $siteName);
            $mailer->addAddress($to);
            if ($email !== '') {
                $mailer->addReplyTo($email);
            }
            $mailer->addCustomHeader('X-PI-Transport', 'SMTP');
            $mailer->Subject = $subject;
            $mailer->Body = $body;
            $mailer->AltBody = $body;

            $sent = $mailer->send();
            if (!$sent) { $errorReason = 'smtp_send_failed'; }
        } catch (\Throwable $e) {
            $sent = false;
            $errorReason = 'smtp_exception';
            $err = substr(preg_replace('/[^A-Za-z0-9 .:_-]/','', (string)$e->getMessage()), 0, 160);
            if (!empty($err)) {
                $errorDetail = $err;
                error_log('[contact.php] SMTP exception: ' . $err);
            }
        }
        // If 587 failed, try port 25 as a fallback (some hosts only allow 25)
        if (!$sent) {
            try {
                $mailer = new \PHPMailer\PHPMailer\PHPMailer(true);
                $mailer->isSMTP();
                $mailer->Host = $smtpHost;
                $mailer->SMTPAuth = true;
                $mailer->Username = $smtpUser;
                $mailer->Password = $smtpPass;
                $mailer->SMTPSecure = $smtpSecure; // 'tls'
                $mailer->Port = 25; // fallback to 25
                $mailer->CharSet = 'UTF-8';
                $mailer->SMTPDebug = 2;
                $mailer->Debugoutput = 'error_log';

                $mailer->setFrom($fromEmail, $siteName);
                $mailer->addAddress($to);
                if ($email !== '') {
                    $mailer->addReplyTo($email);
                }
                $mailer->addCustomHeader('X-PI-Transport', 'SMTP');
                $mailer->Subject = $subject;
                $mailer->Body = $body;
                $mailer->AltBody = $body;

                $sent = $mailer->send();
                if (!$sent) { $errorReason = 'smtp_25_send_failed'; }
            } catch (\Throwable $e2) {
                $sent = false;
                $errorReason = 'smtp_25_exception';
                $err2 = substr(preg_replace('/[^A-Za-z0-9 .:_-]/','', (string)$e2->getMessage()), 0, 160);
                if (!empty($err2)) {
                    $errorDetail = $err2;
                    error_log('[contact.php] SMTP exception (25): ' . $err2);
                }
            }
        }
    } else {
        $errorReason = 'lib_missing';
    }
} else {
    $errorReason = 'smtp_auth_missing';
}
if ($sent === false && !$usingSmtp) {
    $sent = @mail($to, $subject, $body, implode("\r\n", $headers), '-f ' . $fromEmail);
    if (!$sent) { $errorReason = 'mail_failed'; }
}

// Redirect to thank you page with status
if ($sent) {
    header('Location: /thank-you.html?status=ok');
} else {
    $qs = 'status=error';
    if ($errorReason !== '') { $qs .= '&reason=' . urlencode($errorReason); }
    if (isset($errorDetail)) { $qs .= '&detail=' . urlencode($errorDetail); }
    header('Location: /thank-you.html?' . $qs);
}
exit;


