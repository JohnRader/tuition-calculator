import { FormControl } from '@mui/material';
import { useState } from 'react';
import mui from '@/styles/mui.module.css';

import FormActions from '@/components/OnboardingForm/FormActions';
import UserInfo from '@/components/OnboardingForm/UserInfo';
import Location from '@/components/OnboardingForm/Location';
import Scores from '@/components/OnboardingForm/Scores';

import type { OnboardingFormModel } from '@/types';

export enum OnboardingStep {
  USER_INFO,
  LOCATION,
  SCORES,
}

export default function OnboardingForm() {
  const [form, setForm] = useState<OnboardingFormModel>({
    userInfo: {
      firstName: '',
      lastName: '',
      phone: 0,
      email: '',
    },
    location: {
      state: '',
      university: '',
      budget: 0,
    },
    scores: {
      major: '',
    },
  });

  const [step, setStep] = useState<OnboardingStep>(OnboardingStep.USER_INFO);

  const currentStep = () => {
    switch (step) {
      case OnboardingStep.USER_INFO:
        return <UserInfo form={form} setForm={setForm} />;

      case OnboardingStep.LOCATION:
        return <Location form={form} setForm={setForm} />;

      case OnboardingStep.SCORES:
        return <Scores form={form} setForm={setForm} />;

      default:
        return <UserInfo form={form} setForm={setForm} />;
    }
  };

  // TODO: Add form validation and submission
  const submit = () => {
    console.log(form);
  };

  return (
    <FormControl className={mui['form-control']}>
      { currentStep() }
      <FormActions step={step} setStep={setStep} submitForm={submit} />
    </FormControl>
  );
}
