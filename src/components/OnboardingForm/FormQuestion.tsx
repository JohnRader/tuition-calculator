import {
  TextField, Slider, Typography, Box, Card, Grow,
} from '@mui/material';
import type { SetStateAction } from 'react';
import { OnboardingFormState, OnboardingFormStep } from '@/types';
import QuestionHeader from './QuestionHeader';
import mui from '@/styles/mui.module.css';
import { formatCurrency, isMobile } from '@/utils';

function classes(step: OnboardingFormStep) {
  const inputClasses: Record<OnboardingFormStep, string> = {
    [OnboardingFormStep.STATE]: `${mui['text-field--sm']}`,
    [OnboardingFormStep.UNIVERSITY]: `${mui['text-field--md']}`,
    [OnboardingFormStep.BUDGET]: `${mui['text-field--sm']}`,
    [OnboardingFormStep.MAJOR]: `${mui['text-field--md']}`,
    [OnboardingFormStep.PLACEMENT]: `${mui['text-field--sm']}`,
  };

  return inputClasses[step];
}

interface OnboardingFormQuestionProps {
  step: OnboardingFormStep;
  form: OnboardingFormState;
  setForm: (form: SetStateAction<OnboardingFormState>) => void;
}

export default function OnboardingFormQuestion(props: OnboardingFormQuestionProps) {
  const { step, form, setForm } = props;

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setForm({ ...form, budget: newValue });
    }
  };

  const textFieldSize = isMobile() ? 'small' : 'medium';

  switch (step) {
    case OnboardingFormStep.STATE:
      return (
        <Grow in mountOnEnter unmountOnExit>
          <Card
            raised
            sx={{
              height: '400px',
              maxWidth: '600px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              padding: '2rem',
            }}
          >
            <QuestionHeader questionId={OnboardingFormStep.STATE} />
            <TextField
              id="state"
              className={classes(OnboardingFormStep.STATE)}
              fullWidth
              label="State"
              variant="outlined"
              size={textFieldSize}
              value={form.state}
              onChange={(e) => setForm(
                { ...form, state: e.target.value },
              )}
            />
          </Card>
        </Grow>
      );

    case OnboardingFormStep.UNIVERSITY:
      return (
        <Grow in mountOnEnter unmountOnExit>
          <Card
            raised
            sx={{
              height: '400px',
              maxWidth: '600px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              padding: '2rem',
            }}
          >
            <QuestionHeader questionId={OnboardingFormStep.UNIVERSITY} />
            <TextField
              id="university"
              className={classes(OnboardingFormStep.UNIVERSITY)}
              fullWidth
              label="University"
              variant="outlined"
              size={textFieldSize}
              value={form.university}
              onChange={(e) => setForm(
                { ...form, university: e.target.value },
              )}
            />
          </Card>
        </Grow>
      );

    case OnboardingFormStep.BUDGET:
      return (
        <Grow in mountOnEnter unmountOnExit>
          <Card
            raised
            sx={{
              height: '400px',
              maxWidth: '600px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              padding: '2rem',
            }}
          >
            <QuestionHeader questionId={OnboardingFormStep.BUDGET} />
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: 'calc(100% - 4rem)',
              padding: {
                xs: '1rem',
                md: '0',
              },
            }}
            >
              <Slider
                value={typeof form.budget === 'number' ? form.budget : 10000}
                onChange={handleSliderChange}
                aria-labelledby="budget"
                step={1000}
                max={100000}
                color="secondary"
              />
              <Typography
                id="budget"
                variant="h2"
              >
                {formatCurrency(form.budget)}
              </Typography>
            </Box>
          </Card>
        </Grow>
      );

    case OnboardingFormStep.MAJOR:
      return (
        <Grow in mountOnEnter unmountOnExit>
          <Card
            raised
            sx={{
              height: '400px',
              maxWidth: '600px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              padding: '2rem',
            }}
          >
            <QuestionHeader questionId={OnboardingFormStep.MAJOR} />
            <TextField
              id="major"
              className={classes(OnboardingFormStep.MAJOR)}
              fullWidth
              label="Major"
              variant="outlined"
              size={textFieldSize}
              value={form.major}
              onChange={(e) => setForm(
                { ...form, major: e.target.value },
              )}
            />
          </Card>
        </Grow>
      );

    case OnboardingFormStep.PLACEMENT:
      return (
        <Grow in mountOnEnter unmountOnExit>
          <Card
            raised
            sx={{
              height: '400px',
              maxWidth: '600px',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              padding: '2rem',
            }}
          >
            <QuestionHeader questionId={OnboardingFormStep.PLACEMENT} />
            <TextField
              id="gpa"
              className={classes(OnboardingFormStep.PLACEMENT)}
              fullWidth
              label="GPA"
              variant="outlined"
              size={textFieldSize}
              value={form.gpa}
              onChange={(e) => setForm(
                { ...form, gpa: Number(e.target.value) },
              )}
            />
            <TextField
              id="act_sat"
              className={classes(OnboardingFormStep.PLACEMENT)}
              fullWidth
              label="ACT/SAT Score"
              variant="outlined"
              size={textFieldSize}
              value={form.test_scores}
              onChange={(e) => setForm(
                { ...form, test_scores: Number(e.target.value) },
              )}
            />
          </Card>
        </Grow>
      );

    default:
      return null;
  }
}
