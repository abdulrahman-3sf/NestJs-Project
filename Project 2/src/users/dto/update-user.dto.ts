import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsNumber, MaxLength } from "class-validator";

export class UpdateUserDto {
    @ApiProperty()
    @IsNumber()
    id: number;

    @ApiProperty()
    @IsAlpha()
    @MaxLength(10)
    name: string;
}