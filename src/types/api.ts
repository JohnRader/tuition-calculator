import { TuitionTracker } from '@/models';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export interface TuitionROIRequest {
  state: string;
  city: string;
  university: string;
  major: string;
  budget: number;
  gpa: string;
  testScore: string;
}

export interface TuitionROIResponse {
  data: Partial<TuitionTracker>;
}
