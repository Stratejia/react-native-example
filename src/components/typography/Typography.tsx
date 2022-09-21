import { Text as RNText } from 'react-native';
import styled, { css } from 'styled-components/native';
import fonts from '../../styles/fonts';

const Typography = styled(RNText)(
  ({ theme }) => css`
    color: ${theme.text};
    font-size: ${fonts.sizes.s};
    font-weight: ${fonts.weights.medium};
    opacity: ${fonts.emphasis.high};
  `,
);

export default Typography;
