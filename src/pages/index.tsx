import Head from 'next/head';
import {
  Grid, Card, Typography, Box, Button,
} from '@mui/material';
import { useRouter } from 'next/router';
import PageWrapper from '@/components/PageWrapper';
import { Route } from '@/types';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Tuition Calculator</title>
        <meta name="description" content="Tuition Calculator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper page={(
        <Box
          display="flex"
          height="100%"
          flexDirection="column"
          paddingTop={4}
          alignItems="center"
          gap={4}
        >

          <Typography variant="h3" gutterBottom>
            App Name
          </Typography>
          <Typography variant="h3" gutterBottom>
            Tagline goes here.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Extra body copy — description of what we do; value proposition, etc.
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ padding: '2rem' }}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Calulcate your Tuition
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Use our tuition calculator to estimate your tuition based on your budget,
                    choice of school, and more.
                  </Typography>
                  <Button sx={{ marginTop: '2rem' }} color="primary" variant="contained" onClick={() => router.push(Route.TUITION_CALCULATOR)}>
                    Tuition Calculator
                  </Button>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ padding: '2rem' }}>
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Calculate your Financial Aid
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Use our loan calculator to estimate your loan amount based on your budget.
                  </Typography>
                  <Button sx={{ marginTop: '2rem' }} color="primary" variant="contained" onClick={() => router.push(Route.LOAN_CALCULATOR)}>
                    Loan Calculator
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
    )}
      />
    </>
  );
}
