import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import About from 'domain/about/components/About';
import Divider from 'components/layouts/Divider';
import Screen from 'components/layouts/Screen';
import ScreenTitle from 'components/typography/ScreenTitle';

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
