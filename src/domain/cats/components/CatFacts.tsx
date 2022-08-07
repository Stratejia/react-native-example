import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { useTranslation } from 'react-i18next';
import CatFactList from 'domain/cats/components/CatFactList';
import getRandomCatFacts from 'domain/cats/api/getRandomCatFacts';
import Card from 'components/surfaces/Card';
import CardContent from 'components/surfaces/CardContent';
import Error from 'components/feedback/Error';
import { AnimalFact } from 'types/cats';

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
