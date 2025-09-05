import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { enTaskStatus } from "./task.model";

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    title: string;
    
    @Column({
        type: 'text',
        nullable: false,
    })
    description: string;

    @Column({
        type: 'enum',
        enum: enTaskStatus,
        default: enTaskStatus.OPEN,
    })
    status: enTaskStatus;
}