import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { View, Divider } from '../../../components/layouts';
import { ScreenTitle } from '../../../components/typography';
import CatFacts from '../components/CatFacts';

function CatFactsScreen() {
  const { t } = useTranslation('cats');

  return (
    <Container>
      <ScreenTitle>{t('catFacts')}</ScreenTitle>
      <Divider />
      <CatFacts />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default memo(CatFactsScreen);
