import { Module } from '@nestjs/common';
import { RequestTrackingController } from './request-tracking.controller';
import { RequestTrackingService } from './request-tracking.service';
import { DataModule } from '../data/data.module';

@Module({
  imports: [DataModule],
  controllers: [RequestTrackingController],
  providers: [RequestTrackingService],
  exports: [RequestTrackingService],
})
export class RequestTrackingModule {} 