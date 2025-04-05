import { Patient } from './interfaces/patient.interface';
import { HeartRateReading } from './interfaces/heart-rate-reading.interface';
export declare class DataService {
    private readonly dataPath;
    private patientsData;
    constructor();
    private loadData;
    getAllPatients(): Patient[];
    getPatientById(id: string): Patient | undefined;
    getAllHeartRateReadings(): HeartRateReading[];
    getHeartRateReadingsByPatientId(patientId: string): HeartRateReading[];
}
