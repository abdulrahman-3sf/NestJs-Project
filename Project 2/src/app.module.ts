import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TodosModule } from './todos/todos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import appDataSource from '../data-source';
import { User } from './users/entities/user.entity';
import { EmployeesModule } from './employees/employees.module';
import { ConsumersModule } from './consumers/consumers.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(appDataSource.options),
    UsersModule, 
    TodosModule,
    EmployeesModule,
    ConsumersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
