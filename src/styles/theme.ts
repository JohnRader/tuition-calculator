import { createTheme } from '@mui/material';

const themeBase = createTheme({
  palette: {
    primary: {
      main: '#292940',
    },
    secondary: {
      main: '#e53d6f',
    },
    success: {
      main: '#00B289',
    },
    error: {
      main: '#C91B3B',
    },
    warning: {
      main: '#F9A828',
    },
    info: {
      main: '#6791FE',
    },
    background: {
      paper: '#fff',
      default: '#292940',
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
    MuiMobileStepper: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(var(--primary-rgb-light))',
        },
        dotActive: {
          backgroundColor: 'rgb(var(--secondary-rgb-light))',
        },
      },
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-active': {
            color: themeBase.palette.secondary.main,
          },
          '&.Mui-completed': {
            color: themeBase.palette.success.main,
          },
          '&.Mui-error': {
            color: themeBase.palette.error.main,
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
            fontSize: '1.5rem',
          },
          [breakpoints.down('sm')]: {
            fontSize: '1.15rem',
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
          '& label.Mui-focused': {
            color: themeBase.palette.secondary.main,
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: themeBase.palette.secondary.main,
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'rgb(var(--secondary-rgb-light)) 3px solid',
              borderRadius: '35px',
              backgroundColor: 'rgb(var(--secondary-rgb-light), 0.1)',
            },
            '&:hover fieldset': {
              borderColor: 'rgb(var(--secondary-rgb))',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(var(--secondary-rgb))',
            },
          },
        },
      },
    },
  },
};
