import React, { memo } from 'react';
import { Body1, Caption } from '../../../components/typography';
import { Date, ListItem, ListItemText } from '../../../components/data';
import { AnimalFact } from '../../../types/cats';

type Props = {
  catFact: AnimalFact;
};

function CatFactListItem({ catFact }: Props) {
  return (
    <ListItem>
      <ListItemText>
        <Body1>{catFact.text}</Body1>
        <Caption>
          <Date>{catFact.createdAt}</Date>
        </Caption>
      </ListItemText>
    </ListItem>
  );
}

export default memo(CatFactListItem);
