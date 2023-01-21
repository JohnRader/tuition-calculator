import { Button, StepIcon } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styles from '@/styles/index.module.css';

import { FormAction } from '@/types';
import { OnboardingStep } from '@/components/OnboardingForm';

interface FormActionsProps {
  step: number;
  setStep: (step: number) => void;
  submitForm: () => void;

}

export default function FormActions(props: FormActionsProps) {
  const { step, setStep, submitForm } = props;

  const setFormStep = (currentStep: OnboardingStep, action: FormAction) => {
    switch (currentStep) {
      case OnboardingStep.LOCATION:
        return action === FormAction.BACK
          ? null : setStep(OnboardingStep.SCORES);

      case OnboardingStep.SCORES:
        return action === FormAction.BACK
          ? setStep(OnboardingStep.LOCATION) : submitForm();

      default:
        return 0;
    }
  };

  return (
    <div className={styles['form-actions']}>
      <Button
        variant="outlined"
        size="large"
        onClick={() => setFormStep(step, FormAction.BACK)}
        disabled={step === OnboardingStep.LOCATION}
      >
        Back
      </Button>
      <Button
        variant="contained"
        size="large"
        endIcon={step === OnboardingStep.SCORES ? <ArrowForwardIcon /> : <StepIcon icon="1/2" />}
        onClick={() => setFormStep(step, FormAction.CONTINUE)}
      >
        { step === OnboardingStep.SCORES ? 'Generate My Report' : 'Continue' }
      </Button>
    </div>
  );
}
