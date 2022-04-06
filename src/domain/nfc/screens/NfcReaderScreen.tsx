import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { View, Divider } from '../../../components/layouts';
import { ScreenTitle } from '../../../components/typography';
import NfcReader from '../components/NfcReader';

function NfcReaderScreen() {
  const { t } = useTranslation('nfc');

  return (
    <Container>
      <ScreenTitle>{t('readNfc')}</ScreenTitle>
      <Divider />
      <NfcReader />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default memo(NfcReaderScreen);
