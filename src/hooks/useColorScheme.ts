import {
  ColorSchemeName,
  useColorScheme as _useColorScheme,
} from 'react-native';

function useColorScheme() {
  return _useColorScheme() as NonNullable<ColorSchemeName>;
}

export default useColorScheme;
