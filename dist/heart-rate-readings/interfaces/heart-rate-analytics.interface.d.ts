export interface HeartRateAnalytics {
    patientId: string;
    patientName: string;
    average: number;
    maximum: number;
    minimum: number;
    readingsCount: number;
    timeRange: {
        start: string;
        end: string;
    };
}
