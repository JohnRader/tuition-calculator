import { ReactNode } from 'react';
import { Container } from '@mui/material';

interface PageProps {
  page: ReactNode;
}

export default function PageWrapper(props: PageProps) {
  const { page } = props;

  return (
    <main>
      <Container
        id="page-container"
        maxWidth="lg"
        sx={{ height: '100%' }}
      >
        {page}
      </Container>
    </main>
  );
}
