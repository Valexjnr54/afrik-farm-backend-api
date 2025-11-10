const path = require('path');
const fs = require('fs');
const ejs = require('ejs');
const nodemailer = require('nodemailer');

const MAIL_DEBUG = process.env.MAIL_DEBUG === 'true';

// Helper: Send via SendGrid HTTP API when configured
const SENDGRID_FROM_EMAIL = process.env.SENDGRID_FROM_EMAIL || 'support@eyzmo.com';
const SENDGRID_FROM_NAME = process.env.SENDGRID_FROM_NAME || 'Afrik Farm';

async function sendViaSendGrid(_from: { email: string; name?: string } | null, to: string, subject: string, html: string) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  if (!SENDGRID_API_KEY) throw new Error('SendGrid API key not configured');

  const body = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: SENDGRID_FROM_EMAIL, name: SENDGRID_FROM_NAME },
    subject,
    content: [{ type: 'text/html', value: html }]
  };

  const res = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body),
    // small timeout isn't directly supported by fetch API here - rely on platform timeout
  });

  if (!res.ok) {
    const text = await res.text().catch(() => 'unable to read body');
    // include details from SendGrid for easier debugging
    throw new Error(`SendGrid send failed: ${res.status} ${res.statusText} - ${text}`);
  }

  return true;
}

// Helper: Send via SMTP using nodemailer
async function sendViaSMTP(from: { email: string; name?: string } | null, to: string, subject: string, html: string) {
  const MAIL_HOST = process.env.MAIL_HOST;
  const MAIL_PORT = process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : undefined;
  const MAIL_USER = process.env.MAIL_USER;
  const MAIL_PASSWORD = process.env.MAIL_PASSWORD;
  const MAIL_SECURE = process.env.MAIL_SECURE === 'true' || (MAIL_PORT === 465);

  if (!MAIL_HOST || !MAIL_USER || !MAIL_PASSWORD || !MAIL_PORT) {
    throw new Error('SMTP configuration incomplete');
  }

  const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: !!MAIL_SECURE,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASSWORD,
    },
  });

  const fromHeader = from ? `${from.name ? `${from.name} ` : ''}<${from.email}>` : `${process.env.SENDGRID_FROM_NAME || 'Afrik Farm'} <${process.env.SENDGRID_FROM_EMAIL || 'no-reply@afrikfarm.com'}>`;

  const info = await transporter.sendMail({
    from: fromHeader,
    to,
    subject,
    html,
  });

  if (MAIL_DEBUG) console.log('SMTP send result:', info);

  return info;
}

// Helper to decide whether to force-send via SendGrid (useful for hosts that block SMTP)
function shouldForceSendGrid(): boolean {
  return process.env.MAIL_FORCE_SENDGRID === 'true' && !!process.env.SENDGRID_API_KEY;
}

// By default prefer SMTP. SendGrid will be used only when explicitly requested
// via MAIL_PREFER_SENDGRID=true or when forced via MAIL_FORCE_SENDGRID=true.
function preferSendGrid(): boolean {
  return !!process.env.SENDGRID_API_KEY && process.env.MAIL_PREFER_SENDGRID === 'true';
}

