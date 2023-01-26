import Head from 'next/head';
import { Box, Typography, CircularProgress } from '@mui/material';
import PageWrapper from '@/components/PageWrapper';

function Report() {
  return (
    <Box sx={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem 0',
    }}
    >
      <Typography variant="h2"> Tuition Report </Typography>
      <Box sx={{
        flexGrow: 1,
        display: 'flex',
        alignItems: 'center',
      }}
      >
        <CircularProgress />
      </Box>
    </Box>
  );
}

export default function ReportPage() {
  return (
    <>
      <Head>
        <title>Tuition Report</title>
        <meta name="description" content="Tuition Report" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper page={<Report />} />
    </>

  );
}
