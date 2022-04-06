import React, { useMemo } from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { colors, spacing } from '../../styles';
import useThemeContext from '../../hooks/useThemeContext';

function Divider() {
  const themeContext = useThemeContext();
  const backgroundColor = useMemo(() => colors[themeContext.mode].divider, [themeContext]);

  return <StyledDivider backgroundColor={backgroundColor} />;
}

const StyledDivider = styled(View)<{ backgroundColor: string }>(
  ({ backgroundColor }) => css`
    background-color: ${backgroundColor};
    margin-top: ${spacing.l};
    margin-bottom: ${spacing.l};
    height: 1px;
    width: 80%;
  `,
);

export default Divider;
