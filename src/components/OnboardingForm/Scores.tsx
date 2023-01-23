import { TextField, Grid } from '@mui/material';

import QuestionHeader from '@/components/OnboardingForm/QuestionHeader';
import { classes, OnboardingFormInputs } from '@/components/OnboardingForm';

import type { OnboardingFormProps } from '@/types';

export default function Scores(props: OnboardingFormProps) {
  const { form, setForm } = props;

  return (
    <>
      <Grid item xs={12}>
        <QuestionHeader questionId={OnboardingFormInputs.MAJOR} />
        <TextField
          id={OnboardingFormInputs.MAJOR}
          className={classes(OnboardingFormInputs.MAJOR)}
          fullWidth
          label="Major"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, major: e.target.value },
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <QuestionHeader questionId={OnboardingFormInputs.GPA} />
        <TextField
          id={OnboardingFormInputs.GPA}
          className={classes(OnboardingFormInputs.GPA)}
          fullWidth
          label="GPA"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, gpa: Number(e.target.value) },
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <QuestionHeader questionId={OnboardingFormInputs.ACT_SAT} />
        <TextField
          id={OnboardingFormInputs.ACT_SAT}
          className={classes(OnboardingFormInputs.ACT_SAT)}
          fullWidth
          label="ACT/SAT Score"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, act_sat: Number(e.target.value) },
          )}
        />
      </Grid>
    </>
  );
}
