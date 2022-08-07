import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ScreenTitle from '../../../components/typography/ScreenTitle';
import Screen from '../../../components/layouts/Screen';
import Divider from '../../../components/layouts/Divider';
import About from '../components/About';

function AboutScreen() {
  const { t } = useTranslation('about');

  return (
    <Screen>
      <ScreenTitle>{t('about')}</ScreenTitle>
      <Divider />
      <About />
    </Screen>
  );
}

export default memo(AboutScreen);
