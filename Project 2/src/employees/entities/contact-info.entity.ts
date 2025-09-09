import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Employee } from "./employee.entity";

@Entity()
export class ContactInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column({nullable: true})
    phone: string;

    @OneToOne(() => Employee, employee => employee.contactInfo)
    @JoinColumn()
    employee: Employee;
}