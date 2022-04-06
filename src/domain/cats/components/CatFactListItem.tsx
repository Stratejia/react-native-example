import React, { memo } from 'react';
import { Body1, Caption } from '../../../components/typography';
import { ListItem, ListItemText } from '../../../components/data';
import { AnimalFact } from '../../../types/cats';

type Props = {
  catFact: AnimalFact;
};

function CatFactListItem({ catFact }: Props) {
  // TODO: Display date correctly
  // TODO: Display user name? (requires one more API call)
  return (
    <ListItem>
      <ListItemText>
        <Body1>{catFact.text}</Body1>
        <Caption>{`${catFact.createdAt} - ${catFact.user}`}</Caption>
      </ListItemText>
    </ListItem>
  );
}

export default memo(CatFactListItem);
