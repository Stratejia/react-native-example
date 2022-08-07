import React, { memo } from 'react';
import { AnimalFact } from '../../../types/cats';
import ListItem from '../../../components/data/ListItem';
import Date from '../../../components/data/Date';
import ListItemText from '../../../components/data/ListItemText';
import Body1 from '../../../components/typography/Body1';
import Caption from '../../../components/typography/Caption';

type Props = {
  readonly catFact: AnimalFact;
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
