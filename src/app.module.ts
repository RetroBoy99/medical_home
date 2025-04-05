import { Module } from '@nestjs/common';
import { PatientsModule } from './patients/patients.module';
import { HeartRateReadingsModule } from './heart-rate-readings/heart-rate-readings.module';
import { DataModule } from './data/data.module';
import { RequestTrackingModule } from './request-tracking/request-tracking.module';

@Module({
  imports: [
    PatientsModule, 
    HeartRateReadingsModule, 
    DataModule,
    RequestTrackingModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
