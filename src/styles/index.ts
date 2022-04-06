import { ThemeMode } from '../types/styles';
import { light, dark } from './theme';
import colors from './colors';
import spacing from './spacing';

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

export { getTheme, colors, spacing };

export type { Theme };
