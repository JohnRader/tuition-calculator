export enum FormAction {
  BACK = 'BACK',
  NEXT = 'NEXT',
  SKIP = 'SKIP',
  RESET = 'RESET',
  SUBMIT = 'SUBMIT',
}

export type FormState = OnboardingFormState;

export interface OnboardingFormState {
  state: string;
  city: string;
  university: string;
  budget: number;
  major: string;
  gpa?: number;
  test_scores?: number;
}

export enum OnboardingFormStep {
  LOCATION,
  UNIVERSITY,
  BUDGET,
  MAJOR,
  PLACEMENT,
}
