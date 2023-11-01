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
      html: buildHtml(serviceOrderId)
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('E-mail enviado:', info.response);
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
    }
  }
}

function buildHtml(serviceOrderId: number): string {
  return `
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
      .container {
        width: 80%;
        margin: 0 auto;
      }
      .header {
        background-color: #000;
        color: #fff;
        padding: 20px;
        text-align: center;
      }
      .content {
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h1>Atualização de Ordem de Serviço</h1>
      </div>
      <div class="content">
        <p>Prezado cliente,</p>
        <p>A sua ordem de serviço de ID ${serviceOrderId} foi atualizada.</p>
        <p>Por favor, confira o status em nosso site para obter mais detalhes.</p>
      </div>
    </div>
  </body>
  </html>
`;
}