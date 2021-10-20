import {
  Controller,
  Request,
  Post,
  Get,
  UseGuards,
  Body,
} from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';

// @Controller('auth')
@ApiTags('用户管理')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: '登录' })
  @UseGuards(LocalAuthGuard) // 本地策略
  @Post('auth/login')
  async login(@Body() loginDto: LoginDto, @Request() req) {
    console.log('auth.controller-user', req.user);
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
