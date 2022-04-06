import React, { useMemo } from 'react';
import styled, { css } from 'styled-components/native';
import { colors, spacing } from '../../styles';
import useThemeContext from '../../hooks/useThemeContext';
import View from './View';

function Divider() {
  const themeContext = useThemeContext();
  const backgroundColor = useMemo(() => colors[themeContext.mode].border, [themeContext]);

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
