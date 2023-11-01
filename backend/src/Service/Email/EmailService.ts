import nodemailer from 'nodemailer';
import IEmailService from './IEmailService';

export default class EmailService implements IEmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'naorespondergrupo99@gmail.com',
        pass: 'mudar123',
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string) {
    const mailOptions = {
      from: 'naorespondergrupo99@gmail.com',
      to: to,
      subject: subject,
      text: text,
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('E-mail enviado:', info.response);
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }
  }
}
