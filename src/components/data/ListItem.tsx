import styled from 'styled-components/native';
import { View } from '../layouts';
import { spacing } from '../../styles';

const ListItem = styled(View)`
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  padding: ${spacing.xs} ${spacing.m};
`;

export default ListItem;
