import { View } from 'react-native';
import styled from 'styled-components/native';
import spacing from '../../styles/spacing';

const ListItem = styled(View)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  text-align: left;
  padding: ${spacing.xs} ${spacing.m};
`;

export default ListItem;
