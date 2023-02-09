import '@/styles/globals.css';
import { ThemeProvider } from '@mui/material';
import { useRouter } from 'next/router';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import { theme } from '@/styles/theme';
import AppHeader from '@/components/AppHeader';
import { Route, showHeader } from '@/utils';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      { showHeader(router.pathname as Route) && <AppHeader />}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
