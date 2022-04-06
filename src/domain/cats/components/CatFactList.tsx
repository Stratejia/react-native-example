import React, { memo } from 'react';
import { View } from 'react-native';
import { List, ListDivider } from '../../../components/data';
import { AnimalFact } from '../../../types/cats';
import CatFactListItem from './CatFactListItem';

type Props = {
  catFacts: AnimalFact[];
};

function CatFactList({ catFacts }: Props) {
  // TODO: Find a way for typescript to realize this is an AnimalFact list
  return (
    <List
      data={catFacts}
      renderItem={({ item, index }) => (
        <View key={index}>
          <CatFactListItem key={index} catFact={item} />
          <ListDivider />
        </View>
      )}
    />
  );
}

export default memo(CatFactList);
