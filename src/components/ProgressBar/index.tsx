import {
  Stepper, Typography, Step, StepLabel,
} from '@mui/material';
import { useState } from 'react';
import type { ReactNode } from 'react';

interface ProgressBarProps {
  steps: number[];
  currentStep: number;
  optionalSteps: number[];
}

export default function ProgressBar(props: ProgressBarProps) {
  const { steps, currentStep, optionalSteps } = props;

  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (formStep: number) => optionalSteps.includes(formStep);

  const isStepSkipped = (formStep: number) => skipped.has(formStep);

  return (
    <Stepper activeStep={currentStep} sx={{ paddingBottom: '2rem' }}>
      {steps.map((label, index) => {
        const stepProps: { completed?: boolean } = {};
        const labelProps: { optional?: ReactNode; } = {};

        if (isStepOptional(index)) {
          labelProps.optional = (
            <Typography variant="caption">Optional</Typography>
          );
        }

        if (isStepSkipped(index)) {
          stepProps.completed = false;
        }
        return (
          <Step key={label} {...stepProps}>
            <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        );
      })}
    </Stepper>
  );
}
