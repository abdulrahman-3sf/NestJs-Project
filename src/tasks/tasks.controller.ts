import { BadRequestException, Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import type { ITask } from './task.model';
import { CreateTaskDTO } from './create-task.dto';
import { FindOneParams } from './find-one.params';
import { UpdateTaskStatusDTO } from './update-task-status.dto';
import { UpdateTaskDTO } from './update-task.dto';
import { isInstance } from 'class-validator';
import { WrongTaskStatusException } from './wrong-task-status.exception';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TasksService) {}

    @Get()
    public findAll() : ITask[] {
        return this.taskService.findAll();
    }

    private findOneOrFail(id: string) {
        const task = this.taskService.findOne(id);
        
        if (!task) {
            throw new NotFoundException();
        }

        return task;
    }

    @Get('/:id')
    public findOne(@Param() params: FindOneParams) : ITask {
        return this.findOneOrFail(params.id);
    }

    @Post()
    public create(@Body() createTaskDTO: CreateTaskDTO) : ITask {
        return this.taskService.create(createTaskDTO);
    }

    // @Patch('/:id/status')
    // public updateTaskStatus(
    //     @Param() params: FindOneParams,
    //     @Body() body: UpdateTaskStatusDTO
    // ) : ITask {
    //     const task = this.findOneOrFail(params.id);
    //     task.status = body.status;

    //     return task;
    // }

    @Patch('/:id')
    public updateTask(
        @Param() params: FindOneParams,
        @Body() updateTaskDTO: UpdateTaskDTO
    ) : ITask {
        const task = this.findOneOrFail(params.id);
        try {
            return this.taskService.updateTask(task, updateTaskDTO);
        } catch (error) {
            if (error instanceof WrongTaskStatusException) {
                throw new BadRequestException([error.message]);
            }
            throw error;
        }   
        
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    public deleteTask(@Param() params: FindOneParams) : void {
        const task = this.findOneOrFail(params.id);
        this.taskService.deleteTask(task);
    }
}
