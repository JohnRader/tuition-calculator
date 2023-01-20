export interface UserInfo {
  firstName: string;
  middleName?: string;
  lastName: string;
  phone: number;
  email: string;
}

export interface Location {
  state: string;
  university: string;
  budget: number;
}

export interface Scores {
  major: string;
  gpa?: number;
  act_sat?: number;
}

export interface OnboardingFormModel {
  userInfo: UserInfo;
  location: Location;
  scores: Scores;
}

export interface OnboardingFormProps {
  form: OnboardingFormModel;
  setForm: (form: OnboardingFormModel) => void;
}
