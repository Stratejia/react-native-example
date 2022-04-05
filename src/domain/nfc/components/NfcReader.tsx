import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from 'react-query';
import { View } from '../../../components/layouts';
import { Text } from '../../../components/typography';
import readNdef from '../utils/readNdef';

function NfcReader() {
  const { data, isLoading, error } = useQuery('ndef', readNdef, {
    retry: true,
  });

  return (
    <View style={styles.wrapper}>
      <Text>Scanning a tag...</Text>
      {isLoading ? <ActivityIndicator /> : null}
      {error ? <Text>{`ERROR: ${error}`}</Text> : null}
      {data ? <Text>Read tag: {data}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NfcReader;
