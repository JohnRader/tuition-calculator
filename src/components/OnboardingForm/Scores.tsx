import { TextField, Typography } from '@mui/material';
import { OnboardingFormProps } from '@/types';

import mui from '@/styles/mui.module.css';
import styles from '@/styles/index.module.css';

export default function Scores(props: OnboardingFormProps) {
  const { form, setForm } = props;

  return (
    <div className={styles.form}>
      <Typography variant="h3" gutterBottom>What is you GPA?</Typography>
      <TextField
        className={mui['text-field']}
        id="gpa"
        label="GPA"
        variant="outlined"
        onChange={(e) => setForm(
          { ...form, scores: { ...form.scores, gpa: Number(e.target.value) } },
        )}
      />
      <Typography variant="h3" gutterBottom>What is you ACT/SAT score?</Typography>
      <TextField
        className={mui['text-field']}
        id="act-sat"
        label="ACT/SAT Score"
        variant="outlined"
        onChange={(e) => setForm(
          { ...form, scores: { ...form.scores, act_sat: Number(e.target.value) } },
        )}
      />
      <Typography variant="h3" gutterBottom>What would you like to major in?</Typography>
      <TextField
        className={mui['text-field']}
        id="major"
        label="Major"
        variant="outlined"
        onChange={(e) => setForm(
          { ...form, scores: { ...form.scores, major: e.target.value } },
        )}
      />
    </div>
  );
}
