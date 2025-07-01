import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export const mailOptions = {
  from: process.env.GMAIL_USER,
  to: process.env.GMAIL_USER_DEST,
};

export async function sendMail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="padding: 20px; background-color: #f5f5f5; border-radius: 10px;">
          <h2 style="color: #333; margin-bottom: 20px;">New Contact Form Submission</h2>
          <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
          <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
          <div style="background-color: white; padding: 15px; border-radius: 5px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}
