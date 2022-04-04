import Text, { TextProps } from './Text';

function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

export default MonoText;
