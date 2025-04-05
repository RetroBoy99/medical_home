import { Injectable, NotFoundException } from '@nestjs/common';
import { DataService } from '../data/data.service';
import { Patient } from '../data/interfaces/patient.interface';
import { RequestTrackingService } from '../request-tracking/request-tracking.service';

@Injectable()
export class PatientsService {
  constructor(
    private readonly dataService: DataService,
    private readonly requestTrackingService: RequestTrackingService,
  ) {}

  getAllPatients(): Patient[] {
    return this.dataService.getAllPatients();
  }

  getPatientById(id: string): Patient {
    const patient = this.dataService.getPatientById(id);
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${id} not found`);
    }
    
    // Track this request
    this.requestTrackingService.trackPatientRequest(id);
    
    return patient;
  }
}
