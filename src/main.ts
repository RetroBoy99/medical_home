import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
