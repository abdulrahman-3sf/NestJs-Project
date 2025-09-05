import { Injectable } from '@nestjs/common';
import { SomethingService } from './something/something.service';
import { LoggerService } from './logger/logger.service';
import { AppConfig } from './config/app.config';
import { TypedConfigService } from './config/typed.config.service';

@Injectable()
export class AppService {
  constructor(
    private readonly somethingService: SomethingService,
    private readonly loggerService: LoggerService,
    private readonly configService: TypedConfigService,
  ) {}

  getHello(): string {
    const prefix = this.configService.get<AppConfig>('app')?.messagePrefix;
    return this.loggerService.log(prefix + ' Hello World! ' + this.somethingService.work());
  }
}