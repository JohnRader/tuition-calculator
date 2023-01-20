import { TextField, Typography } from '@mui/material';
import { OnboardingFormProps } from '@/types';

import mui from '@/styles/mui.module.css';
import styles from '@/styles/index.module.css';

export default function Location(props: OnboardingFormProps) {
  const { form, setForm } = props;

  return (
    <div className={styles.form}>
      <Typography variant="h3" gutterBottom>What state do you currently reside in?</Typography>
      <TextField
        className={mui['text-field']}
        id="state"
        label="State"
        variant="outlined"
        onChange={(e) => setForm(
          { ...form, location: { ...form.location, state: e.target.value } },
        )}
      />
      <Typography variant="h3" gutterBottom>What University would you like to attend?</Typography>
      <TextField
        className={mui['text-field']}
        id="university"
        label="University"
        variant="outlined"
        onChange={(e) => setForm(
          { ...form, location: { ...form.location, university: e.target.value } },
        )}
      />
      {/* TODO: Change to slider */}
      <Typography variant="h3" gutterBottom>What is you estimated yearly budget?</Typography>
      <TextField
        className={mui['text-field']}
        id="budget"
        label="Budget"
        variant="outlined"
        onChange={(e) => setForm(
          { ...form, location: { ...form.location, university: e.target.value } },
        )}
      />
    </div>
  );
}
