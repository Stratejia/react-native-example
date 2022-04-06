import React, { useMemo } from 'react';
import { TextInput as DefaultTextInput } from 'react-native';
import styled, { css } from 'styled-components/native';
import { colors, spacing } from '../../styles';
import useThemeContext from '../../hooks/useThemeContext';

function TextInput() {
  const themeContext = useThemeContext();
  const borderColor = useMemo(() => colors[themeContext.mode].border, [themeContext]);

  return <StyledTextInput borderColor={borderColor} />;
}

const StyledTextInput = styled(DefaultTextInput)<{ borderColor: string }>(
  ({ theme, borderColor }) => css`
    color: ${theme.text};
    height: ${spacing.input.height};
    min-width: ${spacing.input.minWidth};
    margin: ${spacing.s};
    border-color: ${borderColor};
    border-width: 1px;
    padding: ${spacing.s} ${spacing.xs};
  `,
);

export default TextInput;
