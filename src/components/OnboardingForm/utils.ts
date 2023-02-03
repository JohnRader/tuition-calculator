import { required, validGPA, validTestScore } from '@/utils/form-validation';
import { OnboardingFormInput, OnboardingFormStep, OnboardingFormState } from '@/types';

export const setForm = (
  state: OnboardingFormState,
  input: OnboardingFormInput,
  payload: string | number,
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
          errors: required(state.city.value) ? [required(state.city.value)] : [],
        },
        [OnboardingFormInput.STATE]: {
          ...state.state,
          errors: required(state.state.value) ? [required(state.state.value)] : [],
        },
      };

    case OnboardingFormStep.UNIVERSITY:
      return {
        ...state,
        [OnboardingFormInput.UNIVERSITY]: {
          ...state.university,
          errors: required(state.university.value) ? [required(state.university.value)] : [],
        },
        [OnboardingFormInput.MAJOR]: {
          ...state.major,
          errors: required(state.major.value) ? [required(state.major.value)] : [],
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
          errors: validGPA(state.gpa.value) ? [validGPA(state.gpa.value)] : [],
        },
        [OnboardingFormInput.TEST_SCORES]: {
          ...state.test_scores,
          errors: validTestScore(state.test_scores.value)
            ? [validTestScore(state.test_scores.value)]
            : [],
        },
      };

    default:
      return state;
  }
};
