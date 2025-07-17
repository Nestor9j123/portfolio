import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Méthode non autorisée' });
  }

  const { nom, email, message } = req.body;
  if (!nom || !email || !message) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  // Configure le transporteur SMTP (exemple avec Gmail, à adapter)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_TO,
      subject: `Nouveau message de ${nom}`,
      text: message,
      html: `<p><b>Nom:</b> ${nom}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br>${message}</p>`
    });
    res.status(200).json({ message: 'Message envoyé avec succès !' });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email", error: error.message });
  }
} 