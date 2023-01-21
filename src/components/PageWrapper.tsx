import { ReactNode } from 'react';
import styles from '@/styles/index.module.css';

interface PageProps {
  page: ReactNode;
  classes: string;
}

export default function PageWrapper(props: PageProps) {
  const { page, classes } = props;

  return (
    <main className={`${styles['page-wrapper']} ${classes}`}>
      {page}
    </main>
  );
}