// Verify that a mail transport is available (SendGrid or SMTP)
export async function verifyMailTransport(): Promise<{ ok: boolean; provider: string; detail?: string }> {
  // Prefer SendGrid when configured
  if (process.env.SENDGRID_API_KEY) {
    try {
      const res = await fetch('https://api.sendgrid.com/v3/user/account', {
        method: 'GET',
        headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
      });
      if (res.ok) return { ok: true, provider: 'sendgrid' };
      const text = await res.text().catch(() => 'no body');
      // fallthrough to SMTP check if SendGrid responds with non-ok
      if (process.env.MAIL_HOST && process.env.MAIL_USER && process.env.MAIL_PASSWORD && process.env.MAIL_PORT) {
        // check SMTP
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT as string, 10),
            secure: (process.env.MAIL_SECURE === 'true') || (process.env.MAIL_PORT === '465'),
            auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASSWORD },
          });
          await transporter.verify();
          return { ok: true, provider: 'smtp', detail: `sendgrid: ${res.status} ${res.statusText} - ${text}` };
        } catch (smtpErr: any) {
          return { ok: false, provider: 'both', detail: `sendgrid: ${res.status} ${res.statusText} - ${text}; smtp: ${smtpErr && smtpErr.message ? smtpErr.message : String(smtpErr)}` };
        }
      }
      return { ok: false, provider: 'sendgrid', detail: `${res.status} ${res.statusText} - ${text}` };
    } catch (err: any) {
      // If SendGrid fails (network or key invalid) try SMTP if configured
      if (process.env.MAIL_HOST && process.env.MAIL_USER && process.env.MAIL_PASSWORD && process.env.MAIL_PORT) {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: parseInt(process.env.MAIL_PORT as string, 10),
            secure: (process.env.MAIL_SECURE === 'true') || (process.env.MAIL_PORT === '465'),
            auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASSWORD },
          });
          await transporter.verify();
          return { ok: true, provider: 'smtp', detail: err && err.message ? err.message : String(err) };
        } catch (smtpErr: any) {
          return { ok: false, provider: 'both', detail: `sendgrid: ${err && err.message ? err.message : String(err)}; smtp: ${smtpErr && smtpErr.message ? smtpErr.message : String(smtpErr)}` };
        }
      }
      return { ok: false, provider: 'sendgrid', detail: err && err.message ? err.message : String(err) };
    }
  }

  // No SendGrid configured, try SMTP if configured
  if (process.env.MAIL_HOST && process.env.MAIL_USER && process.env.MAIL_PASSWORD && process.env.MAIL_PORT) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: parseInt(process.env.MAIL_PORT as string, 10),
        secure: (process.env.MAIL_SECURE === 'true') || (process.env.MAIL_PORT === '465'),
        auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASSWORD },
      });
      await transporter.verify();
      return { ok: true, provider: 'smtp' };
    } catch (smtpErr: any) {
      return { ok: false, provider: 'smtp', detail: smtpErr && smtpErr.message ? smtpErr.message : String(smtpErr) };
    }
  }

  return { ok: false, provider: 'none', detail: 'no mail provider configured' };
}

export async function sendWelcomeEmail(email: string, subject: string, user:object, temp_password:string) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/welcome.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');
//   const template = await ejs.renderFile(templatePath, { fullname, email: email });

  const mailOptions = {
    from: `${SENDGRID_FROM_NAME} <${SENDGRID_FROM_EMAIL}>`,
    to: email,
    subject: subject,
    html: ejs.render(template, { user, email, temp_password }),
  };

    // Attempt SendGrid first when preferred, otherwise SMTP
    const fromObj = { email: 'no-reply@afrikfarm.com', name: 'Afrik Farm' };
    if (shouldForceSendGrid() || preferSendGrid()) {
      try {
        await sendViaSendGrid(fromObj, email, subject, mailOptions.html as string);
        if (MAIL_DEBUG) console.log('Email sent successfully via SendGrid to', email);
        return;
      } catch (err) {
        console.error('SendGrid send failed, will attempt SMTP fallback if configured:', err);
        // fallthrough to SMTP
      }
    }

    // Try SMTP fallback
    try {
      await sendViaSMTP(fromObj, email, subject, mailOptions.html as string);
      if (MAIL_DEBUG) console.log('Email sent successfully via SMTP to', email);
      return;
    } catch (smtpErr) {
      console.error('SMTP send failed:', smtpErr);
      throw smtpErr;
    }
}

export async function sendVerificationEmail(email:string, subject:string, verification_code:string, user:object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/verification.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: `${SENDGRID_FROM_NAME} <${SENDGRID_FROM_EMAIL}>`,
    to: email,
    subject: subject,
    html: ejs.render(template, { verification_code:verification_code, user:user, email:email }),
  };

  const fromObj = { email: 'no-reply@afrikfarm.com', name: 'Afrik Farm' };
  if (shouldForceSendGrid() || preferSendGrid()) {
    try {
      await sendViaSendGrid(fromObj, email, subject, mailOptions.html as string);
      if (MAIL_DEBUG) console.log('Verification email sent via SendGrid to', email);
      return;
    } catch (err) {
      console.error('SendGrid send failed, will attempt SMTP fallback if configured:', err);
      // fallthrough to SMTP
    }
  }

  try {
    await sendViaSMTP(fromObj, email, subject, mailOptions.html as string);
    if (MAIL_DEBUG) console.log('Verification email sent via SMTP to', email);
    return;
  } catch (smtpErr) {
    console.error('SMTP send failed:', smtpErr);
    throw smtpErr;
  }
}