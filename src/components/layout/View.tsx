import { View as DefaultView } from 'react-native';
import ThemeProps from '../../styles/ThemeProps';
import useThemeColor from '../../hooks/useThemeColor';

export type ViewProps = ThemeProps & DefaultView['props'];

function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export default View;
