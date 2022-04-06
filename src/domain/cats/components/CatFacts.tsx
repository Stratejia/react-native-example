import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { Body1 } from '../../../components/typography';
import getRandomCatFacts from '../api/getRandomCatFacts';
import { Card, CardContent } from '../../../components/surfaces';
import CatFactList from './CatFactList';

function CatFacts() {
  const { data, isLoading, error } = useQuery('catFacts', getRandomCatFacts);

  // TODO: Remove console log
  console.log(data);

  // TODO: Enhance error handling
  return (
    <Card>
      <CardContent>
        {isLoading && <ActivityIndicator />}
        {error && <Body1>{`ERROR: ${error}`}</Body1>}
        {data && <CatFactList catFacts={data} />}
      </CardContent>
    </Card>
  );
}

export default memo(CatFacts);
