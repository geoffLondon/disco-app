import { createMuiTheme } from '@material-ui/core'

const spacing = 8

const primary = {
  light: '#537dd2',
  main: '#0D51A0',
  dark: '#002a71',
  contrastText: '#FFFFFF',
}

const secondary = {
  light: '#FFFFFF',
  main: '#FFFFFF',
  dark: '#E5E5E5',
  contrastText: '#0D51A0',
  darkBlue: '#09315F',
  grey: 'rgba(0,0,0,0.36)'
}

const divider = '#E0E0E0'

const caption = '#797979'

export default createMuiTheme({
  spacing: spacing,
  primary: primary,
  secondary: secondary,
  mixins: {
    toolbar: {
      minHeight: spacing * 8
    }
  },
  palette: {
    divider: divider,
    primary: primary,
    secondary: secondary,
    action: {
      selected: 'rgba(95,169,255,0.26)',
      hover: 'rgba(95,169,255,0.26)'
    },
  },
  typography: {
    fontWeightMedium: 'normal',
    h1: {
      fontWeight: 300,
      fontSize: '1.875rem',
      lineHeight: '2.5rem'
    },
    h2: {
      fontWeight: 400,
      color: '#949FA3',
      fontSize: '1.5rem',
      lineHeight: '1.75rem'
    },
    h3: {
      fontWeight: 300,
      fontSize: '1.25rem',
      lineHeight: '1.5rem'
    },
    h4: {
      color: caption,
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: '1.1875rem'
    },
    h5: {
      fontSize: '0.75rem',
      lineHeight: '0.875rem'
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: '1rem'
    },
    body2: {
      fontSize: '0.8125rem',
      fontWeight: 'normal',
      lineHeight: '0.9375rem'
    },
    caption: {
      color: caption,
      fontSize: '0.75rem',
      lineHeight: '0.875rem'
    },
    button: {
      textTransform: 'initial'
    }
  },
  overrides: {
    MuiInput: {
      root: {
        fontSize: '0.875rem',
        lineHeight: '1rem'
      },
      underline: {
        '&:after': {
          borderBottom: `2px solid ${ primary.main }`
        }
      }
    }
  }
})
