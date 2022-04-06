const light = {
  surface: '#fafafa',
  onSurface: '#000',
  border: '#b8c2ca',
  variants: {
    success: {
      main: '#4CAF50',
      background: '#edf7ed',
      onBackground: '#1e4620',
    },
    info: {
      main: '#03A9F4',
      background: '#e5f6fd',
      onBackground: '#014361',
    },
    warning: {
      main: '#FF9800',
      background: '#fff4e5',
      onBackground: '#663C00',
    },
    error: {
      main: '#EF5350',
      background: '#fdeded',
      onBackground: '#5F2120',
    },
  },
};

const dark = {
  surface: '#222222',
  onSurface: '#fff',
  border: '#b8c2ca',
  variants: {
    success: {
      main: '#66bb6a',
      background: '#0c130d',
      onBackground: '#cce8cd',
    },
    info: {
      main: '#29b6f6',
      background: '#071318',
      onBackground: '#b8e7fb',
    },
    warning: {
      main: '#ffa726',
      background: '#191207',
      onBackground: '#ffe2b7',
    },
    error: {
      main: '#f44336',
      background: '#160b0b',
      onBackground: '#f4c7c7',
    },
  },
};

const colors = { light, dark };

export default colors;
