import { TextField, Typography, Chip } from '@mui/material';
import type { OnboardingFormProps } from '@/types';

import mui from '@/styles/mui.module.css';
import styles from '@/styles/index.module.css';
import { theme } from '@/styles/theme';

enum ScoresStepInput {
  GPA = 'gpa',
  ACT_SAT = 'act_sat',
  MAJOR = 'major',
}

function Header({ input }: { input: ScoresStepInput }) {
  const headers = {
    [ScoresStepInput.GPA]: (
      <Typography variant="h4" gutterBottom>
        What is your
        {' '}
        <strong>GPA</strong>
        ?
      </Typography>),
    [ScoresStepInput.ACT_SAT]: (
      <Typography variant="h4" gutterBottom>
        What is your
        {' '}
        <strong>ACT/SAT</strong>
        {' '}
        score?
      </Typography>
    ),
    [ScoresStepInput.MAJOR]: (
      <Typography variant="h4" gutterBottom>
        What would you like to
        {' '}
        <strong>major</strong>
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
        <Chip
          sx={{
            width: '120px',
            color: 'black',
            backgroundColor: 'rgb(var(--primary-rgb), .4)',
            marginBottom: theme.spacing(1),
          }}
          size="small"
          label="Optional"
          color="primary"
        />
        <Header input={ScoresStepInput.GPA} />
        <TextField
          className={classes(ScoresStepInput.GPA)}
          id={ScoresStepInput.GPA}
          label="GPA"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, gpa: Number(e.target.value) },
          )}
        />
      </div>

      <div className={styles['form-input']}>
        <Chip
          sx={{
            width: '120px',
            color: 'black',
            backgroundColor: 'rgb(var(--primary-rgb), .4)',
            marginBottom: theme.spacing(1),
          }}
          size="small"
          label="Optional"
          color="primary"
        />
        <Header input={ScoresStepInput.ACT_SAT} />
        <TextField
          className={classes(ScoresStepInput.ACT_SAT)}
          id={ScoresStepInput.ACT_SAT}
          label="ACT/SAT Score"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, act_sat: Number(e.target.value) },
          )}
        />
      </div>

      <div className={styles['form-input']}>
        <Chip
          sx={{
            width: '120px',
            color: 'black',
            backgroundColor: 'rgb(var(--primary-rgb), .4)',
            marginBottom: theme.spacing(1),
          }}
          size="small"
          label="Optional"
          color="primary"
        />
        <Header input={ScoresStepInput.MAJOR} />
        <TextField
          className={classes(ScoresStepInput.MAJOR)}
          id={ScoresStepInput.MAJOR}
          label="Major"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, major: e.target.value },
          )}
        />
      </div>
    </div>
  );
}
