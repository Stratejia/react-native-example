import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { View } from '../../../components/layouts';
import { Text } from '../../../components/typography';

function About() {
  const { t } = useTranslation('about');

  // TODO: Implement about page
  return (
    <Wrapper>
      <Text>{t('about')}</Text>
    </Wrapper>
  );
}

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default memo(About);
