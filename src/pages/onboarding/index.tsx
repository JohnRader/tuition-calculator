import Head from 'next/head';
import { FormControl, TextField, Typography } from '@mui/material';
import mui from '@/styles/mui.module.css';
import styles from '@/styles/home.module.css';

export default function Onboarding() {
  return (
    <>
      <Head>
        <title>Onboarding</title>
        <meta name="description" content="Onboarding" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
      </main>
    </>
  );
}
