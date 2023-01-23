import '@/styles/globals.css';

import { Box, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import { theme } from '@/styles/theme';
import AppHeader from '@/components/AppHeader';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        overflow: 'hidden',
      }}
      >
        <AppHeader />
        <Component {...pageProps} />
      </Box>

    </ThemeProvider>
  );
}
