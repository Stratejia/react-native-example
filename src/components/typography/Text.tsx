import { Text as DefaultText } from 'react-native';
import styled, { css } from 'styled-components/native';

const Text = styled(DefaultText)(
  ({ theme }) => css`
    color: ${theme.text};
  `,
);

export default Text;
