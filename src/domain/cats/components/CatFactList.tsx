import React, { memo } from 'react';
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
      keyExtractor={item => item.createdAt}
      renderItem={({ item }) => <CatFactListItem catFact={item} />}
      ItemSeparatorComponent={() => <ListDivider />}
    />
  );
}

export default memo(CatFactList);
