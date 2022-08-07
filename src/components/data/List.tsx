import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import spacing from 'styles/spacing';

const List = styled(FlatList)`
  padding: ${spacing.xs} 0;
`;

export default List;
