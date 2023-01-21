export interface OnboardingFormModel {
  state: string;
  university: string;
  budget: number;
  major: string;
  gpa?: number;
  act_sat?: number;
}

export interface OnboardingFormProps {
  form: OnboardingFormModel;
  setForm: (form: OnboardingFormModel) => void;
}
