// import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
// import { enTaskStatus } from "./task.model";
import { PartialType } from "@nestjs/mapped-types";
import { CreateTaskDTO } from "./create-task.dto";

// method 1:
// export class UpdateTaskDTO {
//     @IsNotEmpty()
//     @IsString()
//     @IsOptional()
//     title?: string;

//     @IsNotEmpty()
//     @IsString()
//     @IsOptional()
//     description?: string;

//     @IsNotEmpty()
//     @IsEnum(enTaskStatus)
//     @IsOptional()
//     status?: enTaskStatus;
// }

// method 2:
export class UpdateTaskDTO extends PartialType(CreateTaskDTO) {}