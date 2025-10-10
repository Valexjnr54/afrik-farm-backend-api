import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";
import ejs from 'ejs';

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

export async function sendWelcomeEmail(email: string, subject: string, user:object, temp_password:string) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/welcome.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');
//   const template = await ejs.renderFile(templatePath, { fullname, email: email });

  const mailOptions = {
    from: 'Enugu State Food Scheme <no-reply@enusfs.org>',
    to: email,
    subject: subject,
    html: ejs.render(template, { user, email, temp_password }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

export async function sendVerificationEmail(email:string, subject:string, verification_code:string, user:object) {
  // Load the email template
  const templatePath = path.join(__dirname, '../templates/email-templates/verification.ejs');
  // Read the EJS template from the file
  const template = fs.readFileSync(templatePath, 'utf-8');

  const mailOptions = {
    from: 'LEGASI <no-reply@legasi.org>',
    to: email,
    subject: subject,
    html: ejs.render(template, { verification_code:verification_code, user:user, email:email }),
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully.');
  } catch (error) {
    console.error('Error sending email:', error);
  }
}