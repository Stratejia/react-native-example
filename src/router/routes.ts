import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types/navigation';

const routes: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          CatFacts: {
            screens: {
              CatFacts: 'catFacts',
            },
          },
          About: {
            screens: {
              About: 'about',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};

export default routes;
