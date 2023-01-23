import {
  TextField, Typography, Slider, Box, Grid,
} from '@mui/material';

import QuestionHeader from '@/components/OnboardingForm/QuestionHeader';
import { classes, OnboardingFormInputs } from '@/components/OnboardingForm';
import { formatCurrency } from '@/utils';

import type { OnboardingFormProps } from '@/types';

export default function Location(props: OnboardingFormProps) {
  const { form, setForm } = props;

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setForm({ ...form, budget: newValue });
    }
  };

  return (
    <>
      <Grid item xs={12}>
        <QuestionHeader questionId={OnboardingFormInputs.STATE} />
        <TextField
          id={OnboardingFormInputs.STATE}
          className={classes(OnboardingFormInputs.STATE)}
          fullWidth
          label="State"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, state: e.target.value },
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <QuestionHeader questionId={OnboardingFormInputs.UNIVERSITY} />
        <TextField
          id={OnboardingFormInputs.UNIVERSITY}
          className={classes(OnboardingFormInputs.UNIVERSITY)}
          fullWidth
          label="University"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, university: e.target.value },
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <QuestionHeader questionId={OnboardingFormInputs.BUDGET} />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2rem',
          padding: {
            xs: '1rem',
            md: '0',
          },
          width: {
            xs: '300px',
            sm: '500px',
            md: '600px',
          },
        }}
        >
          <Slider
            value={typeof form.budget === 'number' ? form.budget : 10000}
            onChange={handleSliderChange}
            aria-labelledby={OnboardingFormInputs.BUDGET}
            step={1000}
            max={100000}
          />
          <Typography
            id={OnboardingFormInputs.BUDGET}
            variant="h2"
          >
            {formatCurrency(form.budget)}
          </Typography>
        </Box>
      </Grid>
    </>
  );
}
