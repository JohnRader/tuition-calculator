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
    fontFamily: ['"Raleway"', '"sans-serif"'].join(','),
  },
});
