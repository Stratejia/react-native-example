import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RootTabParamList } from '../../types/navigation';
import useTheme from '../../hooks/useTheme';
import CatFactsScreen from '../../domain/cats/screens/CatFactsScreen';
import AboutScreen from '../../domain/about/screens/AboutScreen';
import { CatIcon, QuestionIcon } from '../icons/faIcons';
import CreateCatFactScreen from '../../domain/cats/screens/CreateCatFactScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { t } = useTranslation('navigation');
  const theme = useTheme();

  // TODO: Icon for create cat fact
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
          tabBarIcon: ({ color }) => <CatIcon size={20} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="CreateCatFact"
        component={CreateCatFactScreen}
        options={{
          title: t('createCatFact'),
          tabBarIcon: ({ color }) => <CatIcon size={20} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: t('about'),
          tabBarIcon: ({ color }) => <QuestionIcon size={20} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default memo(BottomTabNavigator);
