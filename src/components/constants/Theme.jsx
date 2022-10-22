export const theme = Object.freeze({
  colors: {
    light: '#ffffff',
    dark: '#303030',
    accent: '#ff7700',
    searchIcon: '#303030',
    header: '#ff7700',
    background: '#ffffff',
    error: '#ff0000',
  },
  spacing: value => `${4 * value}px`,
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: 'none',
    normal: '4px',
    round: '50%',
  },
  fontSizes: {
    small: '20px',
    medium: '24px',
    mediumPlus: '30px',
    large: '36px',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    mediumPlus: '600',
    bolt: '700',
  },
});
