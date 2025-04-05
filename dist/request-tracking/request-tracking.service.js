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
exports.RequestTrackingService = void 0;
const common_1 = require("@nestjs/common");
const data_service_1 = require("../data/data.service");
let RequestTrackingService = class RequestTrackingService {
    dataService;
    requestCounts = new Map();
    constructor(dataService) {
        this.dataService = dataService;
    }
    trackPatientRequest(patientId) {
        const now = new Date().toISOString();
        if (this.requestCounts.has(patientId)) {
            const current = this.requestCounts.get(patientId);
            if (current) {
                this.requestCounts.set(patientId, {
                    patientId,
                    count: current.count + 1,
                    lastRequested: now,
                });
            }
        }
        else {
            const patient = this.dataService.getPatientById(patientId);
            if (patient) {
                this.requestCounts.set(patientId, {
                    patientId,
                    count: 1,
                    lastRequested: now,
                });
            }
        }
    }
    getAllRequestTracks() {
        return Array.from(this.requestCounts.values());
    }
    getRequestTrackByPatientId(patientId) {
        return this.requestCounts.get(patientId);
    }
    getTopRequestedPatients(limit = 5) {
        return Array.from(this.requestCounts.values())
            .sort((a, b) => b.count - a.count)
            .slice(0, limit);
    }
};
exports.RequestTrackingService = RequestTrackingService;
exports.RequestTrackingService = RequestTrackingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_service_1.DataService])
], RequestTrackingService);
//# sourceMappingURL=request-tracking.service.js.map