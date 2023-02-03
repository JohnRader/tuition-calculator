import { useEffect, useState, useReducer } from 'react';
import { FormControl } from '@mui/material';

import { setForm, formValidation } from './utils';
import HorizontalFormStepper from '@/components/HorizontalFormStepper';
import OnboardingFormQuestion from './FormQuestion';
import { EnumKeysToArray } from '@/utils';
import {
  OnboardingFormInput,
  OnboardingFormState,
  OnboardingFormStep,
  OnboardingFormActions,
  OnboardingFormAction,
  FormInput,
} from '@/types';

const formReducer = (state: OnboardingFormState, action: OnboardingFormActions) => {
  switch (action.type) {
    case OnboardingFormAction.SET_FORM:
      return setForm(state, action.input, action.payload);

    case OnboardingFormAction.VALIDATE_STEP:
      return formValidation(state, action.step);

    default:
      return state;
  }
};

export default function OnboardingForm() {
  const [step, setStep] = useState<OnboardingFormStep>(OnboardingFormStep.LOCATION);

  const [next, setNext] = useState(false);

  const [stepError, setStepError] = useState(false);

  const [form, dispatch] = useReducer(formReducer, {
    [OnboardingFormInput.CITY]: {
      step: OnboardingFormStep.LOCATION,
      value: '',
      errors: [],
    },
    [OnboardingFormInput.STATE]: {
      step: OnboardingFormStep.LOCATION,
      value: '',
      errors: [],
    },
    [OnboardingFormInput.UNIVERSITY]: {
      step: OnboardingFormStep.UNIVERSITY,
      value: '',
      errors: [],
    },
    [OnboardingFormInput.MAJOR]: {
      step: OnboardingFormStep.UNIVERSITY,
      value: '',
      errors: [],
    },
    [OnboardingFormInput.BUDGET]: {
      step: OnboardingFormStep.BUDGET,
      value: 15000,
      errors: [],
    },
    [OnboardingFormInput.GPA]: {
      step: OnboardingFormStep.SCORES,
      value: '',
      errors: [],
    },
    [OnboardingFormInput.TEST_SCORES]: {
      step: OnboardingFormStep.SCORES,
      value: '',
      errors: [],
    },
  } as OnboardingFormState);

  const handleNext = (isNext: boolean) => {
    if (isNext) {
      setNext(false);
      setStep((prevStep) => prevStep + 1);
    }
  };

  useEffect(() => {
    const invalidInputs = Object.values(form)?.filter(
      (input: FormInput) => step === input.step && input.errors.length,
    );

    if (invalidInputs.length) {
      setStepError(true);
      setNext(false);
    } else {
      handleNext(next);
      setStepError(false);
    }
  }, [form, step]);

  const steps = EnumKeysToArray(OnboardingFormStep);

  const stepContent = OnboardingFormQuestion({
    step, setStep, form, dispatch,
  });

  const optionalSteps = [OnboardingFormStep.SCORES];

  const validateStep = async (currentStep: OnboardingFormStep) => {
    dispatch({ type: OnboardingFormAction.VALIDATE_STEP, step: currentStep });
    setNext(true);
  };

  return (
    <FormControl
      sx={{ padding: '2rem 0', display: 'flex' }}
    >
      <HorizontalFormStepper
        currentStep={step}
        currentStepContent={stepContent}
        setCurrentStep={setStep}
        stepNames={steps}
        optionalSteps={optionalSteps}
        stepError={stepError}
        validateStep={validateStep}
      />
    </FormControl>
  );
}
