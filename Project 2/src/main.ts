import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import session from 'express-session';
import passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(
  //   session({
  //     secret: 'keyboard cat', // get env vars
  //     resave: false,
  //     saveUninitialized: true,
  //     cookie: { maxAge: 1000000 }
  //   }),
  // );

  // app.use(passport.initialize());
  // app.use(passport.session());

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('NestJs APIs')
    .setDescription('the description of the apis')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
