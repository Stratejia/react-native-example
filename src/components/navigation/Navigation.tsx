import { ColorSchemeName } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  LinkingOptions,
} from '@react-navigation/native';
import RootNavigator from './RootNavigator';
import { RootStackParamList } from '../../types';

type Props = {
  linking: LinkingOptions<RootStackParamList>;
  colorScheme: ColorSchemeName;
};

function Navigation({ linking, colorScheme }: Props) {
  return (
    <NavigationContainer
      linking={linking}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
