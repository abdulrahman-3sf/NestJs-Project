import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('consumers')
export class ConsumersController {
  constructor(private readonly consumersService: ConsumersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return req.user;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(): any {
    return this.consumersService.getHello();
  }
}
