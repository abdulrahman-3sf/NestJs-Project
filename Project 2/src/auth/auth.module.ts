import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConsumersModule } from 'src/consumers/consumers.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [forwardRef(() => ConsumersModule), PassportModule, JwtModule.register({
    secret: 'SECRET',
    signOptions: {expiresIn: '60s'},
  })], // PassportModule.register({ session: true })
  providers: [AuthService, LocalStrategy], // SessionSerializer
  exports: [AuthService],
})
export class AuthModule {}
