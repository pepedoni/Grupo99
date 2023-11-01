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

  async sendEmail(serviceOrderId: number, clientEmail: string) {
    const mailOptions = {
      from: 'naorespondergrupo99@gmail.com',
      to: clientEmail,
      subject: "Atualização de Ordem De Serviço",
      html: "<p>Prezado cliente,</p>"+
            "<p>A sua ordem de serviço de ID " + serviceOrderId + " foi atualizada."+
            "<br/> Favor conferir o status em nosso site</p>"
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('E-mail enviado:', info.response);
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }
  }
}
