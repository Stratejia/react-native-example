import type { ThemeMode } from '../types/styles';

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

type ThemeColors = typeof light;

const modeToColors: Record<ThemeMode, ThemeColors> = {
  light,
  dark,
};

type Theme = ReturnType<typeof getTheme>;

function getTheme(mode: ThemeMode) {
  return modeToColors[mode];
}

export { getTheme, dark, light };
export type { Theme };
