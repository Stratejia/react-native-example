import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { View, Divider } from '../../../components/layouts';
import { ScreenTitle } from '../../../components/typography';
import About from '../components/About';

function AboutScreen() {
  const { t } = useTranslation('about');

  return (
    <Container>
      <ScreenTitle>{t('about')}</ScreenTitle>
      <Divider />
      <About />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default memo(AboutScreen);
