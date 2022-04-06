import React, { createContext, memo, ReactNode, useMemo, useState } from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components/native';
import { ThemeMode } from '../types/styles';
import { getTheme } from '../styles';

const defaultMode = 'dark';

type Props = {
  children: ReactNode;
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
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  switchMode: () => void;
}>({ mode: defaultMode, setMode: () => undefined, switchMode: () => undefined });

export default memo(ThemeProvider);

export { ThemeContext };
