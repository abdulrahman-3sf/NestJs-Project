import { Injectable } from '@nestjs/common';
import { SomethingService } from './something/something.service';
import { LoggerService } from './logger/logger.service';

@Injectable()
export class AppService {
  constructor(
    private readonly somethingService: SomethingService,
    private readonly loggerService: LoggerService
  ) {}

  getHello(): string {
    return this.loggerService.log('Hello World! ' + this.somethingService.work());
  }
}