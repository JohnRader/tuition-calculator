import { useEffect, useState } from 'react';
import { FormControl } from '@mui/material';

import { OnboardingFormState, OnboardingFormStep } from '@/types';
import { EnumKeysToArray } from '@/utils';
import HorizontalFormStepper from '@/components/HorizontalFormStepper';
import OnboardingFormQuestion from './FormQuestion';

export default function OnboardingForm() {
  const [form, setForm] = useState<OnboardingFormState>({
    state: '',
    university: '',
    budget: 10000,
    gpa: null,
    test_scores: null,
    major: '',
  });

  const [step, setStep] = useState<OnboardingFormStep>(OnboardingFormStep.STATE);

  const steps = EnumKeysToArray(OnboardingFormStep);

  const content = OnboardingFormQuestion({ step, form, setForm });

  useEffect(() => {
    const page = document.getElementById('page-container');

    page?.scrollTo({ top: 0 });
  }, [step]);

  return (
    <FormControl
      sx={{
        padding: '2rem 0',
        display: 'flex',
      }}
    >
      <HorizontalFormStepper
        currentStepContent={content}
        currentStep={step}
        setCurrentStep={setStep}
        stepNames={steps}
      />
    </FormControl>
  );
}
