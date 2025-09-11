import { Controller, Get, Post } from '@nestjs/common';
import { ConsumersService } from './consumers.service';

@Controller('consumers')
export class ConsumersController {
  constructor(private readonly consumersService: ConsumersService) {}

  @Post('login')
  login(): any {
    return {};
  }

  @Get('protected')
  getHello(): any {
    return this.consumersService.getHello();
  }
}
