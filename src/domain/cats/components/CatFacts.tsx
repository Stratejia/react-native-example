import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import getRandomCatFacts from '../api/getRandomCatFacts';
import type { AnimalFact } from '../../../types/cats';
import CardContent from '../../../components/surfaces/CardContent';
import Card from '../../../components/surfaces/Card';
import Error from '../../../components/feedback/Error';
import CatFactList from './CatFactList';

function CatFacts() {
  const { t } = useTranslation('cats');
  const { data, isLoading, isError } = useQuery('catFacts', getRandomCatFacts);

  return (
    <Card>
      <CardContent>
        {isLoading && <ActivityIndicator />}
        {isError && <Error text={t('couldNotGetCatFacts')} />}
        {data && <CatFactList catFacts={data as readonly AnimalFact[]} />}
      </CardContent>
    </Card>
  );
}

export default memo(CatFacts);
