declare type ThemeMode = 'light' | 'dark';

declare type ThemeProps = {
  readonly lightColor?: string;
  readonly darkColor?: string;
};

export type { ThemeMode, ThemeProps };
