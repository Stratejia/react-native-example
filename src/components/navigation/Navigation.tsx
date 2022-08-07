import React, { memo } from 'react';
import type { ColorSchemeName } from 'react-native';
import type { LinkingOptions } from '@react-navigation/native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import type { RootStackParamList } from '../../types/navigation';
import RootNavigator from './RootNavigator';

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
