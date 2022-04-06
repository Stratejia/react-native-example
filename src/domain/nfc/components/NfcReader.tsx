import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { View } from '../../../components/layouts';
import { Text } from '../../../components/typography';
import readNdef from '../utils/readNdef';

function NfcReader() {
  const { t } = useTranslation('nfc');
  const { data, isLoading, error } = useQuery('ndef', readNdef, {
    retry: true,
  });

  return (
    <Wrapper>
      <Text>{t('scanningATag')}</Text>
      {isLoading && <ActivityIndicator />}
      {error && <Text>{`ERROR: ${error}`}</Text>}
      {data && <Text>{t('readTag', { tag: data })}</Text>}
    </Wrapper>
  );
}

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default memo(NfcReader);
