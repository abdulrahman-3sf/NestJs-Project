import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConsumersModule } from 'src/consumers/consumers.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [ConsumersModule, PassportModule],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule {}
