"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.setGlobalPrefix('api');
    await app.listen(3000);
    console.log(`Application is running on: ${await app.getUrl()}`);
    console.log('API endpoints:');
    console.log('- GET /api/patients');
    console.log('- GET /api/patients/:id');
    console.log('- GET /api/heart-rate-readings');
    console.log('- GET /api/heart-rate-readings/patient/:patientId');
}
bootstrap();
//# sourceMappingURL=main.js.map