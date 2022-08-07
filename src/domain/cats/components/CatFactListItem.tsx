import React, { memo } from 'react';
import Body1 from 'components/typography/Body1';
import Caption from 'components/typography/Caption';
import Date from 'components/data/Date';
import ListItem from 'components/data/ListItem';
import ListItemText from 'components/data/ListItemText';
import { AnimalFact } from 'types/cats';

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
