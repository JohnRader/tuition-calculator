import {
  requiredTextfield, requiredComboBox, validGPA, validTestScore,
} from '@/utils/form-validation';
import {
  OnboardingFormInput, OnboardingFormStep, OnboardingFormState, State,
} from '@/types';

export const setForm = (
  state: OnboardingFormState,
  input: OnboardingFormInput,
  payload: string | number | State,
) => {
  switch (input) {
    case OnboardingFormInput.CITY:
      return {
        ...state,
        [OnboardingFormInput.CITY]: {
          ...state.city,
          value: payload,
          errors: [],
        },
      };

    case OnboardingFormInput.STATE:
      return {
        ...state,
        [OnboardingFormInput.STATE]: {
          ...state.state,
          value: payload,
          errors: [],
        },
      };

    case OnboardingFormInput.UNIVERSITY:
      return {
        ...state,
        [OnboardingFormInput.UNIVERSITY]: {
          ...state.university,
          value: payload,
          errors: [],
        },
      };

    case OnboardingFormInput.MAJOR:
      return {
        ...state,
        [OnboardingFormInput.MAJOR]: {
          ...state.major,
          value: payload,
          errors: [],
        },
      };

    case OnboardingFormInput.BUDGET:
      return {
        ...state,
        [OnboardingFormInput.BUDGET]: {
          ...state.budget,
          value: payload,
          errors: [],
        },
      };

    case OnboardingFormInput.GPA:
      return {
        ...state,
        [OnboardingFormInput.GPA]: {
          ...state.gpa,
          value: payload,
          errors: [],
        },
      };

    case OnboardingFormInput.TEST_SCORES:
      return {
        ...state,
        [OnboardingFormInput.TEST_SCORES]: {
          ...state.test_scores,
          value: payload,
          errors: [],
        },
      };

    default:
      return state;
  }
};

export const formValidation = (state: OnboardingFormState, action: OnboardingFormStep) => {
  switch (action) {
    case OnboardingFormStep.LOCATION:
      return {
        ...state,
        [OnboardingFormInput.CITY]: {
          ...state.city,
          errors: requiredTextfield(String(state.city.value))
            ? [requiredTextfield(String(state.city.value))]
            : [],
        },
        [OnboardingFormInput.STATE]: {
          ...state.state,
          errors: requiredComboBox(state.state.value as State)
            ? [requiredComboBox(state.state.value as State)]
            : [],
        },
      };

    case OnboardingFormStep.UNIVERSITY:
      return {
        ...state,
        [OnboardingFormInput.UNIVERSITY]: {
          ...state.university,
          errors: requiredTextfield(String(state.university.value))
            ? [requiredTextfield(String(state.university.value))]
            : [],
        },
        [OnboardingFormInput.MAJOR]: {
          ...state.major,
          errors: requiredTextfield(String(state.major.value))
            ? [requiredTextfield(String(state.major.value))]
            : [],
        },
      };

    case OnboardingFormStep.BUDGET:
      return {
        ...state,
        [OnboardingFormInput.BUDGET]: {
          ...state.budget,
          errors: [],
        },
      };

    case OnboardingFormStep.SCORES:
      return {
        ...state,
        [OnboardingFormInput.GPA]: {
          ...state.gpa,
          errors: validGPA(String(state.gpa.value)) ? [validGPA(String(state.gpa.value))] : [],
        },
        [OnboardingFormInput.TEST_SCORES]: {
          ...state.test_scores,
          errors: validTestScore(String(state.test_scores.value))
            ? [validTestScore(String(state.test_scores.value))]
            : [],
        },
      };

    default:
      return state;
  }
};
