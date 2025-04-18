"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeartRateReadingsModule = void 0;
const common_1 = require("@nestjs/common");
const heart_rate_readings_controller_1 = require("./heart-rate-readings.controller");
const heart_rate_readings_service_1 = require("./heart-rate-readings.service");
const data_module_1 = require("../data/data.module");
const request_tracking_module_1 = require("../request-tracking/request-tracking.module");
let HeartRateReadingsModule = class HeartRateReadingsModule {
};
exports.HeartRateReadingsModule = HeartRateReadingsModule;
exports.HeartRateReadingsModule = HeartRateReadingsModule = __decorate([
    (0, common_1.Module)({
        imports: [data_module_1.DataModule, request_tracking_module_1.RequestTrackingModule],
        controllers: [heart_rate_readings_controller_1.HeartRateReadingsController],
        providers: [heart_rate_readings_service_1.HeartRateReadingsService],
        exports: [heart_rate_readings_service_1.HeartRateReadingsService],
    })
], HeartRateReadingsModule);
//# sourceMappingURL=heart-rate-readings.module.js.map