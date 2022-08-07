import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ScreenTitle from '../../../components/typography/ScreenTitle';
import CatFacts from '../components/CatFacts';
import Divider from '../../../components/layouts/Divider';
import Screen from '../../../components/layouts/Screen';

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
