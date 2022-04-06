import React, { memo, useCallback } from 'react';
import { Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import { RootStackScreenProps } from '../../../types/navigation';
import { View } from '../../../components/layouts';
import { ScreenTitle } from '../../../components/typography';
import { spacing } from '../../../styles';

function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  const { t } = useTranslation();

  const handlePress = useCallback(() => navigation.replace('Root'), [navigation]);

  return (
    <Container>
      <ScreenTitle>{t('thisScreenDoesntExist')}</ScreenTitle>
      <Button onPress={handlePress} title={t('goToHomeScreen')} accessibilityLabel={t('goToHomeScreen')} />
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${spacing.m};
`;

export default memo(NotFoundScreen);
