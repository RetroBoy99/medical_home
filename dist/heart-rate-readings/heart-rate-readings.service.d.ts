import { DataService } from '../data/data.service';
import { HeartRateReading } from '../data/interfaces/heart-rate-reading.interface';
import { HeartRateAnalytics } from './interfaces/heart-rate-analytics.interface';
import { RequestTrackingService } from '../request-tracking/request-tracking.service';
export declare class HeartRateReadingsService {
    private readonly dataService;
    private readonly requestTrackingService;
    constructor(dataService: DataService, requestTrackingService: RequestTrackingService);
    getAllReadings(): HeartRateReading[];
    getReadingsByPatientId(patientId: string): HeartRateReading[];
    getHighHeartRateEvents(threshold?: number): HeartRateReading[];
    getHeartRateAnalytics(patientId?: string, startTime?: string, endTime?: string): HeartRateAnalytics[];
}
