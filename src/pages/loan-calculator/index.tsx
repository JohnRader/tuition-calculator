import Head from 'next/head';
import {
  Grid, Typography, Box, Slider,
} from '@mui/material';
import PageWrapper from '@/components/PageWrapper';
import styles from '@/styles/index.module.css';

export default function LoanCalculatorPage() {
  return (
    <>
      <Head>
        <title>Loan Calculator</title>
        <meta name="description" content="Borrow Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper page={(
        <Box sx={{ paddingY: '2rem' }}>
          <Typography variant="h3" textAlign="center" gutterBottom>
            How much would you like
            {' '}
            <strong>to borrow</strong>
            ?
          </Typography>

          <Grid container>
            <Grid item xs={12} md={6} className={styles['grid-item-with-separator']} sx={{ padding: '2rem 1rem' }}>
              <Typography variant="h3">
                Loan Amount
              </Typography>
              <Slider color="secondary" />
              <Typography variant="h4">
                $0
              </Typography>
              <Typography variant="h3">
                Payment Period
              </Typography>
              <Slider color="secondary" />
              <Typography variant="h4">
                0 Years
              </Typography>
            </Grid>

            <Grid item xs={12} md={6} className={styles['grid-item-with-separator']} sx={{ padding: '2rem 1rem' }}>
              <Typography variant="h3">
                Monthly Payment
              </Typography>
              <Typography variant="h4">
                $0
              </Typography>
              <Typography variant="h3">
                Fees Include
              </Typography>

              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    padding: {
                      xs: '2rem 0', md: '0',
                    },
                  }}
                >
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(var(--error-rgb), 0.2)',
                    minWidth: '200px',
                    alignItems: 'center',
                    padding: '1rem 0',
                  }}
                  >
                    <Typography variant="h6">
                      Borrowing
                    </Typography>
                    <Typography variant="h4">
                      $0
                    </Typography>
                  </Box>

                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'rgba(var(--success-rgb), 0.2)',
                    minWidth: '200px',
                    alignItems: 'center',
                    padding: '1rem 0',
                  }}
                  >
                    <Typography variant="h6">
                      To Repay
                    </Typography>
                    <Typography variant="h4">
                      $0
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
      />
    </>
  );
}
