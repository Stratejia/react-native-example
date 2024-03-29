import type { ReactNode } from 'react';
import React, { createContext, memo, useMemo, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import { getTheme } from '../styles/theme';
import type { ThemeMode } from '../types/styles';

const defaultMode = 'dark';

type Props = {
  readonly children: ReactNode;
};

function ThemeProvider({ children }: Props) {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  const theme = useMemo(() => getTheme(mode), [mode]);

  function switchMode() {
    setMode(mode === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ mode, setMode, switchMode }}>
      <StyledComponentsThemeProvider theme={theme}>{children}</StyledComponentsThemeProvider>
    </ThemeContext.Provider>
  );
}

const ThemeContext = createContext<{
  readonly mode: ThemeMode;
  readonly setMode: (mode: ThemeMode) => void;
  readonly switchMode: () => void;
}>({ mode: defaultMode, setMode: () => undefined, switchMode: () => undefined });

export default memo(ThemeProvider);

export { ThemeContext };
