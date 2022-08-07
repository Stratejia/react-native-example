import React, { useMemo } from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import useThemeContext from '../../hooks/useThemeContext';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

function Divider() {
  const themeContext = useThemeContext();
  const backgroundColor = useMemo(() => colors[themeContext.mode].border, [themeContext]);

  return <StyledDivider backgroundColor={backgroundColor} />;
}

const StyledDivider = styled(View)<{ readonly backgroundColor: string }>(
  ({ backgroundColor }) => css`
    background-color: ${backgroundColor};
    margin-top: ${spacing.l};
    margin-bottom: ${spacing.l};
    height: 1px;
    width: 80%;
  `,
);

export default Divider;
