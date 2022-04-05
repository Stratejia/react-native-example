import React from 'react';
import { StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { View } from '../../../components/layouts';
import { Text } from '../../../components/typography';
import NfcReader from '../components/NfcReader';

function NfcReaderScreen() {
  const { t } = useTranslation('nfc');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('readNfc')}</Text>
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
