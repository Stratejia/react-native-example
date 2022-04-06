import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../types/navigation';
import { TabBarIcon } from '../icons';
import useTheme from '../../hooks/useTheme';
import CatFactsScreen from '../../domain/cats/screens/CatFactsScreen';
import AboutScreen from '../../domain/about/screens/AboutScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { t } = useTranslation('navigation');
  const theme = useTheme();

  // TODO: Change icons
  return (
    <BottomTab.Navigator
      initialRouteName="CatFacts"
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
      }}
    >
      <BottomTab.Screen
        name="CatFacts"
        component={CatFactsScreen}
        options={{
          title: t('catFacts'),
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: t('about'),
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default memo(BottomTabNavigator);
