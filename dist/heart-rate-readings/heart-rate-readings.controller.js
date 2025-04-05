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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartRateReadingsController = void 0;
const common_1 = require("@nestjs/common");
const heart_rate_readings_service_1 = require("./heart-rate-readings.service");
let HeartRateReadingsController = class HeartRateReadingsController {
    heartRateReadingsService;
    constructor(heartRateReadingsService) {
        this.heartRateReadingsService = heartRateReadingsService;
    }
    getAllReadings() {
        return this.heartRateReadingsService.getAllReadings();
    }
    getReadingsByPatientId(patientId) {
        return this.heartRateReadingsService.getReadingsByPatientId(patientId);
    }
    getHighHeartRateEvents(threshold) {
        const thresholdValue = threshold ? parseInt(threshold, 10) : 100;
        return this.heartRateReadingsService.getHighHeartRateEvents(thresholdValue);
    }
    getHeartRateAnalytics(patientId, startTime, endTime) {
        return this.heartRateReadingsService.getHeartRateAnalytics(patientId, startTime, endTime);
    }
};
exports.HeartRateReadingsController = HeartRateReadingsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], HeartRateReadingsController.prototype, "getAllReadings", null);
__decorate([
    (0, common_1.Get)('patient/:patientId'),
    __param(0, (0, common_1.Param)('patientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], HeartRateReadingsController.prototype, "getReadingsByPatientId", null);
__decorate([
    (0, common_1.Get)('high-heart-rate'),
    __param(0, (0, common_1.Query)('threshold')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], HeartRateReadingsController.prototype, "getHighHeartRateEvents", null);
__decorate([
    (0, common_1.Get)('analytics'),
    __param(0, (0, common_1.Query)('patientId')),
    __param(1, (0, common_1.Query)('startTime')),
    __param(2, (0, common_1.Query)('endTime')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Array)
], HeartRateReadingsController.prototype, "getHeartRateAnalytics", null);
exports.HeartRateReadingsController = HeartRateReadingsController = __decorate([
    (0, common_1.Controller)('heart-rate-readings'),
    __metadata("design:paramtypes", [heart_rate_readings_service_1.HeartRateReadingsService])
], HeartRateReadingsController);
//# sourceMappingURL=heart-rate-readings.controller.js.map