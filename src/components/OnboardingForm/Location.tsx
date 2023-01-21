import {
  TextField, Typography, Slider, Box,
} from '@mui/material';
import { OnboardingFormProps } from '@/types';

import mui from '@/styles/mui.module.css';
import styles from '@/styles/index.module.css';

enum LocationStepInput {
  STATE = 'state',
  UNIVERSITY = 'university',
  BUDGET = 'budget',
}

function Header({ input }: { input: LocationStepInput }) {
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

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setForm({ ...form, budget: newValue });
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles['form-input']}>
        <Header input={LocationStepInput.STATE} />
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
        <Header input={LocationStepInput.UNIVERSITY} />
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
        <Header input={LocationStepInput.BUDGET} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyItems: 'center',
          gap: '2rem',
        }}
        >
          <Slider
            value={typeof form.budget === 'number' ? form.budget : 10000}
            onChange={handleSliderChange}
            aria-labelledby="budget-slider"
            step={100}
            max={100000}
            valueLabelDisplay="auto"
          />
          <Typography
            id="budget-slider"
            gutterBottom
            variant="h2"
          >
            {(form.budget).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Typography>
        </Box>

        {/* <TextField
          className={classes(LocationStepInput.BUDGET)}
          id={LocationStepInput.BUDGET}
          label="Budget"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, budget: Number(e.target.value) },
          )}
        /> */}
      </div>
    </div>
  );
}
