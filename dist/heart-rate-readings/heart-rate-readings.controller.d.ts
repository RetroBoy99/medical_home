import { HeartRateReadingsService } from './heart-rate-readings.service';
import { HeartRateReading } from '../data/interfaces/heart-rate-reading.interface';
import { HeartRateAnalytics } from './interfaces/heart-rate-analytics.interface';
export declare class HeartRateReadingsController {
    private readonly heartRateReadingsService;
    constructor(heartRateReadingsService: HeartRateReadingsService);
    getAllReadings(): HeartRateReading[];
    getReadingsByPatientId(patientId: string): HeartRateReading[];
    getHighHeartRateEvents(threshold?: string): HeartRateReading[];
    getHeartRateAnalytics(patientId?: string, startTime?: string, endTime?: string): HeartRateAnalytics[];
}
