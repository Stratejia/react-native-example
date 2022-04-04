import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import BottomTabNavigator from './BottomTabNavigator';
import NotFoundScreen from '../../domain/common/screens/NotFoundScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
