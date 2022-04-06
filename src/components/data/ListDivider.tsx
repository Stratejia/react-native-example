import React, { useMemo } from 'react';
import styled, { css } from 'styled-components/native';
import { View } from '../layouts';
import useThemeContext from '../../hooks/useThemeContext';
import { colors } from '../../styles';

function ListDivider() {
  const themeContext = useThemeContext();
  const borderColor = useMemo(() => colors[themeContext.mode].border, [themeContext]);

  return <StyledListDivider borderColor={borderColor} />;
}

const StyledListDivider = styled(View)<{ borderColor: string }>(
  ({ borderColor }) => css`
    background-color: transparent;
    border-width: 0;
    border-color: ${borderColor};
    border-style: solid;
    border-bottom-width: thin;
  `,
);

export default ListDivider;
