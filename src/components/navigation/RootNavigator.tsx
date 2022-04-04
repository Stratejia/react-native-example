import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import BottomTabNavigator from './BottomTabNavigator';
import NotFoundScreen from '../../domain/common/screens/NotFoundScreen';
import ModalScreen from '../../domain/boilerplate/screens/ModalScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;
