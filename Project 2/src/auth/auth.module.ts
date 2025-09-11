import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConsumersModule } from 'src/consumers/consumers.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [ConsumersModule, PassportModule.register({ session: true })],
  providers: [AuthService, LocalStrategy, SessionSerializer]
})
export class AuthModule {}
