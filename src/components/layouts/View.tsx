import { View as DefaultView } from 'react-native';
import styled, { css } from 'styled-components/native';

// TODO: View probably shouldn't have a default background color
const View = styled(DefaultView)(
  ({ theme }) => css`
    background-color: ${theme.background};
  `,
);

export default View;
