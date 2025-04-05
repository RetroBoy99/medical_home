import { Injectable, NotFoundException } from '@nestjs/common';
import { DataService } from '../data/data.service';
import { HeartRateReading } from '../data/interfaces/heart-rate-reading.interface';
import { HeartRateAnalytics } from './interfaces/heart-rate-analytics.interface';
import { RequestTrackingService } from '../request-tracking/request-tracking.service';

@Injectable()
export class HeartRateReadingsService {
  constructor(
    private readonly dataService: DataService,
    private readonly requestTrackingService: RequestTrackingService,
  ) {}

  getAllReadings(): HeartRateReading[] {
    return this.dataService.getAllHeartRateReadings();
  }

  getReadingsByPatientId(patientId: string): HeartRateReading[] {
    const patient = this.dataService.getPatientById(patientId);
    if (!patient) {
      throw new NotFoundException(`Patient with ID ${patientId} not found`);
    }
    
    // Track this request
    this.requestTrackingService.trackPatientRequest(patientId);
    
    return this.dataService.getHeartRateReadingsByPatientId(patientId);
  }

  getHighHeartRateEvents(threshold: number = 100): HeartRateReading[] {
    const allReadings = this.dataService.getAllHeartRateReadings();
    return allReadings.filter(reading => reading.heartRate > threshold);
  }

  getHeartRateAnalytics(patientId?: string, startTime?: string, endTime?: string): HeartRateAnalytics[] {
    let filteredReadings = this.dataService.getAllHeartRateReadings();
    const now = new Date().toISOString();
    
    // Filter by patient id if provided
    if (patientId) {
      const patient = this.dataService.getPatientById(patientId);
      if (!patient) {
        throw new NotFoundException(`Patient with ID ${patientId} not found`);
      }
      
      // Track this request
      this.requestTrackingService.trackPatientRequest(patientId);
      
      filteredReadings = filteredReadings.filter(reading => reading.patientId === patientId);
    }
    
    // Filter by time range if provided
    const startDateTime = startTime ? new Date(startTime) : new Date(0);
    const endDateTime = endTime ? new Date(endTime) : new Date(now);
    
    if (startTime || endTime) {
      filteredReadings = filteredReadings.filter(reading => {
        const readingTime = new Date(reading.timestamp);
        return readingTime >= startDateTime && readingTime <= endDateTime;
      });
    }
    
    // Group readings by patient
    const readingsByPatient = filteredReadings.reduce((acc, reading) => {
      if (!acc[reading.patientId]) {
        acc[reading.patientId] = [];
      }
      acc[reading.patientId].push(reading);
      return acc;
    }, {} as Record<string, HeartRateReading[]>);
    
    // Calculate analytics for each patient
    return Object.keys(readingsByPatient).map(id => {
      const patientReadings = readingsByPatient[id];
      const heartRates = patientReadings.map(reading => reading.heartRate);
      const patient = this.dataService.getPatientById(id);
      
      const sum = heartRates.reduce((total, rate) => total + rate, 0);
      const average = sum / heartRates.length;
      const maximum = Math.max(...heartRates);
      const minimum = Math.min(...heartRates);
      
      // Get actual time range from readings
      const timestamps = patientReadings.map(reading => new Date(reading.timestamp).getTime());
      const actualStartTime = new Date(Math.min(...timestamps)).toISOString();
      const actualEndTime = new Date(Math.max(...timestamps)).toISOString();
      
      return {
        patientId: id,
        patientName: patient?.name || 'Unknown',
        average: parseFloat(average.toFixed(2)),
        maximum,
        minimum,
        readingsCount: patientReadings.length,
        timeRange: {
          start: actualStartTime,
          end: actualEndTime
        }
      };
    });
  }
}
