import { RequestTrackingData } from './interfaces/request-tracking.interface';
import { DataService } from '../data/data.service';
export declare class RequestTrackingService {
    private readonly dataService;
    private requestCounts;
    constructor(dataService: DataService);
    trackPatientRequest(patientId: string): void;
    getAllRequestTracks(): RequestTrackingData[];
    getRequestTrackByPatientId(patientId: string): RequestTrackingData | undefined;
    getTopRequestedPatients(limit?: number): RequestTrackingData[];
}
