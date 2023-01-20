import { TextField, Typography } from '@mui/material';
import { OnboardingFormProps } from '@/types';

import mui from '@/styles/mui.module.css';
import styles from '@/styles/index.module.css';

enum ScoresStepInput {
  GPA = 'gpa',
  ACT_SAT = 'act_sat',
  MAJOR = 'major',
}

function Header(input: ScoresStepInput) {
  const headers = {
    [ScoresStepInput.GPA]: (
      <Typography variant="h4" className={mui.typography}>
        What is you
        {' '}
        <strong>GPA</strong>
        ?
      </Typography>),
    [ScoresStepInput.ACT_SAT]: (
      <Typography variant="h4" className={mui.typography}>
        What is you
        {' '}
        <strong>ACT/SAT</strong>
        {' '}
        score?
      </Typography>
    ),
    [ScoresStepInput.MAJOR]: (
      <Typography variant="h4" className={mui.typography}>
        What would you like to
        {' '}
        <strong>Major</strong>
        {' '}
        in?
      </Typography>
    ),
  };

  return headers[input];
}

function classes(input: ScoresStepInput) {
  const inputClasses: Record<ScoresStepInput, string> = {
    [ScoresStepInput.GPA]: `${mui['text-field']} ${mui['text-field--sm']}`,
    [ScoresStepInput.ACT_SAT]: `${mui['text-field']} ${mui['text-field--sm']}`,
    [ScoresStepInput.MAJOR]: `${mui['text-field']} ${mui['text-field--md']}`,
  };

  return inputClasses[input];
}

export default function Scores(props: OnboardingFormProps) {
  const { form, setForm } = props;

  return (
    <div className={styles.form}>
      <div className={styles['form-input']}>
        {Header(ScoresStepInput.GPA)}
        <TextField
          className={classes(ScoresStepInput.GPA)}
          id={ScoresStepInput.GPA}
          label="GPA"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, scores: { ...form.scores, gpa: Number(e.target.value) } },
          )}
        />
      </div>

      <div className={styles['form-input']}>
        {Header(ScoresStepInput.ACT_SAT)}
        <TextField
          className={classes(ScoresStepInput.ACT_SAT)}
          id={ScoresStepInput.ACT_SAT}
          label="ACT/SAT Score"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, scores: { ...form.scores, act_sat: Number(e.target.value) } },
          )}
        />
      </div>

      <div className={styles['form-input']}>
        {Header(ScoresStepInput.MAJOR)}
        <TextField
          className={classes(ScoresStepInput.MAJOR)}
          id={ScoresStepInput.MAJOR}
          label="Major"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, scores: { ...form.scores, major: e.target.value } },
          )}
        />
      </div>
    </div>
  );
}
