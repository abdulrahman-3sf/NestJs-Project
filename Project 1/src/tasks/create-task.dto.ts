import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { enTaskStatus } from "./task.model";

export class CreateTaskDTO {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsEnum(enTaskStatus)
    status: enTaskStatus;
}