import { createTheme } from '@mui/material';

const themeBase = createTheme({
  palette: {
    primary: {
      main: '#EB6662',
    },
    secondary: {
      main: '#f5f5f5',
    },
    success: {
      main: '#23CE6B',
    },
    error: {
      main: '#C91B3B',
    },
    warning: {
      main: '#F3B700',
    },
    info: {
      main: '#3772FF',
    },
    background: {
      paper: 'whitesmoke',
      default: '#282850',
    },
    accentBlue: {
      main: '#6791FE',
      dark: '#4865B1',
      light: '#85A7FE',
    },
    accentPurple: {
      main: '#736CED',
      dark: '#504BA5',
      light: '#8F89F0',
    },
    accentTeal: {
      main: '#388697',
      dark: '#275C68',
      light: '#6AB7C8',
    },
  },
  typography: {
    fontFamily: ['Raleway', 'arial'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

const { breakpoints } = themeBase;

export const theme = {
  ...themeBase,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          color: 'rgb(var(--secondary-rgb))',
          backgroundColor: 'rgb(var(--background-rgb))',
          '.MuiListItemIcon-root': {
            color: 'rgb(var(--secondary-rgb))',
          },
          '.MuiDivider-root': {
            borderColor: 'rgb(var(--secondary-rgb))',
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: 'rgb(var(--accent-blue-rgb))',
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: 'rgb(var(--secondary-rgb))',
          '.MuiStepIcon-text': {
            fill: 'rgb(var(--background-rgb))',
          },
          '&.Mui-active': {
            color: 'rgb(var(--primary-rgb))',
          },
          '&.Mui-completed': {
            color: 'rgb(var(--success-rgb))',
          },
          '&.Mui-error': {
            color: 'rgb(var(--error-rgb))',
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          '.MuiStepLabel-label': {
            color: 'white',
            '&.Mui-active': {
              color: 'white',
            },
            '&.Mui-completed': {
              color: 'white',
            },
          },
          '.MuiTypography-caption': {
            color: 'white',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '6rem',
          [breakpoints.down('md')]: {
            fontSize: '5.35rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '5rem',
          },
        },
        h2: {
          fontSize: '3.75rem',
          [breakpoints.down('md')]: {
            fontSize: '3.1rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '2.75rem',
          },
        },
        h3: {
          fontSize: '3rem',
          [breakpoints.down('md')]: {
            fontSize: '2.35rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '2.10rem',
          },
        },
        h4: {
          fontSize: '2.15rem',
          [breakpoints.down('md')]: {
            fontSize: '1.75rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '1.35rem',
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
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--border-radius)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 'var(--border-radius)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& label': {
            '&.Mui-focused': {
              color: 'rgb(var(--accent-blue-rgb-dark))',
            },
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(var(--accent-blue-rgb-dark))',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'rgb(var(--accent-blue-rgb-light)) 3px solid',
              borderRadius: '35px',
              backgroundColor: 'rgb(var(--accent-blue-rgb-light), 0.2)',
            },
            '&:hover fieldset': {
              borderColor: 'rgb(var(--accent-blue-rgb-dark))',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(var(--accent-blue-rgb-dark))',
            },
          },
        },
      },
    },
  },
};
