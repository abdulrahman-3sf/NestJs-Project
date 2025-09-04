import { Injectable } from '@nestjs/common';
import { SomethingService } from './something/something.service';
import { LoggerService } from './logger/logger.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly somethingService: SomethingService,
    private readonly loggerService: LoggerService,
    private readonly configService: ConfigService,
  ) {}

  getHello(): string {
    const prefix = this.configService.get<string>('app.messagePrefix');
    return this.loggerService.log(prefix + ' Hello World! ' + this.somethingService.work());
  }
}