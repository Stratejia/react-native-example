import React, { memo } from 'react';
import CatFactListItem from 'domain/cats/components/CatFactListItem';
import List from 'components/data/List';
import ListDivider from 'components/data/ListDivider';
import { AnimalFact } from 'types/cats';

type Props = {
  readonly catFacts: readonly AnimalFact[];
};

function CatFactList({ catFacts }: Props) {
  return (
    <List<React.ElementType>
      data={catFacts}
      keyExtractor={(item: AnimalFact) => item.createdAt}
      renderItem={({ item }: { readonly item: AnimalFact }) => <CatFactListItem catFact={item} />}
      ItemSeparatorComponent={() => <ListDivider />}
    />
  );
}

export default memo(CatFactList);
