# Medical API Server

This NestJS API server reads medical data from a JSON file and exposes it through REST endpoints.

## Available Endpoints

### Patients

- `GET /api/patients` - Get all patients
- `GET /api/patients/:id` - Get a specific patient by ID

### Heart Rate Readings

- `GET /api/heart-rate-readings` - Get all heart rate readings
- `GET /api/heart-rate-readings/patient/:patientId` - Get heart rate readings for a specific patient
- `GET /api/heart-rate-readings/high-heart-rate` - Get all readings where heart rate exceeds 100 bpm
- `GET /api/heart-rate-readings/high-heart-rate?threshold=95` - Get all readings where heart rate exceeds the specified threshold
- `GET /api/heart-rate-readings/analytics` - Calculate average, max, and min heart rate per patient
- `GET /api/heart-rate-readings/analytics?patientId=1&startTime=2024-03-01T00:00:00Z&endTime=2024-03-02T00:00:00Z` - Get analytics for a specific patient and time range

### Request Tracking

- `GET /api/request-tracking` - Get tracking data for all patients
- `GET /api/request-tracking/patient/:patientId` - Get tracking data for a specific patient
- `GET /api/request-tracking/top` - Get top 5 most requested patients
- `GET /api/request-tracking/top?limit=10` - Get top N most requested patients

## Running the API

```bash
# Install dependencies
npm install

# Run in development mode
npm run start:dev

# Build for production
npm run build

# Run in production mode
npm run start:prod
```

The API server will be available at http://localhost:3000/api.

## Data Source

The API reads data from a `patients.json` file in the root of the project. This file contains:

- A list of patients with their personal information
- A list of heart rate readings associated with patients

## Example Requests

### Get all patients

```
GET http://localhost:3000/api/patients
```

### Get a specific patient

```
GET http://localhost:3000/api/patients/1
```

### Get all heart rate readings

```
GET http://localhost:3000/api/heart-rate-readings
```

### Get heart rate readings for a specific patient

```
GET http://localhost:3000/api/heart-rate-readings/patient/1
```

### Get high heart rate events (>100 bpm)

```
GET http://localhost:3000/api/heart-rate-readings/high-heart-rate
```

### Get heart rate events above a custom threshold

```
GET http://localhost:3000/api/heart-rate-readings/high-heart-rate?threshold=95
```

### Get heart rate analytics for all patients

```
GET http://localhost:3000/api/heart-rate-readings/analytics
```

### Get heart rate analytics for a specific patient in a time range

```
GET http://localhost:3000/api/heart-rate-readings/analytics?patientId=1&startTime=2024-03-01T00:00:00Z&endTime=2024-03-02T00:00:00Z
```

### Get tracking data for all patients

```
GET http://localhost:3000/api/request-tracking
```

### Get tracking data for a specific patient

```
GET http://localhost:3000/api/request-tracking/patient/1
```

### Get top 5 most requested patients

```
GET http://localhost:3000/api/request-tracking/top
```

### Get top N most requested patients

```
GET http://localhost:3000/api/request-tracking/top?limit=10
```