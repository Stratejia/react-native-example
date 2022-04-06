import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootTabParamList } from '../../types/navigation';
import { TabBarIcon } from '../icons';
import NfcReaderScreen from '../../domain/nfc/screens/NfcReaderScreen';
import NfcWriterScreen from '../../domain/nfc/screens/NfcWriterScreen';
import useTheme from '../../hooks/useTheme';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { t } = useTranslation('navigation');
  const theme = useTheme();

  return (
    <BottomTab.Navigator
      initialRouteName="NfcReader"
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
      }}
    >
      <BottomTab.Screen
        name="NfcReader"
        component={NfcReaderScreen}
        options={{
          title: t('nfcReader'),
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="NfcWriter"
        component={NfcWriterScreen}
        options={{
          title: t('nfcWriter'),
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

export default memo(BottomTabNavigator);
