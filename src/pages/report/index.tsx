import Head from 'next/head';
import dynamic from 'next/dynamic';
import {
  Box, Typography, CircularProgress, Grid, Card, Button, Collapse, Grow,
} from '@mui/material';
import { ExpandMoreRounded, ExpandLessRounded } from '@mui/icons-material';
import { useState } from 'react';

import PageWrapper from '@/components/PageWrapper';
import { State, StateCode, StateCodeMap } from '@/types';
import { formatCurrency } from '@/utils';
import { theme } from '@/styles/theme';

const DonutChart = dynamic(() => import('@/components/DonutChart'), { ssr: false });

interface ReportResults {
  major: string;
  university: string;
  city: string;
  state: State;
  budget: number;
  financialAid: number;
  scholarships: number;
  tuition: number;
  costOfLiving: number;
  householdIncome: number;
}

function ShowMoreIcon({ expanded }: { expanded: boolean }) {
  return expanded ? <ExpandLessRounded /> : <ExpandMoreRounded />;
}

function ReportOverview({ results }: { results: ReportResults }) {
  const {
    tuition, costOfLiving, budget, financialAid, scholarships,
  } = results;

  const ResultsChartData = [
    {
      name: 'Total Cost',
      value: tuition + costOfLiving,
      color: theme.palette.error.main,
    },
    {
      name: 'Total Budget',
      value: budget + financialAid + scholarships,
      color: theme.palette.success.main,
    },
    {
      name: 'Financed',
      value: tuition + costOfLiving - (budget + financialAid + scholarships),
      color: theme.palette.warning.main,
    }];

  return (
    <Grow in {...{ timeout: 1000 }}>
      <Card
        variant="outlined"
        sx={{
          padding: '2rem 1.5rem', display: 'flex', flexGrow: 1, flexDirection: 'column', width: '100%', gap: '1rem',
        }}
      >
        <Typography variant="h2" align="center"> Your Score </Typography>

        <Typography variant="h4" align="center">
          <strong> Average 80&#37; </strong>
        </Typography>

        <DonutChart slices={ResultsChartData} />

        <Typography variant="h6" component="h2">
          Based on your score, you will need to finance
          {' '}
          <strong>{ `${((ResultsChartData[2].value / ResultsChartData[0].value) * 100).toFixed(2)}%`}</strong>
          {' '}
          of your total cost.
        </Typography>

        <Typography variant="body1">
          You&apos;ll spend
          {' '}
          <strong>over 20&#37;</strong>
          {' '}
          of your take home pay toward paying off your loans over the next
          {' '}
          <strong>10 years</strong>
          .
        </Typography>
      </Card>
    </Grow>

  );
}

function ReportCalculations({
  results,
  expanded,
  setExpanded,
}: {
  results: ReportResults,
  expanded: boolean,
  setExpanded: (expanded: boolean) => void,
}) {
  const {
    major, university, city, state,
  } = results;

  const totalCost = (
    reportResults: ReportResults,
  ) => reportResults.tuition + reportResults.costOfLiving;

  const totalFinanced = (
    reportResults: ReportResults,
  ) => totalCost(reportResults) - (results.budget + results.financialAid + results.scholarships);

  return (
    <Grow in {...{ timeout: 2000 }}>
      <Card
        variant="outlined"
        sx={{
          padding: '2rem 1.5rem', display: 'flex', flexGrow: 1, flexDirection: 'column', width: '100%', gap: '1rem',
        }}
      >
        <Typography variant="h2" align="center"> The Calculation </Typography>
        <Typography variant="body1">
          As a
          {' '}
          <strong>{major}</strong>
          {' '}
          major from the
          {' '}
          <strong>{university}</strong>
          {' '}
          living in
          {' '}
          <strong>{`${city}, ${state.label}`}</strong>
        </Typography>

        <Button variant="text" onClick={() => setExpanded(!expanded)}>
          Expand To View
          {' '}
          <ShowMoreIcon expanded={expanded} />
        </Button>

        <Collapse in={expanded}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Typography variant="h6">
              Over 4 years, you&apos;ll spend:
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Tution:
                  {' '}
                  <strong>{formatCurrency(results.tuition)}</strong>
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Cost of Living:
                  {' '}
                  <strong>{formatCurrency(results.costOfLiving)}</strong>
                </Typography>
              </li>
            </ul>

            <Typography variant="h6">
              Your total
              {' '}
              <strong>Budget</strong>
              :
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  <strong>
                    {formatCurrency(results.budget)}
                  </strong>
                </Typography>
              </li>
            </ul>

            <Typography variant="h6">
              Based on your
              {' '}
              <strong>Household Income</strong>
              ,
              {' '}
              <strong>GPA</strong>
              ,
              {' '}
              and
              {' '}
              <strong>Test Scores</strong>
              :
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  Financial Aid:
                  {' '}
                  <strong>{formatCurrency(results.financialAid)}</strong>
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  Scholarships:
                  {' '}
                  <strong>{formatCurrency(results.scholarships)}</strong>
                </Typography>
              </li>
            </ul>

            <Typography variant="h6">
              Remainder to be
              {' '}
              <strong>financed</strong>
              :
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  {formatCurrency(totalFinanced(results))}
                </Typography>
              </li>
            </ul>
          </Box>
        </Collapse>

        <Button color="secondary" variant="contained">
          Call To Action
        </Button>
      </Card>
    </Grow>

  );
}

export default function ReportPage() {
  const [loading, setLoading] = useState(false);

  const [expanded, setExpanded] = useState(false);

  const [data, setData] = useState<ReportResults>({
    major: 'Computer Science',
    university: 'University of California, Berkeley',
    city: 'Berkeley',
    state: {
      value: StateCodeMap[StateCode.CA],
      label: StateCode.CA,
    } as State,
    budget: 80000,
    householdIncome: 100000,
    costOfLiving: 100000,
    financialAid: 100000,
    tuition: 200000,
    scholarships: 35000,
  });
  return (
    <>
      <Head>
        <title>Tuition Report</title>
        <meta name="description" content="Tuition Report" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <PageWrapper page={(
        <Grid container spacing={2} sx={{ paddingY: '2rem' }}>
          <Grid item xs={12}>
            <ReportOverview results={data} />
          </Grid>
          <Grid item xs={12}>
            {
          loading ? (
            <CircularProgress />
          ) : (
            <ReportCalculations
              results={data}
              expanded={expanded}
              setExpanded={setExpanded}
            />
          )
        }
          </Grid>
        </Grid>
    )}
      />
    </>

  );
}
