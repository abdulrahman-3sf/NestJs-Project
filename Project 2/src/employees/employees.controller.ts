import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Get()
  async getHello(): Promise<any> {
    await this.employeesService.examples();
    return 'Examples Completed!';
  }

  @Get('getemployee')
  getEmploee(): any {
    return this.employeesService.getEmployeeById(2);
  }
}
