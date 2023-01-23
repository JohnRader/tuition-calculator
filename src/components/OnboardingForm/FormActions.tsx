import { Box, Button, StepIcon } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from '@/styles/index.module.css';

import { FormAction } from '@/types';
import { OnboardingFormStep } from '@/components/OnboardingForm';

interface FormActionsProps {
  step: number;
  setStep: (step: number) => void;
  submitForm: () => void;

}

export default function FormActions(props: FormActionsProps) {
  const { step, setStep, submitForm } = props;

  const setFormStep = (currentStep: OnboardingFormStep, action: FormAction) => {
    switch (currentStep) {
      case OnboardingFormStep.LOCATION:
        return action === FormAction.BACK
          ? null : setStep(OnboardingFormStep.SCORES);

      case OnboardingFormStep.SCORES:
        return action === FormAction.BACK
          ? setStep(OnboardingFormStep.LOCATION) : submitForm();

      default:
        return 0;
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: {
        xs: '1rem',
      },
      flexDirection: {
        xs: 'column',
        sm: 'row',
      },
    }}
    >
      <Button
        className={styles['form-button']}
        variant="outlined"
        size="large"
        onClick={() => setFormStep(step, FormAction.BACK)}
        disabled={step === OnboardingFormStep.LOCATION}
      >
        Back
      </Button>
      <Button
        className={styles['form-button']}
        variant="contained"
        size="large"
        endIcon={step === OnboardingFormStep.SCORES ? <ArrowForwardIcon /> : <StepIcon icon="1/2" />}
        onClick={() => setFormStep(step, FormAction.CONTINUE)}
      >
        { step === OnboardingFormStep.SCORES ? 'Generate My Report' : 'Next' }
      </Button>
    </Box>
  );
}
