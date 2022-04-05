import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types/navigation';

const routes: LinkingOptions<RootStackParamList> = {
  // TODO: Replace deprecated makeUrl function
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          NfcReader: {
            screens: {
              NfcReader: 'nfcReader',
            },
          },
          NfcWriter: {
            screens: {
              NfcWriter: 'nfcWriter',
            },
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default routes;
