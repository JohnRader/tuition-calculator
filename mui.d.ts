import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accentBlue: Palette['primary'];
    accentPink: Palette['primary'];
    accentTeal: Palette['primary'];
  }

  interface PaletteOptions {
    accentBlue: PaletteOptions['primary'];
    accentPink: PaletteOptions['primary'];
    accentTeal: PaletteOptions['primary'];
  }
}
