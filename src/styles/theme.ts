import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#977AEA',
      dark: '#5D3F6A',
      light: '#C0AFF2',
    },
    secondary: {
      main: '#CAD7DD',
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
    h4: {
      fontWeight: 700,
    },
    fontFamily: ['"Raleway"', '"sans-serif"'].join(','),
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label.Mui-focused': {
            color: 'rgb(var(--primary-rgb))',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(var(--primary-rgb))',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'rgb(var(--primary-rgb-light)) 4px solid',
              'border-radius': '25px',
              'background-color': 'rgb(var(--primary-rgb-light), 0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgb(var(--primary-rgb))',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(var(--primary-rgb))',
            },
          },
        },
      },
    },
  },
});
