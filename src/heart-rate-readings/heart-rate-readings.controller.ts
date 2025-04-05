import { Controller, Get, Param, Query } from '@nestjs/common';
import { HeartRateReadingsService } from './heart-rate-readings.service';
import { HeartRateReading } from '../data/interfaces/heart-rate-reading.interface';
import { HeartRateAnalytics } from './interfaces/heart-rate-analytics.interface';

@Controller('heart-rate-readings')
export class HeartRateReadingsController {
  constructor(
    private readonly heartRateReadingsService: HeartRateReadingsService,
  ) {}

  @Get()
  getAllReadings(): HeartRateReading[] {
    return this.heartRateReadingsService.getAllReadings();
  }

  @Get('patient/:patientId')
  getReadingsByPatientId(
    @Param('patientId') patientId: string,
  ): HeartRateReading[] {
    return this.heartRateReadingsService.getReadingsByPatientId(patientId);
  }

  @Get('high-heart-rate')
  getHighHeartRateEvents(
    @Query('threshold') threshold?: string,
  ): HeartRateReading[] {
    const thresholdValue = threshold ? parseInt(threshold, 10) : 100;
    return this.heartRateReadingsService.getHighHeartRateEvents(thresholdValue);
  }

  @Get('analytics')
  getHeartRateAnalytics(
    @Query('patientId') patientId?: string,
    @Query('startTime') startTime?: string,
    @Query('endTime') endTime?: string,
  ): HeartRateAnalytics[] {
    return this.heartRateReadingsService.getHeartRateAnalytics(
      patientId,
      startTime,
      endTime,
    );
  }
}
