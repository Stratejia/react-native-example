import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { RootStackParamList } from '../types/navigation';

const routes: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
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
      NotFound: '*',
    },
  },
};

export default routes;
