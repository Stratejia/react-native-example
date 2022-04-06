import React, { memo } from 'react';
import { List, ListDivider } from '../../../components/data';
import { AnimalFact } from '../../../types/cats';
import CatFactListItem from './CatFactListItem';

type Props = {
  catFacts: AnimalFact[];
};

function CatFactList({ catFacts }: Props) {
  return (
    <List<React.ElementType>
      data={catFacts}
      keyExtractor={(item: AnimalFact) => item.createdAt}
      renderItem={({ item }: { item: AnimalFact }) => <CatFactListItem catFact={item} />}
      ItemSeparatorComponent={() => <ListDivider />}
    />
  );
}

export default memo(CatFactList);
