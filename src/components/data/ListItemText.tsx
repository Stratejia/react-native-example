import { View } from 'react-native';
import styled from 'styled-components/native';
import spacing from '../../styles/spacing';

// TODO: 'gap' does not exist in react-native
// gap: ${spacing.xxs};

const ListItemText = styled(View)`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing.xxs};
  margin-bottom: ${spacing.xxs};
`;

export default ListItemText;
