import { useState } from 'react';
import { FormControl } from '@mui/material';

import { OnboardingFormState, OnboardingFormStep } from '@/types';
import { EnumKeysToArray } from '@/utils';
import HorizontalFormStepper from '@/components/HorizontalFormStepper';
import OnboardingFormQuestion from './FormQuestion';

export default function OnboardingForm() {
  const [form, setForm] = useState<OnboardingFormState>({
    state: '',
    city: '',
    university: '',
    budget: 10000,
    gpa: undefined,
    test_scores: undefined,
    major: '',
  });

  const [step, setStep] = useState<OnboardingFormStep>(OnboardingFormStep.LOCATION);

  const steps = EnumKeysToArray(OnboardingFormStep);

  const content = OnboardingFormQuestion({ step, form, setForm });

  const optionalSteps = [OnboardingFormStep.SCORES];

  return (
    <FormControl sx={{ padding: '2rem 0', display: 'flex' }}>
      <HorizontalFormStepper
        currentStepContent={content}
        currentStep={step}
        setCurrentStep={setStep}
        stepNames={steps}
        optionalSteps={optionalSteps}
      />
    </FormControl>
  );
}
