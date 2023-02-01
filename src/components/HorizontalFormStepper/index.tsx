import {
  Typography, Button, StepLabel, Step, Stepper, Box, MobileStepper,
} from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { useState, ReactNode } from 'react';
import type { SetStateAction } from 'react';

import { useRouter } from 'next/router';
import { toTitleCase } from '@/utils';
import { FormAction } from '@/types';
import { theme } from '@/styles/theme';

interface FormActionsProps {
  formActions: Record<FormAction, () => void>;
  stepNames: string[];
  currentStep: number;
  isStepOptional: (step: number) => boolean;
}

function FormActions(props: FormActionsProps) {
  const {
    formActions, stepNames, currentStep, isStepOptional,
  } = props;

  const isSummaryPage = currentStep === stepNames.length;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
      { isSummaryPage ? (
        <>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button
            color="primary"
            variant="outlined"
            size="large"
            sx={{ mr: 4, minWidth: '128px' }}
            onClick={formActions.RESET}
          >
            Reset
          </Button>
          <Button
            sx={{ minWidth: '128px' }}
            color="secondary"
            variant="contained"
            size="large"
            onClick={formActions.SUBMIT}
            endIcon={<ArrowForwardIcon />}
          >
            Submit
          </Button>
        </>
      ) : (
        <>
          {/* Back, Skip, and Next actions */}
          <Button
            color="primary"
            variant="outlined"
            disabled={currentStep === 0}
            onClick={formActions.BACK}
            sx={{ mr: 4, minWidth: '128px' }}
            size="large"
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {isStepOptional(currentStep) && (
          <Button
            color="primary"
            variant="text"
            onClick={formActions.SKIP}
            sx={{ mr: 2, minWidth: '128px' }}
            size="large"
          >
            Skip
          </Button>
          )}
          <Button
            sx={{ minWidth: '128px' }}
            color="secondary"
            variant="contained"
            onClick={formActions.NEXT}
            size="large"
            endIcon={<ArrowForwardIcon />}
          >
            {currentStep === stepNames.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </>
      )}
    </Box>
  );
}

interface FormStepContentProps {
  formActions: Record<FormAction, () => void>;
  stepNames: string[];
  currentStep: number;
  isStepOptional: (step: number) => boolean;
  currentStepContent: ReactNode;
}

function FormStepContent(props: FormStepContentProps) {
  const {
    formActions, currentStepContent, stepNames, currentStep, isStepOptional,
  } = props;

  return (
    <>
      <Box sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: {
          xs: '1rem',
          sm: '0',
        },
      }}
      >
        {currentStepContent}
      </Box>

      <Box sx={{
        display: {
          xs: 'none',
          sm: 'flex',
        },
        flexDirection: 'column',
        gap: '3rem',
      }}
      >
        <FormActions
          stepNames={stepNames}
          currentStep={currentStep}
          formActions={formActions}
          isStepOptional={isStepOptional}
        />
      </Box>
    </>
  );
}

interface FormStepperProps {
  formActions: Record<FormAction, () => void>;
  currentStep: number;
  stepNames: string[];
  isStepOptional: (step: number) => boolean;
  isStepSkipped: (step: number) => boolean;
}

function FormStepper(props: FormStepperProps) {
  const {
    formActions, currentStep, stepNames, isStepOptional, isStepSkipped,
  } = props;

  const isLastStep = () => currentStep === stepNames.length - 2;
  const isSummaryStep = () => currentStep === stepNames.length - 1;

  const buttonPrimaryActionText = () => {
    if (isSummaryStep()) return 'Submit';
    if (isLastStep()) return 'Finish';
    return 'Next';
  };

  return (
    <>
      <MobileStepper
        sx={{
          display: { xs: 'flex', sm: 'none' },
          padding: theme.spacing(2),
        }}
        variant="dots"
        backButton={(
          <Button
            sx={{ minWidth: '96px' }}
            color="primary"
            variant="contained"
            disabled={currentStep === 0}
            onClick={isSummaryStep() ? formActions.RESET : formActions.BACK}
            size="small"
          >
            { isSummaryStep() ? 'Reset' : 'Back'}
          </Button>
        )}
        nextButton={(
          <Button
            sx={{ minWidth: '96px' }}
            color="secondary"
            variant="contained"
            onClick={isSummaryStep() ? formActions.SUBMIT : formActions.NEXT}
            size="small"
            endIcon={<ArrowForwardIcon />}
          >
            {buttonPrimaryActionText()}
          </Button>
        )}
        activeStep={currentStep}
        steps={stepNames.length}
      />

      <Stepper activeStep={currentStep} alternativeLabel>
        {stepNames.map((label, index) => {
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
              <StepLabel {...labelProps}>{toTitleCase(label)}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
}

interface HorizontalFormStepperProps {
  currentStepContent: ReactNode;
  currentStep: number;
  setCurrentStep: (value: SetStateAction<number>) => void;
  stepNames: string[];
  optionalSteps: number[];
}

export default function HorizontalFormStepper(props: HorizontalFormStepperProps) {
  const {
    stepNames, currentStep, currentStepContent, setCurrentStep, optionalSteps,
  } = props;

  const [skipped, setSkipped] = useState(new Set<number>());

  const router = useRouter();

  const isStepOptional = (step: number) => optionalSteps.includes(step);
  const isStepSkipped = (step: number) => skipped.has(step);

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(currentStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(currentStep);
    }

    setCurrentStep((prevStep) => prevStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSkip = () => {
    setCurrentStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(currentStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  const handleSubmit = () => {
    router.push('/report');
  };

  type FormActions = typeof handleBack
    | typeof handleNext
    | typeof handleSkip
    | typeof handleReset
    | typeof handleSubmit;

  const formActions: Record<FormAction, FormActions> = {
    [FormAction.BACK]: handleBack,
    [FormAction.NEXT]: handleNext,
    [FormAction.SKIP]: handleSkip,
    [FormAction.RESET]: handleReset,
    [FormAction.SUBMIT]: handleSubmit,
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      flexGrow: 1,
      gap: theme.spacing(6),
    }}
    >
      <FormStepper
        stepNames={stepNames}
        currentStep={currentStep}
        formActions={formActions}
        isStepOptional={isStepOptional}
        isStepSkipped={isStepSkipped}
      />
      <FormStepContent
        stepNames={stepNames}
        currentStep={currentStep}
        formActions={formActions}
        isStepOptional={isStepOptional}
        currentStepContent={currentStepContent}
      />
    </Box>
  );
}
