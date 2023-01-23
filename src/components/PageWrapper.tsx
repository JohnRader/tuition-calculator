import { ReactNode } from 'react';
import { Container } from '@mui/material';
import AppHeader from '@/components/AppHeader';

import styles from '@/styles/index.module.css';

interface PageProps {
  page: ReactNode;
  classes?: string;
}

export default function PageWrapper(props: PageProps) {
  const { page, classes } = props;

  return (
    <>
      <AppHeader />

      <main className={`${styles['page-wrapper']} ${classes}`}>
        <Container maxWidth="lg" sx={{ display: 'flex', flex: '1' }}>
          {page}
        </Container>
      </main>
    </>
  );
}

PageWrapper.defaultProps = {
  classes: '',
};
