import {
  TextField, Slider, Typography, Box, Card, Slide, IconButton, Autocomplete,
} from '@mui/material';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { Edit } from '@mui/icons-material';

import QuestionHeader from './QuestionHeader';
import mui from '@/styles/mui.module.css';
import {
  formatCurrency, isMobile, toTitleCase, EnumKeysToArray,
} from '@/utils';
import {
  State,
  StateCodeMap,
  OnboardingFormState,
  OnboardingFormStep,
  OnboardingFormInput,
  OnboardingFormActions,
  OnboardingFormAction,

} from '@/types';

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
  dispatch: Dispatch<OnboardingFormActions>;
  textFieldSize: 'small' | 'medium';
}

interface BudgetStepProps extends Partial<StepProps> {
  handleSliderChange: (event: Event, newValue: number | number[]) => void;
}

function LocationStep({
  form, dispatch, textFieldSize,
}: StepProps) {
  const stateOptions = Object.entries(StateCodeMap)
    .map(([value, label]) => ({ value, label } as State));

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
            autoFocus
            fullWidth
            label="City"
            variant="outlined"
            size={textFieldSize}
            value={form.city.value}
            onChange={(e) => dispatch({
              type: OnboardingFormAction.SET_FORM,
              input: OnboardingFormInput.CITY,
              payload: e.target.value,
            })}
            error={form.city.errors.length > 0}
            helperText={form.city.errors[0] ?? ' '}
          />
          <Autocomplete
            id={OnboardingFormInput.STATE}
            className={classes(OnboardingFormInput.STATE)}
            fullWidth
            size={textFieldSize}
            options={stateOptions}
            autoHighlight
            getOptionLabel={(option) => (option as State).label}
            value={form.state.value as State}
            freeSolo
            onChange={(e, newValue) => dispatch({
              type: OnboardingFormAction.SET_FORM,
              input: OnboardingFormInput.STATE,
              payload: newValue as State,
            })}
            renderOption={(props, option) => (
              <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                {option.label}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                error={form.state.errors.length > 0}
                helperText={form.state.errors[0] ?? ' '}
                label="State"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
        </Box>
      </Card>
    </Slide>
  );
}

function UniversityStep({
  form, dispatch, textFieldSize,
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
            autoFocus
            fullWidth
            label="University"
            variant="outlined"
            size={textFieldSize}
            value={form.university.value}
            onChange={(e) => dispatch({
              type: OnboardingFormAction.SET_FORM,
              input: OnboardingFormInput.UNIVERSITY,
              payload: e.target.value,
            })}
            error={form.university.errors.length > 0}
            helperText={form.university.errors[0] ?? ' '}
          />
          <TextField
            id={OnboardingFormInput.MAJOR}
            className={classes(OnboardingFormInput.MAJOR)}
            fullWidth
            label="Major"
            variant="outlined"
            size={textFieldSize}
            value={form.major.value}
            onChange={(e) => dispatch({
              type: OnboardingFormAction.SET_FORM,
              input: OnboardingFormInput.MAJOR,
              payload: e.target.value,
            })}
            error={form.major.errors.length > 0}
            helperText={form.major.errors[0] ?? ' '}
          />
        </Box>
      </Card>
    </Slide>
  );
}

function BudgetStep({
  form, handleSliderChange,
}: BudgetStepProps) {
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
            value={typeof form?.budget.value === 'number' ? form?.budget.value : 10000}
            onChange={handleSliderChange}
            aria-labelledby="budget"
            step={1000}
            max={100000}
          />
          <Typography
            id="budget"
            variant="h2"
          >
            {formatCurrency(Number(form?.budget.value))}
            <Typography variant="caption">/yr</Typography>
          </Typography>
        </Box>
      </Card>
    </Slide>
  );
}

function ScoresStep({
  form, dispatch, textFieldSize,
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
            autoFocus
            fullWidth
            label="GPA"
            variant="outlined"
            size={textFieldSize}
            value={form.gpa?.value}
            onChange={(e) => dispatch({
              type: OnboardingFormAction.SET_FORM,
              input: OnboardingFormInput.GPA,
              payload: e.target.value,
            })}
            error={form.gpa.errors.length > 0}
            helperText={form.gpa.errors[0] ?? ' '}
          />
          <TextField
            id={OnboardingFormInput.TEST_SCORES}
            className={classes(OnboardingFormInput.TEST_SCORES)}
            fullWidth
            label="ACT/SAT Score"
            variant="outlined"
            size={textFieldSize}
            value={form.test_scores?.value}
            onChange={(e) => dispatch({
              type: OnboardingFormAction.SET_FORM,
              input: OnboardingFormInput.TEST_SCORES,
              payload: e.target.value,
            })}
            error={form.test_scores.errors.length > 0}
            helperText={form.test_scores.errors[0] ?? ' '}
          />
        </Box>
      </Card>
    </Slide>
  );
}

