import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import ScreenTitle from '../../../components/typography/ScreenTitle';
import Divider from '../../../components/layouts/Divider';
import Screen from '../../../components/layouts/Screen';
import CreateCatFact from '../components/CreateCatFact';

function CreateCatFactScreen() {
  const { t } = useTranslation('cats');

  return (
    <Screen>
      <ScreenTitle>{t('createCatFact')}</ScreenTitle>
      <Divider />
      <CreateCatFact />
    </Screen>
  );
}

export default memo(CreateCatFactScreen);
