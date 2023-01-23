import { useState } from 'react';
import { useRouter } from 'next/router';
import { FormControl, Grid, Box } from '@mui/material';

import FormActions from '@/components/OnboardingForm/FormActions';
import Location from '@/components/OnboardingForm/Location';
import Scores from '@/components/OnboardingForm/Scores';
import ProgressBar from '@/components/ProgressBar';
import { EnumKeysToArray } from '@/utils';
import mui from '@/styles/mui.module.css';

import type { OnboardingFormModel } from '@/types';

export enum OnboardingFormStep {
  LOCATION,
  SCORES,
}

export enum OnboardingFormInputs {
  STATE = 'state',
  UNIVERSITY = 'university',
  BUDGET = 'budget',
  GPA = 'gpa',
  ACT_SAT = 'act_sat',
  MAJOR = 'major',
}

export function classes(input: OnboardingFormInputs) {
  const inputClasses: Record<OnboardingFormInputs, string> = {
    [OnboardingFormInputs.STATE]: `${mui['text-field--sm']}`,
    [OnboardingFormInputs.UNIVERSITY]: `${mui['text-field--lg']}`,
    [OnboardingFormInputs.BUDGET]: `${mui['text-field--sm']}`,
    [OnboardingFormInputs.GPA]: `${mui['text-field--sm']}`,
    [OnboardingFormInputs.ACT_SAT]: `${mui['text-field--sm']}`,
    [OnboardingFormInputs.MAJOR]: `${mui['text-field--md']}`,
  };

  return inputClasses[input];
}

interface FormStepProps {
  step: OnboardingFormStep;
  form: OnboardingFormModel;
  setForm: (form: OnboardingFormModel) => void;
}

function FormStep(props: FormStepProps) {
  const { step, form, setForm } = props;

  switch (step) {
    case OnboardingFormStep.LOCATION:
      return <Location form={form} setForm={setForm} />;

    case OnboardingFormStep.SCORES:
      return <Scores form={form} setForm={setForm} />;

    default:
      return <Location form={form} setForm={setForm} />;
  }
}

export default function OnboardingForm() {
  const router = useRouter();

  const steps = EnumKeysToArray(OnboardingFormStep);
  const optionalSteps = [OnboardingFormStep.SCORES];

  const [form, setForm] = useState<OnboardingFormModel>({
    state: '',
    university: '',
    budget: 0,
    gpa: 0,
    act_sat: 0,
    major: '',
  });

  const [step, setStep] = useState<OnboardingFormStep>(OnboardingFormStep.LOCATION);

  // TODO: Add form validation and submission
  const submit = () => {
    console.log(form);
    router.push('/report');
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      padding: '2rem 0',
      gap: '3rem',
    }}
    >
      <FormControl>
        <ProgressBar steps={steps} currentStep={step} optionalSteps={optionalSteps} />
        <Grid container spacing={6}>
          <FormStep step={step} form={form} setForm={setForm} />
        </Grid>
      </FormControl>

      <FormActions step={step} setStep={setStep} submitForm={submit} />
    </Box>
  );
}