function ReviewStep({
  form, setStep,
}: {
  form: OnboardingFormState;
  setStep: (step: SetStateAction<OnboardingFormStep>) => void;
}) {
  const stepFormValues = (stepName: string) => {
    const stepMap: Record<string, Record<string, string | number | State>> = {
      LOCATION: { city: String(form.city.value), state: form.state.value as State },
      UNIVERSITY: { university: String(form.university.value), major: String(form.major.value) },
      BUDGET: { budget: Number(form.budget.value) },
      SCORES: { gpa: Number(form.gpa.value), test_scores: Number(form.test_scores.value) },
    };

    return stepMap[stepName];
  };

  const goToStep = (stepName: string) => {
    const stepMap: Record<string, OnboardingFormStep> = {
      LOCATION: OnboardingFormStep.LOCATION,
      UNIVERSITY: OnboardingFormStep.UNIVERSITY,
      BUDGET: OnboardingFormStep.BUDGET,
      SCORES: OnboardingFormStep.SCORES,
    };

    return setStep(stepMap[stepName]);
  };

  const stepNames = EnumKeysToArray(OnboardingFormStep);

  const stepValue = (stepKey: string, value: string | number | State) => {
    if (typeof value === 'number') {
      return stepKey === 'budget' ? formatCurrency(value) : value;
    }

    if (typeof value === 'string') {
      return value;
    }

    return value.value;
  };

  return (
    <Box display="flex" flexDirection="column" gap={4} flexGrow="1" alignItems="center" padding="0 1rem">
      <QuestionHeader questionId={OnboardingFormStep.REVIEW} />
      {stepNames.map((key) => (
        <Box key={key} sx={{ width: { xs: '100%', md: '600px' } }}>
          {
            key !== stepNames[stepNames.length - 1]
            && (
            <Card variant="outlined" sx={{ padding: '1rem 2rem' }}>
              <Box key={key} display="flex" flexGrow="1" flexDirection="column" gap={2}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h4" color="secondary">
                    {toTitleCase(key)}
                  </Typography>
                  <IconButton sx={{ ml: 2 }} onClick={() => goToStep(key)}><Edit color="primary" /></IconButton>
                </Box>

                { Object.entries(stepFormValues(key)).map(([formStateKey, formStateValue]) => (
                  <Box key={`${formStateKey}`} display="flex" gap={1}>
                    <Typography variant="body1">
                      { toTitleCase(formStateKey) }
                      :
                    </Typography>
                    <Typography variant="body2">
                      { stepValue(formStateKey, formStateValue) }
                    </Typography>
                  </Box>

                ))}
              </Box>
            </Card>
            )
          }
        </Box>
      ))}
    </Box>
  );
}

interface OnboardingFormQuestionProps {
  step: OnboardingFormStep;
  setStep: (step: SetStateAction<OnboardingFormStep>) => void;
  form: OnboardingFormState;
  dispatch: Dispatch<OnboardingFormActions>;
}

export default function OnboardingFormQuestion(props: OnboardingFormQuestionProps) {
  const {
    step, setStep, form, dispatch,
  } = props;

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    dispatch({
      type: OnboardingFormAction.SET_FORM,
      input: OnboardingFormInput.BUDGET,
      payload: Number(newValue),
    });
  };

  const textFieldSize = isMobile() ? 'small' : 'medium';

  const formQuestions: Record<OnboardingFormStep, ReactNode> = {
    [OnboardingFormStep.LOCATION]: (
      <LocationStep
        form={form}
        dispatch={dispatch}
        textFieldSize={textFieldSize}
      />
    ),
    [OnboardingFormStep.UNIVERSITY]: (
      <UniversityStep
        form={form}
        dispatch={dispatch}
        textFieldSize={textFieldSize}
      />
    ),
    [OnboardingFormStep.BUDGET]: (
      <BudgetStep form={form} handleSliderChange={handleSliderChange} />
    ),
    [OnboardingFormStep.SCORES]: (
      <ScoresStep
        form={form}
        dispatch={dispatch}
        textFieldSize={textFieldSize}
      />
    ),
    [OnboardingFormStep.REVIEW]: (
      <ReviewStep form={form} setStep={setStep} />
    ),
  };

  return formQuestions[step];
}
