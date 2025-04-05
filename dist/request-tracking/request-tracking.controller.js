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
exports.RequestTrackingController = void 0;
const common_1 = require("@nestjs/common");
const request_tracking_service_1 = require("./request-tracking.service");
let RequestTrackingController = class RequestTrackingController {
    requestTrackingService;
    constructor(requestTrackingService) {
        this.requestTrackingService = requestTrackingService;
    }
    getAllRequestTracks() {
        return this.requestTrackingService.getAllRequestTracks();
    }
    getRequestTrackByPatientId(patientId) {
        const tracking = this.requestTrackingService.getRequestTrackByPatientId(patientId);
        if (!tracking) {
            return { patientId, message: 'No tracking data available for this patient' };
        }
        return tracking;
    }
    getTopRequestedPatients(limit) {
        const limitValue = limit ? parseInt(limit, 10) : 5;
        return this.requestTrackingService.getTopRequestedPatients(limitValue);
    }
};
exports.RequestTrackingController = RequestTrackingController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], RequestTrackingController.prototype, "getAllRequestTracks", null);
__decorate([
    (0, common_1.Get)('patient/:patientId'),
    __param(0, (0, common_1.Param)('patientId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], RequestTrackingController.prototype, "getRequestTrackByPatientId", null);
__decorate([
    (0, common_1.Get)('top'),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Array)
], RequestTrackingController.prototype, "getTopRequestedPatients", null);
exports.RequestTrackingController = RequestTrackingController = __decorate([
    (0, common_1.Controller)('request-tracking'),
    __metadata("design:paramtypes", [request_tracking_service_1.RequestTrackingService])
], RequestTrackingController);
//# sourceMappingURL=request-tracking.controller.js.map