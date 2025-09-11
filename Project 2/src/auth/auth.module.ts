import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ConsumersModule } from 'src/consumers/consumers.module';

@Module({
  imports: [ConsumersModule],
  providers: [AuthService]
})
export class AuthModule {}
