import { enTaskStatus } from "./task.model";

export class CreateTaskDTO {
    title: string;
    description: string;
    status: enTaskStatus;
}