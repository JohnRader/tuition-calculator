import { Typography, Chip } from '@mui/material';
import { OnboardingFormStep } from '@/types';
import { theme } from '@/styles/theme';

export default function QuestionHeader({ questionId }: { questionId: OnboardingFormStep }) {
  const questionHeaders = {
    [OnboardingFormStep.STATE]: (
      <Typography variant="h5" gutterBottom>
        Which
        {' '}
        <strong>state</strong>
        {' '}
        do you currently reside in?

      </Typography>
    ),
    [OnboardingFormStep.UNIVERSITY]: (
      <Typography variant="h5" gutterBottom>
        Which
        {' '}
        <strong>university</strong>
        {' '}
        would you like to attend?
      </Typography>),
    [OnboardingFormStep.BUDGET]: (
      <Typography variant="h5" gutterBottom>
        What is your estimated annual
        {' '}
        <strong>budget</strong>
        ?
      </Typography>),
    [OnboardingFormStep.MAJOR]: (
      <Typography variant="h5" gutterBottom>
        What would you like to
        {' '}
        <strong>major</strong>
        {' '}
        in?
      </Typography>
    ),
    [OnboardingFormStep.PLACEMENT]: (
      <Typography variant="h5" gutterBottom>

        What is your
        {' '}
        <strong>GPA</strong>
        {' '}
        and
        {' '}
        <strong>ACT/SAT</strong>
        {' '}
        score?
        <Chip
          sx={{
            width: '80px',
            color: 'black',
            backgroundColor: 'rgb(var(--secondary-rgb), .4)',
            marginLeft: theme.spacing(1),
          }}
          size="small"
          label="Optional"
          color="primary"
        />
      </Typography>
    ),
  };

  return questionHeaders[questionId];
}
