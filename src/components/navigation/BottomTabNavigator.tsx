import React from 'react';
import { useTranslation } from 'react-i18next';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import useColorScheme from '../../hooks/useColorScheme';
import { RootTabParamList } from '../../types/navigation';
import { TabBarIcon } from '../icons';
import colors from '../../styles/colors';
import NfcReaderScreen from '../../domain/nfc/screens/NfcReaderScreen';
import NfcWriterScreen from '../../domain/nfc/screens/NfcWriterScreen';

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const { t } = useTranslation('navigation');
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="NfcReader"
      screenOptions={{
        tabBarActiveTintColor: colors[colorScheme].tint,
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

export default BottomTabNavigator;
