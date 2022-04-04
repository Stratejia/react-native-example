import { Text as DefaultText } from 'react-native';
import ThemeProps from '../../styles/ThemeProps';
import useThemeColor from '../../hooks/useThemeColor';

export type TextProps = ThemeProps & DefaultText['props'];

function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export default Text;
