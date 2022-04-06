import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Divider, Screen } from '../../../components/layouts';
import { ScreenTitle } from '../../../components/typography';
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
