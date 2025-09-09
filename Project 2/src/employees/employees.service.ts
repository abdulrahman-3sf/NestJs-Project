import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { ContactInfo } from './entities/contact-info.entity';
import { Task } from './entities/task.entity';
import { Meeting } from './entities/meeting.entity';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(Employee) private readonly employeeRepo: Repository<Employee>,
        @InjectRepository(ContactInfo) private readonly contactInfoRepo: Repository<ContactInfo>,
        @InjectRepository(Task) private readonly taskRepo: Repository<Task>,
        @InjectRepository(Meeting) private readonly meetingRepo: Repository<Meeting>,
    ) {}

    async examples() {
        const ceo = this.employeeRepo.create({name: '3sf'});
        await this.employeeRepo.save(ceo);

        const ceoContactInfo = this.contactInfoRepo.create({email: 'aaalassaf@outlook.com'});
        ceoContactInfo.employee = ceo;
        await this.contactInfoRepo.save(ceoContactInfo);

        const manager = this.employeeRepo.create({
            name: 'alex',
            manager: ceo,
        });

        const task1 = this.taskRepo.create({name: 'Hire People'});
        await this.taskRepo.save(task1);
        const task2 = this.taskRepo.create({name: 'Present to CEO'});
        await this.taskRepo.save(task2);

        manager.tasks = [task1, task2];

        const meeting1 = this.meetingRepo.create({meetingUrl: 'meeting.com/3s1q2cz'});
        meeting1.attendees = [ceo];
        await this.meetingRepo.save(meeting1);

        manager.meetings = [meeting1];

        await this.employeeRepo.save(manager);
    }

    getEmployeeById(id: number) {
        // return this.employeeRepo.findOne({where: {id}, relations: ['manager', 'directReports', 'tasks', 'contactInfo', 'meetings']});
        return this.employeeRepo
        .createQueryBuilder('employee')
        .leftJoinAndSelect('employee.directReports', 'directReports')
        .leftJoinAndSelect('employee.meetings', 'meetings')
        .leftJoinAndSelect('employee.tasks', 'tasks')
        .where('employee.id = :employeeId', {employeeId: id})
        .getOne();
    }
}
