import { Injectable } from '@nestjs/common';
import { SomethingService } from './something/something.service';
import { LoggerService } from './logger/logger.service';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from './config/config.types';
import { AppConfig } from './config/app.config';

@Injectable()
export class AppService {
  constructor(
    private readonly somethingService: SomethingService,
    private readonly loggerService: LoggerService,
    private readonly configService: ConfigService<ConfigType>,
  ) {}

  getHello(): string {
    const prefix = this.configService.get<AppConfig>('app')?.messagePrefix;
    return this.loggerService.log(prefix + ' Hello World! ' + this.somethingService.work());
  }
}