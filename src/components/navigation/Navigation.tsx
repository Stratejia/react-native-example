import { ColorSchemeName } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  LinkingOptions,
} from '@react-navigation/native';
import RootNavigator from './RootNavigator';

declare type Props = {
  linking: LinkingOptions<ReactNavigation.RootParamList>;
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
