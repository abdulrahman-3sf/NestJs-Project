import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    @Get()
    public findAll() : string[] {
        return ['a', 'b', 'c'];
    }

    @Get('/:id')
    public findOne(@Param('id') id:number) : string {
        return `The number is ${id}`;
    }
}
