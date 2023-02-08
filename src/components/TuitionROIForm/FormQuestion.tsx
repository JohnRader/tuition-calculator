import {
  TextField,
  Slider,
  Typography,
  Box,
  Card,
  Slide,
  IconButton,
  Grow,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { Edit } from '@mui/icons-material';

import QuestionHeader from './QuestionHeader';
import mui from '@/styles/mui.module.css';
import {
  formatCurrency, isMobile, toTitleCase, EnumKeysToArray,
} from '@/utils';
import {
  TuitionROIFormState,
  TuitionROIFormStep,
  TuitionROIFormInput,
  TuitionROIFormActions,
  TuitionROIFormAction,

} from '@/types';

function classes(input: Exclude<TuitionROIFormInput, TuitionROIFormInput.IN_STATE>) {
  const inputClasses: Record<Exclude<TuitionROIFormInput, TuitionROIFormInput.IN_STATE>, string> = {
    [TuitionROIFormInput.UNIVERSITY]: `${mui['text-field--md']}`,
    [TuitionROIFormInput.MAJOR]: `${mui['text-field--md']}`,
    [TuitionROIFormInput.INCOME]: `${mui['text-field--sm']}`,
    [TuitionROIFormInput.BUDGET]: `${mui['text-field--sm']}`,
    [TuitionROIFormInput.GPA]: `${mui['text-field--sm']}`,
    [TuitionROIFormInput.TEST_SCORES]: `${mui['text-field--sm']}`,
  };

  return inputClasses[input];
}

interface StepProps {
  form: TuitionROIFormState;
  dispatch: Dispatch<TuitionROIFormActions>;
  textFieldSize: 'small' | 'medium';
}

interface BudgetStepProps extends Partial<StepProps> {
  dispatch: Dispatch<TuitionROIFormActions>;
  handleIncomeSliderChange: (event: Event, newValue: number | number[]) => void;
  handleBudgetSliderChange: (event: Event, newValue: number | number[]) => void;
}

function UniversityStep({
  form, dispatch, textFieldSize,
}: StepProps) {
  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Card
        variant="outlined"
        sx={{
          minHeight: '400px',
          maxWidth: '600px',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: '2rem',
        }}
      >
        <QuestionHeader questionId={TuitionROIFormStep.UNIVERSITY} />
        <Box display="flex" flexDirection="column" gap={4} width="100%" alignItems="center">
          <TextField
            id={TuitionROIFormInput.UNIVERSITY}
            className={classes(TuitionROIFormInput.UNIVERSITY)}
            autoFocus
            fullWidth
            label="University"
            variant="outlined"
            size={textFieldSize}
            value={form.university.value}
            onChange={(e) => dispatch({
              type: TuitionROIFormAction.SET_FORM,
              input: TuitionROIFormInput.UNIVERSITY,
              payload: e.target.value,
            })}
            error={form.university.errors.length > 0}
            helperText={form.university.errors[0] ?? ' '}
          />
          <TextField
            id={TuitionROIFormInput.MAJOR}
            className={classes(TuitionROIFormInput.MAJOR)}
            fullWidth
            label="Major"
            variant="outlined"
            size={textFieldSize}
            value={form.major.value}
            onChange={(e) => dispatch({
              type: TuitionROIFormAction.SET_FORM,
              input: TuitionROIFormInput.MAJOR,
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
  form, handleIncomeSliderChange, handleBudgetSliderChange, dispatch,
}: BudgetStepProps) {
  return (
    <Slide direction="right" in mountOnEnter unmountOnExit>
      <Card
        variant="outlined"
        sx={{
          minHeight: '400px',
          maxWidth: '600px',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        <QuestionHeader questionId={TuitionROIFormStep.BUDGET} />
        <Box
          gap={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: {
              xs: '1rem',
            },
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" width="100%" gap={2}>
            <Slider
              value={typeof form?.income.value === 'number' ? form?.income.value : 10000}
              onChange={handleIncomeSliderChange}
              aria-labelledby="income"
              step={1000}
              max={300000}
            />
            <Typography
              id="income"
              variant="h5"
            >
              Income
              {' '}
              {formatCurrency(Number(form?.income.value))}
              <Typography variant="caption">
                /yr
              </Typography>
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" alignItems="center" width="100%" gap={2}>
            <Slider
              value={typeof form?.budget.value === 'number' ? form?.budget.value : 10000}
              onChange={handleBudgetSliderChange}
              aria-labelledby="budget"
              step={1000}
              max={100000}
            />
            <Typography
              id="budget"
              variant="h5"
            >
              Budget
              {' '}
              {formatCurrency(Number(form?.budget.value))}
              <Typography variant="caption">/yr</Typography>
            </Typography>
          </Box>

          <FormGroup sx={{ marginLeft: '1rem' }}>
            <FormControlLabel
              sx={{
                span: {
                  xs: { whiteSpace: 'normal' },
                  md: { whiteSpace: 'nowrap' },
                },
              }}
              control={(
                <Checkbox
                  defaultChecked
                  value={form?.in_state.value}
                  onChange={(e) => dispatch({
                    type: TuitionROIFormAction.SET_FORM,
                    input: TuitionROIFormInput.IN_STATE,
                    payload: e.target.checked,
                  })}
                />
              )}
              label="Do you currently reside in the state you will be attending school?"
            />
          </FormGroup>

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
        variant="outlined"
        sx={{
          minHeight: '400px',
          maxWidth: '600px',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          padding: '2rem',
        }}
      >
        <QuestionHeader questionId={TuitionROIFormStep.SCORES} />
        <Box display="flex" flexDirection="column" gap={4} width="100%" alignItems="center">
          <TextField
            id={TuitionROIFormInput.GPA}
            className={classes(TuitionROIFormInput.GPA)}
            autoFocus
            fullWidth
            label="GPA"
            variant="outlined"
            size={textFieldSize}
            value={form.gpa?.value}
            onChange={(e) => dispatch({
              type: TuitionROIFormAction.SET_FORM,
              input: TuitionROIFormInput.GPA,
              payload: e.target.value,
            })}
            error={form.gpa.errors.length > 0}
            helperText={form.gpa.errors[0] ?? ' '}
          />
          <TextField
            id={TuitionROIFormInput.TEST_SCORES}
            className={classes(TuitionROIFormInput.TEST_SCORES)}
            fullWidth
            label="ACT/SAT Score"
            variant="outlined"
            size={textFieldSize}
            value={form.test_scores?.value}
            onChange={(e) => dispatch({
              type: TuitionROIFormAction.SET_FORM,
              input: TuitionROIFormInput.TEST_SCORES,
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
  form: TuitionROIFormState;
  setStep: (step: SetStateAction<TuitionROIFormStep>) => void;
}) {
  const stepFormValues = (stepName: string) => {
    const stepMap: Record<string, Record<string, string | number | boolean>> = {
      UNIVERSITY: { university: String(form.university.value), major: String(form.major.value) },
      BUDGET: {
        income: Number(form.income.value),
        budget: Number(form.budget.value),
        in_state: form.in_state.value ? 'Yes' : 'No',
      },
      SCORES: { gpa: Number(form.gpa.value), test_scores: Number(form.test_scores.value) },
    };

    return stepMap[stepName];
  };

  const stepMap: Record<string, TuitionROIFormStep> = {
    UNIVERSITY: TuitionROIFormStep.UNIVERSITY,
    BUDGET: TuitionROIFormStep.BUDGET,
    SCORES: TuitionROIFormStep.SCORES,
  };

  const goToStep = (stepName: string) => setStep(stepMap[stepName]);

  const stepNames = EnumKeysToArray(TuitionROIFormStep);

  const stepValue = (stepKey: string, value: string | number | boolean) => {
    if (typeof value === 'number') {
      return stepKey === 'budget' || stepKey === 'income' ? formatCurrency(value) : value;
    }

    return value;
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      flexGrow="1"
      alignItems="center"
      paddingX="1rem"
      paddingBottom="2rem"
    >
      <QuestionHeader questionId={TuitionROIFormStep.REVIEW} />
      {stepNames.map((key) => (
        <Box key={key} sx={{ width: { xs: '100%', md: '600px' } }}>
          {
            key !== stepNames[stepNames.length - 1]
            && (
            <Grow in {...{ timeout: (stepMap[key] * 1000) }}>
              <Card variant="outlined" sx={{ padding: '1rem 2rem' }}>
                <Box key={key} display="flex" flexGrow="1" flexDirection="column" gap={2}>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h5" color="primary">
                      {toTitleCase(key)}
                    </Typography>
                    <IconButton sx={{ ml: 2 }} onClick={() => goToStep(key)}><Edit color="action" /></IconButton>
                  </Box>

                  { Object.entries(stepFormValues(key)).map(([formStateKey, formStateValue]) => (
                    <Box key={`${formStateKey}`} display="flex" gap={1} alignItems="center">
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
            </Grow>
            )
          }
        </Box>
      ))}
    </Box>
  );
}

interface TuitionROIFormQuestionProps {
  step: TuitionROIFormStep;
  setStep: (step: SetStateAction<TuitionROIFormStep>) => void;
  form: TuitionROIFormState;
  dispatch: Dispatch<TuitionROIFormActions>;
}

export default function TuitionROIFormQuestion(props: TuitionROIFormQuestionProps) {
  const {
    step, setStep, form, dispatch,
  } = props;

  const handleIncomeSliderChange = (event: Event, newValue: number | number[]) => {
    dispatch({
      type: TuitionROIFormAction.SET_FORM,
      input: TuitionROIFormInput.INCOME,
      payload: Number(newValue),
    });
  };

  const handleBudgetSliderChange = (event: Event, newValue: number | number[]) => {
    dispatch({
      type: TuitionROIFormAction.SET_FORM,
      input: TuitionROIFormInput.BUDGET,
      payload: Number(newValue),
    });
  };

  const textFieldSize = isMobile() ? 'small' : 'medium';

  const formQuestions: Record<TuitionROIFormStep, ReactNode> = {
    [TuitionROIFormStep.UNIVERSITY]: (
      <UniversityStep
        form={form}
        dispatch={dispatch}
        textFieldSize={textFieldSize}
      />
    ),
    [TuitionROIFormStep.BUDGET]: (
      <BudgetStep
        form={form}
        handleIncomeSliderChange={handleIncomeSliderChange}
        handleBudgetSliderChange={handleBudgetSliderChange}
        dispatch={dispatch}
        textFieldSize={textFieldSize}
      />
    ),
    [TuitionROIFormStep.SCORES]: (
      <ScoresStep
        form={form}
        dispatch={dispatch}
        textFieldSize={textFieldSize}
      />
    ),
    [TuitionROIFormStep.REVIEW]: (
      <ReviewStep form={form} setStep={setStep} />
    ),
  };

  return formQuestions[step];
}
