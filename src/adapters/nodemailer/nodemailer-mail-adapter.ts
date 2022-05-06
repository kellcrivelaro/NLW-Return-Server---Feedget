import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

//configuração mailtrap
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "50bb7fa613665a",
    pass: "fdb0ca09a842ec",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <contato@feedget.com>",
      to: "Kell Crivelaro <kellcrivelaro92@gmail.com>",
      subject,
      html: body,
    });
  }
}
