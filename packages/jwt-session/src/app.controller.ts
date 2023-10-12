import {
  Controller,
  Get,
  Inject,
  Res,
  Session,
  Response,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ttt')
  ttt(@Res({ passthrough: true }) response: Response) {
    // 生成一个token 放到 header里
    const newToken = this.jwtService.sign({
      count: 1,
    });

    console.log(newToken);
    // response.setHeader('token', newToken);

    return 'set-token';
  }

  @Get('sss')
  sss(@Session() session) {
    console.log('session是', session);
    session.count = session.count ? session.count + 1 : 1;
    /**
     * {
    "cookie": {
        "originalMaxAge": null,
        "expires": null,
        "httpOnly": true,
        "path": "/"
    },
    "count": 1
}
     */
    return session;
  }
}
