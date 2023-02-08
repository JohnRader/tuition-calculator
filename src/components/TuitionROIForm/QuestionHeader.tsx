import { Typography, Chip } from '@mui/material';
import { TuitionROIFormStep } from '@/types';
import { theme } from '@/styles/theme';

export default function QuestionHeader({ questionId }: { questionId: TuitionROIFormStep }) {
  const questionHeaders = {
    [TuitionROIFormStep.UNIVERSITY]: (
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
    [TuitionROIFormStep.BUDGET]: (
      <Typography variant="h5" gutterBottom>
        What is your estimated annual household
        {' '}
        <strong>income</strong>
        {' '}
        and
        {' '}
        <strong>budget</strong>
        ?
      </Typography>),
    [TuitionROIFormStep.SCORES]: (
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
            backgroundColor: 'rgb(var(--primary-rgb), .4)',
            marginLeft: theme.spacing(1),
          }}
          size="small"
          label="Optional"
          color="primary"
        />
      </Typography>
    ),
    [TuitionROIFormStep.REVIEW]: (<Typography variant="h4" textAlign="center">Review your info</Typography>),
  };

  return questionHeaders[questionId];
}
