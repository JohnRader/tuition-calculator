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
  value: string | number | boolean | null;
  errors: (string | undefined)[];
}

export interface ComboBoxValue {
  label: string;
  value: string;
}

export type FormState = TuitionROIFormState;

/* OnboardingForm types */
export enum TuitionROIFormStep {
  UNIVERSITY,
  BUDGET,
  SCORES,
  REVIEW,
}

export enum TuitionROIFormInput {
  UNIVERSITY = 'university',
  IN_STATE = 'in_state',
  MAJOR = 'major',
  INCOME = 'income',
  BUDGET = 'budget',
  GPA = 'gpa',
  TEST_SCORES = 'test_scores',
}

export interface TuitionROIFormState {
  [TuitionROIFormInput.UNIVERSITY]: FormInput;
  [TuitionROIFormInput.MAJOR]: FormInput;
  [TuitionROIFormInput.INCOME]: FormInput;
  [TuitionROIFormInput.IN_STATE]: FormInput;
  [TuitionROIFormInput.BUDGET]: FormInput;
  [TuitionROIFormInput.GPA]: FormInput;
  [TuitionROIFormInput.TEST_SCORES]: FormInput;
}

export enum TuitionROIFormAction {
  SET_FORM = 'SET_FORM',
  VALIDATE_STEP = 'VALIDATE_STEP',
}

export type SetFormAction = {
  type: TuitionROIFormAction.SET_FORM;
  input: TuitionROIFormInput;
  payload: string | number | boolean;
};

export type ValidateStepAction = {
  type: TuitionROIFormAction.VALIDATE_STEP;
  step: TuitionROIFormStep;
};

export type TuitionROIFormActions = SetFormAction | ValidateStepAction;
