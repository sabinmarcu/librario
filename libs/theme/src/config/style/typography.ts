import type { TransformTarget } from '../../types/transform';

export const typography = {
  fontFamily: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  fontFamilyCode: 'Menlo,Consolas,"Droid Sans Mono",monospace',
  fontFamilyTagline: '"PlusJakartaSans-ExtraBold",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  fontFamilySystem: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  fontWeightSemiBold: 600,
  fontWeightExtraBold: 800,
  h1: {
    fontFamily: '"PlusJakartaSans-ExtraBold",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)',
    fontWeight: 800,
    lineHeight: 1.1142857142857143,
  },
  h2: {
    fontFamily: '"PlusJakartaSans-ExtraBold",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
    fontWeight: 800,
    lineHeight: 1.2222222222222223,
  },
  h3: {
    fontFamily: '"PlusJakartaSans-Bold",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontSize: '2.25rem',
    lineHeight: 1.2222222222222223,
    letterSpacing: 0.2,
    fontWeight: 400,
  },
  h4: {
    fontFamily: '"PlusJakartaSans-Bold",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontSize: '1.75rem',
    lineHeight: 1.5,
    letterSpacing: 0.2,
    fontWeight: 400,
  },
  h5: {
    fontFamily: '"PlusJakartaSans-Bold",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontSize: '1.5rem',
    lineHeight: 1.5,
    letterSpacing: 0.1,
    fontWeight: 400,
  },
  h6: {
    fontSize: '1.25rem',
    lineHeight: 1.5,
    fontFamily: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontWeight: 500,
  },
  button: {
    textTransform: 'initial',
    fontWeight: 700,
    letterSpacing: 0,
    fontFamily: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontSize: '0.875rem',
    lineHeight: 1.75,
  },
  subtitle1: {
    fontSize: '1.125rem',
    lineHeight: 1.3333333333333333,
    letterSpacing: 0,
    fontWeight: 500,
    fontFamily: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  body1: {
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: 0,
    fontFamily: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontWeight: 400,
  },
  body2: {
    fontSize: '0.875rem',
    lineHeight: 1.5,
    letterSpacing: 0,
    fontFamily: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontWeight: 400,
  },
  caption: {
    display: 'inline-block',
    fontSize: '0.75rem',
    lineHeight: 1.5,
    letterSpacing: 0,
    fontWeight: 700,
    fontFamily: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  },
  htmlFontSize: 16,
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  subtitle2: {
    fontFamily: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: 1.57,
  },
  overline: {
    fontFamily: '"IBM Plex Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    fontWeight: 400,
    fontSize: '0.75rem',
    lineHeight: 2.66,
    textTransform: 'uppercase',
  },
} as const satisfies TransformTarget;
