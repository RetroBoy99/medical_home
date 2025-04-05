import { Controller, Get, Param, Query } from '@nestjs/common';
import { RequestTrackingService } from './request-tracking.service';
import { RequestTrackingData } from './interfaces/request-tracking.interface';

@Controller('request-tracking')
export class RequestTrackingController {
  constructor(private readonly requestTrackingService: RequestTrackingService) {}

  @Get()
  getAllRequestTracks(): RequestTrackingData[] {
    return this.requestTrackingService.getAllRequestTracks();
  }

  @Get('patient/:patientId')
  getRequestTrackByPatientId(
    @Param('patientId') patientId: string,
  ): RequestTrackingData | { patientId: string; message: string } {
    const tracking = this.requestTrackingService.getRequestTrackByPatientId(patientId);
    if (!tracking) {
      return { patientId, message: 'No tracking data available for this patient' };
    }
    return tracking;
  }

  @Get('top')
  getTopRequestedPatients(
    @Query('limit') limit?: string,
  ): RequestTrackingData[] {
    const limitValue = limit ? parseInt(limit, 10) : 5;
    return this.requestTrackingService.getTopRequestedPatients(limitValue);
  }
} 