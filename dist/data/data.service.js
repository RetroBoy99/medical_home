"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let DataService = class DataService {
    dataPath;
    patientsData;
    constructor() {
        this.dataPath = path.join(process.cwd(), 'patients.json');
        this.loadData();
    }
    loadData() {
        try {
            const fileContent = fs.readFileSync(this.dataPath, 'utf-8');
            this.patientsData = JSON.parse(fileContent);
        }
        catch (error) {
            console.error('Error loading data:', error);
            this.patientsData = { patients: [], heartRateReadings: [] };
        }
    }
    getAllPatients() {
        return this.patientsData.patients;
    }
    getPatientById(id) {
        return this.patientsData.patients.find(patient => patient.id === id);
    }
    getAllHeartRateReadings() {
        return this.patientsData.heartRateReadings;
    }
    getHeartRateReadingsByPatientId(patientId) {
        return this.patientsData.heartRateReadings.filter(reading => reading.patientId === patientId);
    }
};
exports.DataService = DataService;
exports.DataService = DataService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], DataService);
//# sourceMappingURL=data.service.js.map