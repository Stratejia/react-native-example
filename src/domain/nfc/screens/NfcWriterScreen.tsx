import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../../../components/layouts';
import { Text } from '../../../components/typography';
import NfcWriter from '../components/NfcWriter';

function NfcWriterScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write NFC</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <NfcWriter />
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

export default NfcWriterScreen;
