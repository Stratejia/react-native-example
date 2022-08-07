import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

declare type RootStackParamList = {
  readonly Root: NavigatorScreenParams<RootTabParamList> | undefined;
  readonly NotFound: undefined;
};

declare type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;

declare type RootTabParamList = {
  readonly CatFacts: undefined;
  readonly About: undefined;
};

declare type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;

export { RootStackParamList, RootStackScreenProps, RootTabParamList, RootTabScreenProps };
