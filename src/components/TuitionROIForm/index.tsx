import { useEffect, useState, useReducer } from 'react';
import { FormControl } from '@mui/material';

import { setForm, formValidation } from './utils';
import HorizontalFormStepper from '@/components/HorizontalFormStepper';
import TuitionROIFormQuestion from './FormQuestion';
import { EnumKeysToArray } from '@/utils';
import {
  TuitionROIFormInput,
  TuitionROIFormState,
  TuitionROIFormStep,
  TuitionROIFormActions,
  TuitionROIFormAction,
  FormInput,
} from '@/types';

const formReducer = (state: TuitionROIFormState, action: TuitionROIFormActions) => {
  switch (action.type) {
    case TuitionROIFormAction.SET_FORM:
      return setForm(state, action.input, action.payload);

    case TuitionROIFormAction.VALIDATE_STEP:
      return formValidation(state, action.step);

    default:
      return state;
  }
};

export default function TuitionROIForm() {
  const [step, setStep] = useState<TuitionROIFormStep>(TuitionROIFormStep.UNIVERSITY);

  const [next, setNext] = useState(false);

  const [stepError, setStepError] = useState(false);

  const [form, dispatch] = useReducer(formReducer, {
    [TuitionROIFormInput.UNIVERSITY]: {
      step: TuitionROIFormStep.UNIVERSITY,
      value: '',
      errors: [],
    },
    [TuitionROIFormInput.MAJOR]: {
      step: TuitionROIFormStep.UNIVERSITY,
      value: '',
      errors: [],
    },
    [TuitionROIFormInput.INCOME]: {
      step: TuitionROIFormStep.BUDGET,
      value: 30000,
      errors: [],
    },
    [TuitionROIFormInput.IN_STATE]: {
      step: TuitionROIFormStep.BUDGET,
      value: true,
      errors: [],
    },
    [TuitionROIFormInput.BUDGET]: {
      step: TuitionROIFormStep.BUDGET,
      value: 15000,
      errors: [],
    },
    [TuitionROIFormInput.GPA]: {
      step: TuitionROIFormStep.SCORES,
      value: '',
      errors: [],
    },
    [TuitionROIFormInput.TEST_SCORES]: {
      step: TuitionROIFormStep.SCORES,
      value: '',
      errors: [],
    },
  } as TuitionROIFormState);

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

  const steps = EnumKeysToArray(TuitionROIFormStep);

  const stepContent = TuitionROIFormQuestion({
    step, setStep, form, dispatch,
  });

  const optionalSteps = [TuitionROIFormStep.SCORES];

  const validateStep = (currentStep: TuitionROIFormStep) => {
    dispatch({ type: TuitionROIFormAction.VALIDATE_STEP, step: currentStep });
    setNext(true);
  };

  return (
    <FormControl
      sx={{ padding: '2rem 0', display: 'flex', height: '100%' }}
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
