import { TextField, Typography } from '@mui/material';
import { OnboardingFormProps } from '@/types';

import mui from '@/styles/mui.module.css';
import styles from '@/styles/index.module.css';

export default function UserInfo(props: OnboardingFormProps) {
  const { form, setForm } = props;

  return (
    <div className={styles.form}>
      <Typography variant="h3" gutterBottom>
        Tell us who
        {' '}
        <strong>You</strong>
        {' '}
        are.
      </Typography>

      <div className={styles['form-inputs']}>
        <TextField
          className={mui['text-field']}
          id="first-name"
          label="First Name"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, userInfo: { ...form.userInfo, firstName: e.target.value } },
          )}
        />
        <TextField
          className={mui['text-field']}
          id="last-name"
          label="Last Name"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, userInfo: { ...form.userInfo, lastName: e.target.value } },
          )}
        />
        <TextField
          className={mui['text-field']}
          id="phone"
          label="Phone"
          variant="outlined"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(e) => setForm(
            { ...form, userInfo: { ...form.userInfo, phone: Number(e.target.value) } },
          )}
        />
        <TextField
          className={mui['text-field']}
          id="email"
          label="Email"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, userInfo: { ...form.userInfo, email: e.target.value } },
          )}
        />
      </div>
    </div>
  );
}
