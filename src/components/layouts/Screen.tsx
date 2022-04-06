import styled from 'styled-components/native';
import View from './View';
import { spacing } from '../../styles';

const Screen = styled(View)`
  padding: ${spacing.l};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export default Screen;
