import styled from 'styled-components/native';
import Typography from './Typography';
import { fonts } from '../../styles';

const ScreenTitle = styled(Typography)`
  font-size: ${fonts.sizes.l};
  font-weight: ${fonts.weights.bold};
`;

export default ScreenTitle;
