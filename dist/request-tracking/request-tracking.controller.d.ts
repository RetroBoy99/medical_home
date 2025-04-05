import { RequestTrackingService } from './request-tracking.service';
import { RequestTrackingData } from './interfaces/request-tracking.interface';
export declare class RequestTrackingController {
    private readonly requestTrackingService;
    constructor(requestTrackingService: RequestTrackingService);
    getAllRequestTracks(): RequestTrackingData[];
    getRequestTrackByPatientId(patientId: string): RequestTrackingData | {
        patientId: string;
        message: string;
    };
    getTopRequestedPatients(limit?: string): RequestTrackingData[];
}
