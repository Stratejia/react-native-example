import { getTheme } from '../styles/theme';
import useThemeContext from './useThemeContext';

function useTheme() {
  const themeContext = useThemeContext();
  return getTheme(themeContext.mode);
}

export default useTheme;
