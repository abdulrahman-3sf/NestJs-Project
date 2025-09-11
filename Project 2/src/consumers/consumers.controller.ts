import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Controller('consumers')
export class ConsumersController {
  constructor(private readonly consumersService: ConsumersService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return req.user;
  }

  @Get('protected')
  getHello(): any {
    return this.consumersService.getHello();
  }
}
