import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Screen } from '../../../components/layouts';
import { ScreenTitle } from '../../../components/typography';
import CatFacts from '../components/CatFacts';

function CatFactsScreen() {
  const { t } = useTranslation('cats');

  return (
    <Screen>
      <ScreenTitle>{t('catFacts')}</ScreenTitle>
      <Divider />
      <CatFacts />
    </Screen>
  );
}

export default memo(CatFactsScreen);
