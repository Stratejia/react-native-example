import { StyleSheet } from 'react-native';
import { RootTabScreenProps } from '../../../types';
import { View } from '../../../components/layout';
import { Text } from '../../../components/typography';
import NfcReader from '../components/NfcReader';

function NfcReaderScreen({ navigation }: RootTabScreenProps<'NfcReader'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Read NFC</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <NfcReader />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

export default NfcReaderScreen;
