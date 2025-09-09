import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ContactInfo } from "./contact-info.entity";
import { Task } from "./task.entity";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToOne(() => ContactInfo, contactInfo => contactInfo.employee)
    contactInfo: ContactInfo;

    @OneToMany(() => Task, tasks => tasks.employee)
    tasks: Task[];
}