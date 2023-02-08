import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accentBlue: Palette['primary'];
    accentPurple: Palette['primary'];
    accentTeal: Palette['primary'];
  }

  interface PaletteOptions {
    accentBlue: PaletteOptions['primary'];
    accentPurple: PaletteOptions['primary'];
    accentTeal: PaletteOptions['primary'];
  }
}
