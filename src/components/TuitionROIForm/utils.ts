import {
  requiredTextfield, validGPA, validTestScore,
} from '@/utils/form-validation';
import {
  TuitionROIFormInput, TuitionROIFormStep, TuitionROIFormState,
} from '@/types';

export const setForm = (
  state: TuitionROIFormState,
  input: TuitionROIFormInput,
  payload: string | number | boolean | null,
) => {
  switch (input) {
    case TuitionROIFormInput.UNIVERSITY:
      return {
        ...state,
        [TuitionROIFormInput.UNIVERSITY]: {
          ...state.university,
          value: payload,
          errors: [],
        },
      };

    case TuitionROIFormInput.MAJOR:
      return {
        ...state,
        [TuitionROIFormInput.MAJOR]: {
          ...state.major,
          value: payload,
          errors: [],
        },
      };

    case TuitionROIFormInput.INCOME:
      return {
        ...state,
        [TuitionROIFormInput.INCOME]: {
          ...state.income,
          value: payload,
          errors: [],
        },
      };

    case TuitionROIFormInput.BUDGET:
      return {
        ...state,
        [TuitionROIFormInput.BUDGET]: {
          ...state.budget,
          value: payload,
          errors: [],
        },
      };

    case TuitionROIFormInput.IN_STATE:
      return {
        ...state,
        [TuitionROIFormInput.IN_STATE]: {
          ...state.in_state,
          value: payload,
          errors: [],
        },
      };

    case TuitionROIFormInput.GPA:
      return {
        ...state,
        [TuitionROIFormInput.GPA]: {
          ...state.gpa,
          value: payload,
          errors: [],
        },
      };

    case TuitionROIFormInput.TEST_SCORES:
      return {
        ...state,
        [TuitionROIFormInput.TEST_SCORES]: {
          ...state.test_scores,
          value: payload,
          errors: [],
        },
      };

    default:
      return state;
  }
};

export const formValidation = (state: TuitionROIFormState, action: TuitionROIFormStep) => {
  switch (action) {
    case TuitionROIFormStep.UNIVERSITY:
      return {
        ...state,
        [TuitionROIFormInput.UNIVERSITY]: {
          ...state.university,
          errors: requiredTextfield(String(state.university.value))
            ? [requiredTextfield(String(state.university.value))]
            : [],
        },
        [TuitionROIFormInput.MAJOR]: {
          ...state.major,
          errors: requiredTextfield(String(state.major.value))
            ? [requiredTextfield(String(state.major.value))]
            : [],
        },
      };

    case TuitionROIFormStep.BUDGET:
      return {
        ...state,
        [TuitionROIFormInput.BUDGET]: {
          ...state.budget,
          errors: [],
        },
      };

    case TuitionROIFormStep.SCORES:
      if (state.gpa.value) {
        return {
          ...state,
          [TuitionROIFormInput.GPA]: {
            ...state.gpa,
            errors: validGPA(String(state.gpa.value)) ? [validGPA(String(state.gpa.value))] : [],
          },
        };
      }

      if (state.test_scores.value) {
        return {
          ...state,
          [TuitionROIFormInput.TEST_SCORES]: {
            ...state.test_scores,
            errors: validTestScore(String(state.test_scores.value))
              ? [validTestScore(String(state.test_scores.value))]
              : [],
          },
        };
      }

      return state;

    default:
      return state;
  }
};
