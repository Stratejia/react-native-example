import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import getRandomCatFacts from '../api/getRandomCatFacts';
import { Card, CardContent } from '../../../components/surfaces';
import { Error } from '../../../components/feedback';
import { AnimalFact } from '../../../types/cats';
import CatFactList from './CatFactList';
import { useTranslation } from 'react-i18next';

function CatFacts() {
  const { t } = useTranslation('cats');
  const { data, isLoading, isError } = useQuery('catFacts', getRandomCatFacts);

  return (
    <Card>
      <CardContent>
        {isLoading && <ActivityIndicator />}
        {isError && <Error text={t('couldNotGetCatFacts')} />}
        {data && <CatFactList catFacts={data as AnimalFact[]} />}
      </CardContent>
    </Card>
  );
}

export default memo(CatFacts);
