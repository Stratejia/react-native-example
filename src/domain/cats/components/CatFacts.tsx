import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import styled from 'styled-components/native';
import { View } from '../../../components/layouts';
import { Text } from '../../../components/typography';
import getRandomCatFacts from '../api/getRandomCatFacts';
import { List, ListItem, ListItemText } from '../../../components/data';

function CatFacts() {
  const { data, isLoading, error } = useQuery('catFacts', getRandomCatFacts);

  console.log(data);

  // TODO: Display correctly cat facts
  // TODO: Enhance error handling
  return (
    <Wrapper>
      {isLoading && <ActivityIndicator />}
      {error && <Text>{`ERROR: ${error}`}</Text>}
      {data && (
        <List
          data={data}
          renderItem={({ item }) => (
            <ListItem>
              <ListItemText>
                <Text>{item.text}</Text>
              </ListItemText>
            </ListItem>
          )}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default memo(CatFacts);
