import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_PORT === '465',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendEmail = async (subject, text, html, clientEmail) => {
  try {
    // Email to you
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Message: ${subject}`,
      text: `From: ${clientEmail}\n\n${text}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>From:</strong> ${clientEmail}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <div>${html}</div>
      `,
    });

    // Confirmation email to client
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: clientEmail,
      subject: 'We received your message!',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>${process.env.SITE_NAME}</p>
      `,
    });

    return true;
  } catch (error) {
    console.error('Email error:', error);
    throw error;
  }
};

export default transporter;