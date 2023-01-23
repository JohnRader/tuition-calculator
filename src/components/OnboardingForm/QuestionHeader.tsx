import { Typography, Chip } from '@mui/material';
import { OnboardingFormInputs } from '@/components/OnboardingForm';
import { theme } from '@/styles/theme';

export default function QuestionHeader({ questionId }: { questionId: OnboardingFormInputs }) {
  const questionHeaders = {
    [OnboardingFormInputs.STATE]: (
      <Typography variant="h4" gutterBottom>
        What
        {' '}
        <strong>state</strong>
        {' '}
        do you currently reside in?

      </Typography>
    ),
    [OnboardingFormInputs.UNIVERSITY]: (
      <Typography variant="h4" gutterBottom>
        Which
        {' '}
        <strong>university</strong>
        {' '}
        would you like to attend?
      </Typography>),
    [OnboardingFormInputs.BUDGET]: (
      <Typography variant="h4" gutterBottom>
        What is your estimated annual
        {' '}
        <strong>budget</strong>
        ?
      </Typography>),
    [OnboardingFormInputs.GPA]: (
      <>
        <Chip
          sx={{
            width: '80px',
            color: 'black',
            backgroundColor: 'rgb(var(--primary-rgb), .4)',
            marginBottom: theme.spacing(1),
            marginRight: theme.spacing(1),
          }}
          size="small"
          label="Optional"
          color="primary"
        />
        <Typography variant="h4" gutterBottom>
          What is your
          {' '}
          <strong>GPA</strong>
          ?
        </Typography>
      </>
    ),
    [OnboardingFormInputs.ACT_SAT]: (
      <>
        <Chip
          sx={{
            width: '80px',
            color: 'black',
            backgroundColor: 'rgb(var(--primary-rgb), .4)',
            marginBottom: theme.spacing(1),
            marginRight: theme.spacing(1),
          }}
          size="small"
          label="Optional"
          color="primary"
        />
        <Typography variant="h4" gutterBottom>
          What is your
          {' '}
          <strong>ACT/SAT</strong>
          {' '}
          score?
        </Typography>
      </>
    ),
    [OnboardingFormInputs.MAJOR]: (
      <>
        <Chip
          sx={{
            width: '80px',
            color: 'black',
            backgroundColor: 'rgb(var(--primary-rgb), .4)',
            marginBottom: theme.spacing(1),
            marginRight: theme.spacing(1),
          }}
          size="small"
          label="Optional"
          color="primary"
        />
        <Typography variant="h4" gutterBottom>
          What would you like to
          {' '}
          <strong>major</strong>
          {' '}
          in?
        </Typography>
      </>
    ),
  };

  return questionHeaders[questionId];
}
