import { ReactNode } from 'react';
import styles from '@/styles/index.module.css';

interface PageProps {
  page: ReactNode;
}

export default function PageWrapper(props: PageProps) {
  const { page } = props;

  return (
    <main className={`${styles.center} ${styles['page-wrapper']}`}>
      {page}
    </main>
  );
}
