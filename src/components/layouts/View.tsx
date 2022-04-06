import { View as DefaultView } from 'react-native';
import styled, { css } from 'styled-components/native';

const View = styled(DefaultView)(
  ({ theme }) => css`
    background-color: ${theme.background};
  `,
);

export default View;
