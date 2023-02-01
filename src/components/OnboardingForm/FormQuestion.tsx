import {
  TextField, Slider, Typography, Box, Card, Slide,
} from '@mui/material';
import type { ReactNode, SetStateAction } from 'react';

import { OnboardingFormState, OnboardingFormStep } from '@/types';
import QuestionHeader from './QuestionHeader';
import { formatCurrency, isMobile } from '@/utils';
import mui from '@/styles/mui.module.css';

enum OnboardingFormInput {
  STATE = 'state',
  CITY = 'city',
  UNIVERSITY = 'university',
  MAJOR = 'major',
  BUDGET = 'budget',
  GPA = 'gpa',
  TEST_SCORES = 'test_scores',
}

function classes(input: OnboardingFormInput) {
  const inputClasses: Record<OnboardingFormInput, string> = {
    [OnboardingFormInput.STATE]: `${mui['text-field--sm']}`,
    [OnboardingFormInput.CITY]: `${mui['text-field--sm']}`,
    [OnboardingFormInput.UNIVERSITY]: `${mui['text-field--md']}`,
    [OnboardingFormInput.MAJOR]: `${mui['text-field--md']}`,
    [OnboardingFormInput.BUDGET]: `${mui['text-field--sm']}`,
    [OnboardingFormInput.GPA]: `${mui['text-field--sm']}`,
    [OnboardingFormInput.TEST_SCORES]: `${mui['text-field--sm']}`,
  };

  return inputClasses[input];
}

interface StepProps {
  form: OnboardingFormState;
  setForm: (form: SetStateAction<OnboardingFormState>) => void;
  textFieldSize: 'small' | 'medium';
  handleSliderChange: (event: Event, newValue: number | number[]) => void;
}

function LocationStep({
  form, setForm, textFieldSize, handleSliderChange,
}: StepProps) {
  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Card
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
        <QuestionHeader questionId={OnboardingFormStep.LOCATION} />
        <Box display="flex" flexDirection="column" gap={4} width="100%" alignItems="center">
          <TextField
            id={OnboardingFormInput.CITY}
            className={classes(OnboardingFormInput.CITY)}
            fullWidth
            label="City"
            variant="outlined"
            size={textFieldSize}
            value={form.city}
            onChange={(e) => setForm(
              { ...form, city: e.target.value },
            )}
          />
          <TextField
            id={OnboardingFormInput.STATE}
            className={classes(OnboardingFormInput.STATE)}
            fullWidth
            label="State"
            variant="outlined"
            size={textFieldSize}
            value={form.state}
            onChange={(e) => setForm(
              { ...form, state: e.target.value },
            )}
          />
        </Box>
      </Card>
    </Slide>
  );
}

function UniversityStep({
  form, setForm, textFieldSize, handleSliderChange,
}: StepProps) {
  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Card
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
        <Box display="flex" flexDirection="column" gap={4} width="100%" alignItems="center">
          <TextField
            id={OnboardingFormInput.UNIVERSITY}
            className={classes(OnboardingFormInput.UNIVERSITY)}
            fullWidth
            label="University"
            variant="outlined"
            size={textFieldSize}
            value={form.university}
            onChange={(e) => setForm(
              { ...form, university: e.target.value },
            )}
          />
          <TextField
            id={OnboardingFormInput.MAJOR}
            className={classes(OnboardingFormInput.MAJOR)}
            fullWidth
            label="Major"
            variant="outlined"
            size={textFieldSize}
            value={form.major}
            onChange={(e) => setForm(
              { ...form, major: e.target.value },
            )}
          />
        </Box>
      </Card>
    </Slide>
  );
}

function BudgetStep({
  form, setForm, textFieldSize, handleSliderChange,
}: StepProps) {
  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Card
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
          />
          <Typography
            id="budget"
            variant="h2"
          >
            {formatCurrency(form.budget)}
            <Typography variant="caption">/yr</Typography>
          </Typography>
        </Box>
      </Card>
    </Slide>
  );
}

function ScoresStep({
  form, setForm, textFieldSize, handleSliderChange,
}: StepProps) {
  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Card
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
        <QuestionHeader questionId={OnboardingFormStep.SCORES} />
        <Box display="flex" flexDirection="column" gap={4} width="100%" alignItems="center">
          <TextField
            id={OnboardingFormInput.GPA}
            className={classes(OnboardingFormInput.GPA)}
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
            id={OnboardingFormInput.TEST_SCORES}
            className={classes(OnboardingFormInput.TEST_SCORES)}
            fullWidth
            label="ACT/SAT Score"
            variant="outlined"
            size={textFieldSize}
            value={form.test_scores}
            onChange={(e) => setForm(
              { ...form, test_scores: Number(e.target.value) },
            )}
          />
        </Box>
      </Card>
    </Slide>
  );
}

function ReviewStep({ form }: { form: OnboardingFormState }) {
  return (
    <Box>
      <QuestionHeader questionId={OnboardingFormStep.REVIEW} />
      <ul>
        {Object.entries(form).map(([key, value]) => (
          <li key={key}>
            {key}
            :
            {' '}
            {value}
          </li>
        ))}
      </ul>
    </Box>
  );
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

  const formQuestions: Record<OnboardingFormStep, ReactNode> = {
    [OnboardingFormStep.LOCATION]: (
      <LocationStep
        form={form}
        setForm={setForm}
        textFieldSize={textFieldSize}
        handleSliderChange={handleSliderChange}
      />
    ),
    [OnboardingFormStep.UNIVERSITY]: (
      <UniversityStep
        form={form}
        setForm={setForm}
        textFieldSize={textFieldSize}
        handleSliderChange={handleSliderChange}
      />
    ),
    [OnboardingFormStep.BUDGET]: (
      <BudgetStep
        form={form}
        setForm={setForm}
        textFieldSize={textFieldSize}
        handleSliderChange={handleSliderChange}
      />
    ),
    [OnboardingFormStep.SCORES]: (
      <ScoresStep
        form={form}
        setForm={setForm}
        textFieldSize={textFieldSize}
        handleSliderChange={handleSliderChange}
      />
    ),
    [OnboardingFormStep.REVIEW]: <ReviewStep form={form} />,
  };

  return formQuestions[step];
}
