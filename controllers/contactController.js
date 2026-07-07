import { sendEmail } from '../config/email.js';

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message, phone } = req.body;

    const html = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      <p><strong>Subject:</strong> ${subject}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    await sendEmail(subject, message, html, email);

    res.json({
      success: true,
      message: 'Thank you! Your message has been sent successfully. I will get back to you soon!',
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
};