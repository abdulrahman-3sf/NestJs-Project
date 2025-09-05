import { IsEnum, IsNotEmpty } from "class-validator";
import { enTaskStatus } from "./task.model";

export class UpdateTaskStatusDTO {
    @IsNotEmpty()
    @IsEnum(enTaskStatus)
    status: enTaskStatus
}