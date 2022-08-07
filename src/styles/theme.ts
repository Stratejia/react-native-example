import { ThemeMode } from '../types/styles';

const tintColor = '#2f95dc';

const light = {
  text: '#000',
  background: '#fff',
  tint: tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
};

const dark = {
  text: '#fff',
  background: '#000',
  tint: tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: '#fff',
};

type Theme = ReturnType<typeof getTheme>;

function getTheme(mode: ThemeMode) {
  switch (mode) {
    default:
    case 'light':
      return light;
    case 'dark':
      return dark;
  }
}

export { getTheme, dark, light };
export type { Theme };
