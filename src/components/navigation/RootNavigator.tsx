import React from 'react';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/navigation';
import BottomTabNavigator from './BottomTabNavigator';
import NotFoundScreen from '../../domain/common/screens/NotFoundScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { t } = useTranslation('navigation');

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: t('notFound') }} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
