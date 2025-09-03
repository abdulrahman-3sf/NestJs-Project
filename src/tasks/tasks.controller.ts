import { Controller, Get, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './task.model';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    @Get()
    public findAll() : ITask[] {
        return this.taskService.findAll();
    }

    @Get('/:id')
    public findOne(@Param('id') id:string) : ITask {
        return this.taskService.findOne(id);
    }
}
