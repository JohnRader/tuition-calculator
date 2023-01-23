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
        sx={{
          flex: 1,
          flexGrow: 1,
          maxHeight: 'calc(100vh - var(--app-header-height))',
          overflowY: 'scroll',
        }}
      >
        {page}
      </Container>
    </main>
  );
}
