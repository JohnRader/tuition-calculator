import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';

import { theme } from '@/styles/theme';
import AppHeader from '@/components/AppHeader';
import { Route } from '@/types';
import { showHeader } from '@/utils';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      { showHeader(router.pathname as Route) && <AppHeader />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
