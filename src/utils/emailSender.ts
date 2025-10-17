import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import ejs from 'ejs';

const MAIL_PORT = Number(process.env.MAIL_PORT ?? 465);
const MAIL_SECURE = typeof process.env.MAIL_SECURE !== 'undefined' ? process.env.MAIL_SECURE === 'true' : MAIL_PORT === 465;
const MAIL_DEBUG = process.env.MAIL_DEBUG === 'true';

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: MAIL_PORT,
  secure: MAIL_SECURE,
  auth: process.env.MAIL_USER ? {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  } : undefined,
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  // timeouts (ms)
  connectionTimeout: 10000,
  greetingTimeout: 5000,
  socketTimeout: 10000,
  logger: MAIL_DEBUG,
  debug: MAIL_DEBUG,
});

// Verify transporter at startup (non-blocking)
transporter.verify().then(() => {
  if (MAIL_DEBUG) console.log('Mail transporter verified and ready');
}).catch((err) => {
  console.warn('Mail transporter verification failed:', err && err.message ? err.message : err);
});

// Helper: Send via SendGrid HTTP API when configured
async function sendViaSendGrid(from: { email: string; name?: string }, to: string, subject: string, html: string) {
  const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
  if (!SENDGRID_API_KEY) throw new Error('SendGrid API key not configured');

  const body = {
    personalizations: [{ to: [{ email: to }] }],
    from: { email: from.email, name: from.name ?? undefined },
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
    throw new Error(`SendGrid send failed: ${res.status} ${res.statusText} - ${text}`);
  }

  return true;
}

export async function sendWelcomeEmail(email: string, subject: string, user:object, temp_password:string) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/welcome.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');
//   const template = await ejs.renderFile(templatePath, { fullname, email: email });

  const mailOptions = {
    from: 'Afrik Farm <no-reply@afrikfarm.com>',
    to: email,
    subject: subject,
    html: ejs.render(template, { user, email, temp_password }),
  };

  try {
    // try sending via SMTP transporter with a small retry
    try {
      await transporter.sendMail(mailOptions);
      if (MAIL_DEBUG) console.log('Email sent successfully via SMTP to', email);
      return;
    } catch (smtpErr) {
      // log and attempt fallback
      console.warn('SMTP send failed, will attempt fallback if configured:', smtpErr && (smtpErr as any).code ? `${(smtpErr as any).code}` : smtpErr);
      // if SendGrid configured, try API fallback
      if (process.env.SENDGRID_API_KEY) {
        try {
          await sendViaSendGrid({ email: 'no-reply@afrikfarm.com', name: 'Afrik Farm' }, email, subject, mailOptions.html as string);
          console.log('Email sent successfully via SendGrid fallback to', email);
          return;
        } catch (sgErr) {
          console.error('SendGrid fallback failed:', sgErr);
          throw sgErr;
        }
      }

      throw smtpErr;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    // Re-throw so callers can decide what to do (or you can suppress in production)
    throw error;
  }
}

export async function sendVerificationEmail(email:string, subject:string, verification_code:string, user:object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/verification.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'Afrik Farm <no-reply@afrikfarm.com>',
    to: email,
    subject: subject,
    html: ejs.render(template, { verification_code:verification_code, user:user, email:email }),
  };

  try {
    try {
      await transporter.sendMail(mailOptions);
      if (MAIL_DEBUG) console.log('Verification email sent via SMTP to', email);
      return;
    } catch (smtpErr) {
      console.warn('SMTP send failed, will attempt fallback if configured:', smtpErr && (smtpErr as any).code ? `${(smtpErr as any).code}` : smtpErr);
      if (process.env.SENDGRID_API_KEY) {
        try {
          await sendViaSendGrid({ email: 'no-reply@afrikfarm.com', name: 'Afrik Farm' }, email, subject, mailOptions.html as string);
          console.log('Verification email sent successfully via SendGrid fallback to', email);
          return;
        } catch (sgErr) {
          console.error('SendGrid fallback failed:', sgErr);
          throw sgErr;
        }
      }
      throw smtpErr;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}