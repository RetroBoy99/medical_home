import { Controller, Get, Param } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { Patient } from '../data/interfaces/patient.interface';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get()
  getAllPatients(): Patient[] {
    return this.patientsService.getAllPatients();
  }

  @Get(':id')
  getPatientById(@Param('id') id: string): Patient {
    return this.patientsService.getPatientById(id);
  }
}
