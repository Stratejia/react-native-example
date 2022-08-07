import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotFoundScreen from 'domain/common/screens/NotFoundScreen';
import { RootStackParamList } from 'types/navigation';
import BottomTabNavigator from 'components/navigation/BottomTabNavigator';

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

export default memo(RootNavigator);
