import type { State } from '@/types';

/* Global form types */
export enum FormAction {
  BACK = 'BACK',
  NEXT = 'NEXT',
  SKIP = 'SKIP',
  RESET = 'RESET',
  SUBMIT = 'SUBMIT',
}

export interface FormInput {
  step: number;
  value: string | number | ComboBoxValue;
  errors: (string | undefined)[];
}

export interface ComboBoxValue {
  label: string;
  value: string;
}

export type FormState = OnboardingFormState;

/* OnboardingForm types */
export enum OnboardingFormStep {
  LOCATION,
  UNIVERSITY,
  BUDGET,
  SCORES,
  REVIEW,
}

export enum OnboardingFormInput {
  STATE = 'state',
  CITY = 'city',
  UNIVERSITY = 'university',
  MAJOR = 'major',
  BUDGET = 'budget',
  GPA = 'gpa',
  TEST_SCORES = 'test_scores',
}

export interface OnboardingFormState {
  [OnboardingFormInput.STATE]: FormInput;
  [OnboardingFormInput.CITY]: FormInput;
  [OnboardingFormInput.UNIVERSITY]: FormInput;
  [OnboardingFormInput.MAJOR]: FormInput;
  [OnboardingFormInput.BUDGET]: FormInput;
  [OnboardingFormInput.GPA]: FormInput;
  [OnboardingFormInput.TEST_SCORES]: FormInput;
}

export enum OnboardingFormAction {
  SET_FORM = 'SET_FORM',
  VALIDATE_STEP = 'VALIDATE_STEP',
}

export type SetFormAction = {
  type: OnboardingFormAction.SET_FORM;
  input: OnboardingFormInput;
  payload: string | number | State;
};

export type ValidateStepAction = {
  type: OnboardingFormAction.VALIDATE_STEP;
  step: OnboardingFormStep;
};

export type OnboardingFormActions = SetFormAction | ValidateStepAction;
