import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import { Text } from '../../../components/typography';
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
        {error && <Text>{`ERROR: ${error}`}</Text>}
        {data && <CatFactList catFacts={data} />}
      </CardContent>
    </Card>
  );
}

export default memo(CatFacts);
