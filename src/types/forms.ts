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
  university: string;
  budget: number;
  major: string;
  gpa: number | null;
  test_scores: number | null;
}

export enum OnboardingFormStep {
  STATE,
  UNIVERSITY,
  BUDGET,
  MAJOR,
  PLACEMENT,
}
