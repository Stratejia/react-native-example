import React, { memo, useCallback } from 'react';
import { Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RootStackScreenProps } from '../../../types/navigation';
import { Screen } from '../../../components/layouts';
import { ScreenTitle } from '../../../components/typography';

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
