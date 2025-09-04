import { Injectable } from '@nestjs/common';
import { enTaskStatus, ITask } from './task.model';
import { CreateTaskDTO } from './create-task.dto';
import { randomUUID } from 'crypto';
import { UpdateTaskDTO } from './update-task.dto';
import { WrongTaskStatusException } from './wrong-task-status.exception';

@Injectable()
export class TasksService {
    private tasks: ITask[] = [];

    findAll(): ITask[] {
        return this.tasks;
    }

    findOne(id: string) : ITask | undefined {
        return this.tasks.find(task => task.id == id);
    }

    create(createTaskDTO: CreateTaskDTO) : ITask {
        const task: ITask = {
            id: randomUUID(),
            ...createTaskDTO
        }

        this.tasks.push(task);
        return task;
    }

    private isValidStatusTransition(
        currentStatus: enTaskStatus,
        newStatus: enTaskStatus
    ) : boolean {
        const statusOrder: enTaskStatus[] = [enTaskStatus.OPEN, enTaskStatus.IN_PROGRESS, enTaskStatus.DONE];
        return statusOrder.indexOf(currentStatus) <= statusOrder.indexOf(newStatus);
    }

    updateTask(task: ITask, updateTaskDTO: UpdateTaskDTO) : ITask {
        if (updateTaskDTO.status && !this.isValidStatusTransition(task.status, updateTaskDTO.status)) {
            throw new WrongTaskStatusException();
        }

        Object.assign(task, updateTaskDTO);
        return task;
    }

    deleteTask(task: ITask) : void {
        this.tasks = this.tasks.filter(filteredTask => filteredTask.id != task.id);
    }
}
