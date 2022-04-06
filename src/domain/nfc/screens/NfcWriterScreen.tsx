import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { Divider, View } from '../../../components/layouts';
import { ScreenTitle } from '../../../components/typography';
import NfcWriter from '../components/NfcWriter';

function NfcWriterScreen() {
  const { t } = useTranslation('nfc');

  return (
    <Container>
      <ScreenTitle>{t('writeNfc')}</ScreenTitle>
      <Divider />
      <NfcWriter />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default memo(NfcWriterScreen);
