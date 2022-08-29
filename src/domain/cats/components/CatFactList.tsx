import React, { memo } from 'react';
import List from '../../../components/data/List';
import ListDivider from '../../../components/data/ListDivider';
import type { CatFact } from '../schemas/facts';
import CatFactListItem from './CatFactListItem';

type Props = {
  readonly catFacts: readonly CatFact[];
};

function CatFactList({ catFacts }: Props) {
  return (
    <List<ReturnType<typeof CatFactListItem>>
      data={catFacts}
      keyExtractor={(item: CatFact) => item.createdAt}
      renderItem={({ item }: { readonly item: CatFact }) => <CatFactListItem catFact={item} />}
      ItemSeparatorComponent={() => <ListDivider />}
    />
  );
}

export default memo(CatFactList);
