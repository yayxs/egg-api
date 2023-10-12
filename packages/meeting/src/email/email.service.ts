import { Injectable } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';

import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      // host:
      host: 'smtp.163.com',
      port: 25,
      secure: false,
      auth: {
        user: 'leaderywl@163.com',
        pass: 'DIUXJCBAIPOOBHUN',
      },
    });
  }
  async sendEmail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: '来自163',
        address: 'leaderywl@163.com',
      },
      to,
      subject,
      html,
    });
  }
}
