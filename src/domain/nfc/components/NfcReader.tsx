import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { View } from '../../../components/layouts';
import { Text } from '../../../components/typography';
import readNdef from '../utils/readNdef';

function NfcReader() {
  const { t } = useTranslation('nfc');
  const { data, isLoading, error } = useQuery('ndef', readNdef, {
    retry: true,
  });

  return (
    <View style={styles.wrapper}>
      <Text>{t('scanningATag')}</Text>
      {isLoading ? <ActivityIndicator /> : null}
      {error ? <Text>{`ERROR: ${error}`}</Text> : null}
      {data ? <Text>{t('readTag', { tag: data })}</Text> : null}
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
