import { Typography, Chip } from '@mui/material';
import { OnboardingFormStep } from '@/types';
import { theme } from '@/styles/theme';

export default function QuestionHeader({ questionId }: { questionId: OnboardingFormStep }) {
  const questionHeaders = {
    [OnboardingFormStep.LOCATION]: (
      <Typography variant="h5" gutterBottom>
        Which
        {' '}
        <strong>city</strong>
        {' '}
        and
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
        would you like to attend and
        {' '}
        what would you like to
        {' '}
        <strong>major</strong>
        {' '}
        in?
      </Typography>),
    [OnboardingFormStep.BUDGET]: (
      <Typography variant="h5" gutterBottom>
        What is your estimated annual
        {' '}
        <strong>budget</strong>
        ?
      </Typography>),
    [OnboardingFormStep.SCORES]: (
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
    [OnboardingFormStep.REVIEW]: (<Typography variant="h2">Review</Typography>),
  };

  return questionHeaders[questionId];
}
