import { Module } from '@nestjs/common';
import { HeartRateReadingsController } from './heart-rate-readings.controller';
import { HeartRateReadingsService } from './heart-rate-readings.service';
import { DataModule } from '../data/data.module';
import { RequestTrackingModule } from '../request-tracking/request-tracking.module';

@Module({
  imports: [DataModule, RequestTrackingModule],
  controllers: [HeartRateReadingsController],
  providers: [HeartRateReadingsService],
  exports: [HeartRateReadingsService],
})
export class HeartRateReadingsModule {}
