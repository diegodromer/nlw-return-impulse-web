import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "facff3dd4a9cfb",
    pass: "b71808a5e6fec9"
  }
});

export class NodemailerMailAdapter implements MailAdapter{
  async sendMail({subject, body}: SendMailData){
    await  transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Diego Oliveira <diego.dromer@hotmail.com>',
      subject,
      html: body,
    });
  };
}