import { createTheme } from '@mui/material';

const themeBase = createTheme({
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
    fontFamily: ['Raleway', 'arial'].join(','),
  },
});

const { breakpoints } = themeBase;

export const theme = {
  ...themeBase,
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '6rem',
          [breakpoints.down('md')]: {
            fontSize: '5.35rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '5.10rem',
          },
        },
        h2: {
          fontSize: '3.75rem',
          [breakpoints.down('md')]: {
            fontSize: '3.1rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '2.85rem',
          },
        },
        h3: {
          fontSize: '3rem',
          [breakpoints.down('md')]: {
            fontSize: '2.35rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '2.20rem',
          },
        },
        h4: {
          fontSize: '2.15rem',
          [breakpoints.down('md')]: {
            fontSize: '1.5rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '1.25rem',
          },
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          '& .MuiGrid-item': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
        },
      },
    },
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
              borderRadius: '25px',
              backgroundColor: 'rgb(var(--primary-rgb-light), 0.1)',
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
};
