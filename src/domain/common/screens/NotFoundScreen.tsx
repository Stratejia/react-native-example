import React, { memo, useCallback } from 'react';
import { Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import ScreenTitle from '../../../components/typography/ScreenTitle';
import Screen from '../../../components/layouts/Screen';
import type { RootStackScreenProps } from '../../../types/navigation';

function NotFoundScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  const { t } = useTranslation();

  const handlePress = useCallback(() => navigation.replace('Root'), [navigation]);

  return (
    <Screen>
      <ScreenTitle>{t('thisScreenDoesntExist')}</ScreenTitle>
      <Button onPress={handlePress} title={t('goToHomeScreen')} accessibilityLabel={t('goToHomeScreen')} />
    </Screen>
  );
}

export default memo(NotFoundScreen);
