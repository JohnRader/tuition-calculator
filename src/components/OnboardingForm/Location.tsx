import { TextField, Typography } from '@mui/material';
import { OnboardingFormProps } from '@/types';

import mui from '@/styles/mui.module.css';
import styles from '@/styles/index.module.css';

enum LocationStepInput {
  STATE = 'state',
  UNIVERSITY = 'university',
  BUDGET = 'budget',
}

function Header(input: LocationStepInput) {
  const headers = {
    [LocationStepInput.STATE]: (
      <Typography variant="h4" gutterBottom>
        What
        {' '}
        <strong>state</strong>
        {' '}
        do you currently reside in?
      </Typography>),
    [LocationStepInput.UNIVERSITY]: (
      <Typography variant="h4" gutterBottom>
        Which
        {' '}
        <strong>university</strong>
        {' '}
        would you like to attend?
      </Typography>),
    [LocationStepInput.BUDGET]: (
      <Typography variant="h4" gutterBottom>
        What is your estimated annual
        {' '}
        <strong>budget</strong>
        ?
      </Typography>),
  };

  return headers[input];
}

function classes(input: LocationStepInput) {
  const inputClasses: Record<LocationStepInput, string> = {
    [LocationStepInput.STATE]: `${mui['text-field']} ${mui['text-field--sm']}`,
    [LocationStepInput.UNIVERSITY]: `${mui['text-field']} ${mui['text-field--lg']}`,
    [LocationStepInput.BUDGET]: `${mui['text-field']} ${mui['text-field--sm']}`,
  };

  return inputClasses[input];
}

export default function Location(props: OnboardingFormProps) {
  const { form, setForm } = props;

  return (
    <div className={styles.form}>
      <div className={styles['form-input']}>
        {Header(LocationStepInput.STATE)}
        <TextField
          className={classes(LocationStepInput.STATE)}
          id={LocationStepInput.STATE}
          label="State"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, state: e.target.value },
          )}
        />
      </div>

      <div className={styles['form-input']}>
        {Header(LocationStepInput.UNIVERSITY)}
        <TextField
          className={classes(LocationStepInput.UNIVERSITY)}
          id={LocationStepInput.UNIVERSITY}
          label="University"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, university: e.target.value },
          )}
        />
      </div>

      <div className={styles['form-input']}>
        {/* TODO: Change to slider */}
        {Header(LocationStepInput.BUDGET)}
        <TextField
          className={classes(LocationStepInput.BUDGET)}
          id={LocationStepInput.BUDGET}
          label="Budget"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, budget: Number(e.target.value) },
          )}
        />
      </div>
    </div>
  );
}
