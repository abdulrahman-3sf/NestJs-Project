import { forwardRef, Module } from '@nestjs/common';
import { ConsumersService } from './consumers.service';
import { ConsumersController } from './consumers.controller';
import { AuthModule } from 'src/auth/auth.module';
import { JwtStrategy } from 'src/auth/jwt.strategy';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [ConsumersController],
  providers: [ConsumersService, JwtStrategy],
  exports: [ConsumersService],
})
export class ConsumersModule {}
