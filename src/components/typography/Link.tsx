import styled, { css } from 'styled-components/native';
import Text from './Text';

const Link = styled(Text)(
  ({ theme }) => css`
    text-decoration: underline;
    text-decoration-color: ${theme.tint};
    color: ${theme.tint};
  `,
);

export default Link;
