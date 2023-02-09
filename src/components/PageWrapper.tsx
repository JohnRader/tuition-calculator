import { ReactNode } from 'react';
import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import { showHeader, Route } from '@/utils';

interface PageProps {
  page: ReactNode;
}

export default function PageWrapper(props: PageProps) {
  const { page } = props;

  const router = useRouter();

  const marginTop = showHeader(router.pathname as Route) ? 'var(--app-header-height)' : '0';

  return (
    <main>
      <Container
        id="page-container"
        maxWidth="lg"
        sx={{ marginTop }}
      >
        {page}
      </Container>
    </main>
  );
}
