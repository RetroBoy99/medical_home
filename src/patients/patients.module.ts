import { Module } from '@nestjs/common';
import { PatientsController } from './patients.controller';
import { PatientsService } from './patients.service';
import { DataModule } from '../data/data.module';
import { RequestTrackingModule } from '../request-tracking/request-tracking.module';

@Module({
  imports: [DataModule, RequestTrackingModule],
  controllers: [PatientsController],
  providers: [PatientsService],
  exports: [PatientsService],
})
export class PatientsModule {}
