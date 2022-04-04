import useColorScheme from './useColorScheme';
import colors from '../styles/colors';

declare type Props = {
  light?: string;
  dark?: string;
};

declare type ColorName = keyof typeof colors.light & keyof typeof colors.dark;

function useThemeColor(props: Props, colorName: ColorName) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return colors[theme][colorName];
  }
}

export default useThemeColor;
