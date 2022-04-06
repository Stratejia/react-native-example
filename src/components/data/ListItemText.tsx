import { View } from 'react-native';
import styled from 'styled-components/native';
import { spacing } from '../../styles';

const ListItemText = styled(View)`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xxs};
  margin-top: ${spacing.xxs};
  margin-bottom: ${spacing.xxs};
`;

export default ListItemText;
