import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#977AEA',
    },
    secondary: {
      main: '#F5EDF0',
    },
    success: {
      main: '#5DA271',
    },
    error: {
      main: '#D7263D',
    },
    warning: {
      main: '#F2BB05',
    },
    info: {
      main: '#083D77',
    },
  },
  typography: {
    fontFamily: ['Raleway', 'sans-serif'].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});
