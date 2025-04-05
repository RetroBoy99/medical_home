import { PatientsService } from './patients.service';
import { Patient } from '../data/interfaces/patient.interface';
export declare class PatientsController {
    private readonly patientsService;
    constructor(patientsService: PatientsService);
    getAllPatients(): Patient[];
    getPatientById(id: string): Patient;
}
