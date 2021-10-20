import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('测试接口')
@Controller()
export class AppController {
  constructor(private appService: AppService) {}
  @ApiOperation({ summary: '你好世界' })
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
