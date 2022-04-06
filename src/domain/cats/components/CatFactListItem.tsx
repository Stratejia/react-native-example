import React, { memo } from 'react';
import { Text } from '../../../components/typography';
import { ListItem, ListItemText } from '../../../components/data';
import { AnimalFact } from '../../../types/cats';

type Props = {
  catFact: AnimalFact;
};

function CatFactListItem({ catFact }: Props) {
  // TODO: Display correctly cat facts
  return (
    <ListItem>
      <ListItemText>
        <Text>{catFact.text}</Text>
      </ListItemText>
    </ListItem>
  );
}

export default memo(CatFactListItem);
