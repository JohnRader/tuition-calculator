import { TextField, Typography } from '@mui/material';
import { OnboardingFormProps } from '@/types';

import mui from '@/styles/mui.module.css';
import styles from '@/styles/index.module.css';

enum UserInfoStepInput {
  FIRST_NAME = 'first_name',
  MIDDLE_NAME = 'middle_name',
  LAST_NAME = 'last_name',
  PHONE = 'phone',
  EMAIL = 'email',
}

function Header() {
  return (
    <Typography variant="h4">
      Tell us a little about who
      {' '}
      <strong>You</strong>
      {' '}
      are.
    </Typography>
  );
}

function inputClasses() {
  return `${mui['text-field']} ${mui['text-field--md']}`;
}

export default function UserInfo(props: OnboardingFormProps) {
  const { form, setForm } = props;

  return (
    <div className={styles.form}>
      <Header />
      <div className={styles['form-inputs']}>
        <TextField
          className={inputClasses()}
          id={UserInfoStepInput.FIRST_NAME}
          label="First Name"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, userInfo: { ...form.userInfo, firstName: e.target.value } },
          )}
        />
        <TextField
          className={inputClasses()}
          id={UserInfoStepInput.MIDDLE_NAME}
          label="Middle Name"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, userInfo: { ...form.userInfo, middleName: e.target.value } },
          )}
        />
        <TextField
          className={inputClasses()}
          id={UserInfoStepInput.LAST_NAME}
          label="Last Name"
          variant="outlined"
          onChange={(e) => setForm(
            { ...form, userInfo: { ...form.userInfo, lastName: e.target.value } },
          )}
        />
        <TextField
          className={inputClasses()}
          id={UserInfoStepInput.PHONE}
          label="Phone"
          variant="outlined"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          onChange={(e) => setForm(
            { ...form, userInfo: { ...form.userInfo, phone: Number(e.target.value) } },
          )}
        />
        <TextField
          className={inputClasses()}
          id={UserInfoStepInput.EMAIL}
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
