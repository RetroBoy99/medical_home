import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Patient } from './interfaces/patient.interface';
import { HeartRateReading } from './interfaces/heart-rate-reading.interface';

@Injectable()
export class DataService {
  private readonly dataPath: string;
  private patientsData: {
    patients: Patient[];
    heartRateReadings: HeartRateReading[];
  };

  constructor() {
    this.dataPath = path.join(process.cwd(), 'patients.json');
    this.loadData();
  }

  private loadData() {
    try {
      const fileContent = fs.readFileSync(this.dataPath, 'utf-8');
      this.patientsData = JSON.parse(fileContent);
    } catch (error) {
      console.error('Error loading data:', error);
      this.patientsData = { patients: [], heartRateReadings: [] };
    }
  }

  getAllPatients(): Patient[] {
    return this.patientsData.patients;
  }

  getPatientById(id: string): Patient | undefined {
    return this.patientsData.patients.find(patient => patient.id === id);
  }

  getAllHeartRateReadings(): HeartRateReading[] {
    return this.patientsData.heartRateReadings;
  }

  getHeartRateReadingsByPatientId(patientId: string): HeartRateReading[] {
    return this.patientsData.heartRateReadings.filter(
      reading => reading.patientId === patientId,
    );
  }
}
