import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('consumers')
export class ConsumersController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);
  }

  // @UseGuards(AuthenticatedGuard)
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): any {
    return req.user; // TODO: require an Bearer token, validate token
  }
}
