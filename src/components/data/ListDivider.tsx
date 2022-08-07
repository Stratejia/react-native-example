import React, { useMemo } from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import useThemeContext from '../../hooks/useThemeContext';
import colors from '../../styles/colors';

function ListDivider() {
  const themeContext = useThemeContext();
  const borderColor = useMemo(() => colors[themeContext.mode].border, [themeContext]);

  return <StyledListDivider borderColor={borderColor} />;
}

const StyledListDivider = styled(View)<{ readonly borderColor: string }>(
  ({ borderColor }) => css`
    border-width: 0;
    border-color: ${borderColor};
    border-style: solid;
    border-bottom-width: thin;
  `,
);

export default ListDivider;
