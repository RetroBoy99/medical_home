import { DataService } from '../data/data.service';
import { Patient } from '../data/interfaces/patient.interface';
import { RequestTrackingService } from '../request-tracking/request-tracking.service';
export declare class PatientsService {
    private readonly dataService;
    private readonly requestTrackingService;
    constructor(dataService: DataService, requestTrackingService: RequestTrackingService);
    getAllPatients(): Patient[];
    getPatientById(id: string): Patient;
}
