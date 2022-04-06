import styled, { css } from 'styled-components/native';
import Typography from './Typography';

const Link = styled(Typography)(
  ({ theme }) => css`
    text-decoration: underline;
    text-decoration-color: ${theme.tint};
    color: ${theme.tint};
  `,
);

export default Link;
