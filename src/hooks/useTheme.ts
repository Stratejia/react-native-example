import useThemeContext from './useThemeContext';
import { getTheme } from '../styles';

function useTheme() {
  const themeContext = useThemeContext();
  return getTheme(themeContext.mode);
}

export default useTheme;
