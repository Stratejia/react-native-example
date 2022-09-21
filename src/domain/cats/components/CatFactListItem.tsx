import React, { memo } from 'react';
import ListItem from '../../../components/data/ListItem';
import Date from '../../../components/data/Date';
import ListItemText from '../../../components/data/ListItemText';
import Body1 from '../../../components/typography/Body1';
import Caption from '../../../components/typography/Caption';
import type { CatFact } from '../schemas/catFacts';

type Props = {
  readonly catFact: CatFact;
};

function CatFactListItem({ catFact }: Props) {
  // TODO: No, I shouldn't use br
  return (
    <ListItem>
      <ListItemText>
        <Body1>{catFact.text}</Body1>
        <br />
        <Caption>
          {catFact.username} - <Date>{catFact.createdAt}</Date>
        </Caption>
      </ListItemText>
    </ListItem>
  );
}

export default memo(CatFactListItem);
