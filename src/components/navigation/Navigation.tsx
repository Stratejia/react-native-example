import React, { memo } from 'react';
import { ColorSchemeName } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme, LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from 'types/navigation';
import RootNavigator from 'components/navigation/RootNavigator';

type Props = {
  readonly linking: LinkingOptions<RootStackParamList>;
  readonly colorScheme: ColorSchemeName;
};

function Navigation({ linking, colorScheme }: Props) {
  return (
    <NavigationContainer linking={linking} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default memo(Navigation);
