import styled from 'styled-components/native';
import Typography from './Typography';
import { fonts } from '../../styles';

const Caption = styled(Typography)`
  opacity: ${fonts.emphasis.medium};
`;

export default Caption;
