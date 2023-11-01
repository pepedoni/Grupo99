import nodemailer from 'nodemailer';
import IEmailService from './IEmailService';

export default class EmailService implements IEmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'naorespondergrupo99@gmail.com',
        pass: 'bqec chph aevt bkxs',
      },
    });
  }

  async sendEmail(serviceOrderId: number) {
    const mailOptions = {
      from: 'naorespondergrupo99@gmail.com',
      to: "clienteTeste@grupo99.com",
      subject: "Atualização de Ordem De Serviço",
      text: "<p>A sua ordem de serviço de ID " + serviceOrderId + " foi atualizada.</p>"
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('E-mail enviado:', info.response);
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }
  }
}
