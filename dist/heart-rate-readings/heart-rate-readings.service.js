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
exports.HeartRateReadingsService = void 0;
const common_1 = require("@nestjs/common");
const data_service_1 = require("../data/data.service");
const request_tracking_service_1 = require("../request-tracking/request-tracking.service");
let HeartRateReadingsService = class HeartRateReadingsService {
    dataService;
    requestTrackingService;
    constructor(dataService, requestTrackingService) {
        this.dataService = dataService;
        this.requestTrackingService = requestTrackingService;
    }
    getAllReadings() {
        return this.dataService.getAllHeartRateReadings();
    }
    getReadingsByPatientId(patientId) {
        const patient = this.dataService.getPatientById(patientId);
        if (!patient) {
            throw new common_1.NotFoundException(`Patient with ID ${patientId} not found`);
        }
        this.requestTrackingService.trackPatientRequest(patientId);
        return this.dataService.getHeartRateReadingsByPatientId(patientId);
    }
    getHighHeartRateEvents(threshold = 100) {
        const allReadings = this.dataService.getAllHeartRateReadings();
        return allReadings.filter(reading => reading.heartRate > threshold);
    }
    getHeartRateAnalytics(patientId, startTime, endTime) {
        let filteredReadings = this.dataService.getAllHeartRateReadings();
        const now = new Date().toISOString();
        if (patientId) {
            const patient = this.dataService.getPatientById(patientId);
            if (!patient) {
                throw new common_1.NotFoundException(`Patient with ID ${patientId} not found`);
            }
            this.requestTrackingService.trackPatientRequest(patientId);
            filteredReadings = filteredReadings.filter(reading => reading.patientId === patientId);
        }
        const startDateTime = startTime ? new Date(startTime) : new Date(0);
        const endDateTime = endTime ? new Date(endTime) : new Date(now);
        if (startTime || endTime) {
            filteredReadings = filteredReadings.filter(reading => {
                const readingTime = new Date(reading.timestamp);
                return readingTime >= startDateTime && readingTime <= endDateTime;
            });
        }
        const readingsByPatient = filteredReadings.reduce((acc, reading) => {
            if (!acc[reading.patientId]) {
                acc[reading.patientId] = [];
            }
            acc[reading.patientId].push(reading);
            return acc;
        }, {});
        return Object.keys(readingsByPatient).map(id => {
            const patientReadings = readingsByPatient[id];
            const heartRates = patientReadings.map(reading => reading.heartRate);
            const patient = this.dataService.getPatientById(id);
            const sum = heartRates.reduce((total, rate) => total + rate, 0);
            const average = sum / heartRates.length;
            const maximum = Math.max(...heartRates);
            const minimum = Math.min(...heartRates);
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
};
exports.HeartRateReadingsService = HeartRateReadingsService;
exports.HeartRateReadingsService = HeartRateReadingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_service_1.DataService,
        request_tracking_service_1.RequestTrackingService])
], HeartRateReadingsService);
//# sourceMappingURL=heart-rate-readings.service.js.map