import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import spacing from 'styles/spacing';

const Screen = styled(View)(
  ({ theme }) => css`
    background-color: ${theme.background};
    padding: ${spacing.l};
    flex: 1;
    align-items: center;
  `,
);

export default Screen;
