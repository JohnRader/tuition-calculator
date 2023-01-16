import { FormControl, TextField, Typography } from '@mui/material';
import mui from '@/styles/mui.module.css';
import styles from '@/styles/home.module.css';

function UserInfo() {
  return (
    <div className={styles.center}>
      <FormControl sx={{ width: '50ch' }}>
        <Typography variant="h2">Enter your info</Typography>
        <TextField
          className={mui['form-input']}
          id="first-name"
          label="First Name"
          variant="outlined"
        />
        <TextField
          className={mui['form-input']}
          id="last-name"
          label="Last Name"
          variant="outlined"
        />
        <TextField
          className={mui['form-input']}
          id="phone"
          label="Phone"
          variant="outlined"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />
        <TextField
          className={mui['form-input']}
          id="email"
          label="Email"
          variant="outlined"
        />
      </FormControl>
    </div>
  );
}

function State() {
  return (
    <div className={styles.center}>
      <FormControl sx={{ width: '50ch' }}>
        <Typography variant="h2">What state do you currently reside in?</Typography>
        <TextField
          className={mui['form-input']}
          id="state"
          label="State"
          variant="outlined"
        />
      </FormControl>
    </div>
  );
}

function University() {
  return (
    <div className={styles.center}>
      <FormControl sx={{ width: '50ch' }}>
        <Typography variant="h2">What University would you like to attend?</Typography>
        <TextField
          className={mui['form-input']}
          id="university"
          label="University"
          variant="outlined"
        />
      </FormControl>
    </div>
  );
}

export default function Onboarding() {
  return (
    <>
      <UserInfo />
      <State />
      <University />
    </>
  );
}
