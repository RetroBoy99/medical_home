import { Injectable } from '@nestjs/common';
import { RequestTrackingData } from './interfaces/request-tracking.interface';
import { DataService } from '../data/data.service';

@Injectable()
export class RequestTrackingService {
  private requestCounts: Map<string, RequestTrackingData> = new Map();

  constructor(private readonly dataService: DataService) {}

  trackPatientRequest(patientId: string): void {
    const now = new Date().toISOString();
    
    if (this.requestCounts.has(patientId)) {
      const current = this.requestCounts.get(patientId);
      if (current) {
        this.requestCounts.set(patientId, {
          patientId,
          count: current.count + 1,
          lastRequested: now,
        });
      }
    } else {
      // Check if patient exists before tracking
      const patient = this.dataService.getPatientById(patientId);
      if (patient) {
        this.requestCounts.set(patientId, {
          patientId,
          count: 1,
          lastRequested: now,
        });
      }
    }
  }

  getAllRequestTracks(): RequestTrackingData[] {
    return Array.from(this.requestCounts.values());
  }

  getRequestTrackByPatientId(patientId: string): RequestTrackingData | undefined {
    return this.requestCounts.get(patientId);
  }

  getTopRequestedPatients(limit: number = 5): RequestTrackingData[] {
    return Array.from(this.requestCounts.values())
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  }
} 