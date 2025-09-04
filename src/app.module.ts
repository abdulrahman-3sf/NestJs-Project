import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SomethingService } from './something/something.service';
import { MessageFormatterService } from './message-formatter/message-formatter.service';
import { LoggerService } from './logger/logger.service';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './config/app.config';
import { appConfigSchema } from './config/config.types';
import { allow } from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      validationSchema: appConfigSchema,
      validationOptions: {
        abortEarly: true,
      },
    }),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService, SomethingService, MessageFormatterService, LoggerService],
})
export class AppModule {}
