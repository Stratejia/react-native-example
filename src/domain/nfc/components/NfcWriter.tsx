import React, { memo, useCallback, useState } from 'react';
import { ActivityIndicator, Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import styled from 'styled-components/native';
import { TextInput } from '../../../components/inputs';
import { View } from '../../../components/layouts';
import { Text } from '../../../components/typography';
import writeNdef from '../utils/writeNdef';

function NfcWriter() {
  const { t } = useTranslation('nfc');
  const { mutate, isLoading, error } = useMutation(writeNdef);
  const [text, onChangeText] = useState('');

  const handlePress = useCallback(() => {
    if (text && text !== '') {
      mutate(text);
    }
  }, [text, mutate]);

  return (
    <Wrapper>
      <TextInput onChangeText={onChangeText} value={text} />
      <Button onPress={handlePress} title={t('writeATag')} accessibilityLabel={t('writeATag')} />
      {isLoading ? <ActivityIndicator /> : null}
      {error ? <Text>{`ERROR: ${error}`}</Text> : null}
    </Wrapper>
  );
}

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default memo(NfcWriter);
