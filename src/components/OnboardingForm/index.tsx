import { FormControl } from '@mui/material';
import { useState } from 'react';
import styles from '@/styles/index.module.css';

import FormActions from '@/components/OnboardingForm/FormActions';
import Location from '@/components/OnboardingForm/Location';
import Scores from '@/components/OnboardingForm/Scores';

import type { OnboardingFormModel } from '@/types';

export enum OnboardingStep {
  LOCATION,
  SCORES,
}

interface FormStepProps {
  step: OnboardingStep;
  form: OnboardingFormModel;
  setForm: (form: OnboardingFormModel) => void;
}

function FormStep(props: FormStepProps) {
  const { step, form, setForm } = props;

  switch (step) {
    case OnboardingStep.LOCATION:
      return <Location form={form} setForm={setForm} />;

    case OnboardingStep.SCORES:
      return <Scores form={form} setForm={setForm} />;

    default:
      return <Location form={form} setForm={setForm} />;
  }
}

export default function OnboardingForm() {
  const [form, setForm] = useState<OnboardingFormModel>({
    state: '',
    university: '',
    budget: 0,
    gpa: 0,
    act_sat: 0,
    major: '',
  });

  const [step, setStep] = useState<OnboardingStep>(OnboardingStep.LOCATION);

  // TODO: Add form validation and submission
  const submit = () => {
    console.log(form);
  };

  return (
    <div className={styles['form-wrapper']}>
      <FormControl className={styles['onboarding-form']}>
        <FormStep step={step} form={form} setForm={setForm} />
      </FormControl>
      <FormActions step={step} setStep={setStep} submitForm={submit} />
    </div>
  );
}
