import React, { useMemo } from 'react';
import type { TextInputProps } from 'react-native';
import { TextInput as RNTextInput } from 'react-native';
import styled, { css } from 'styled-components/native';
import useThemeContext from '../../hooks/useThemeContext';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

type Props = TextInputProps;

function TextInput(props: Props) {
  const themeContext = useThemeContext();
  const borderColor = useMemo(() => colors[themeContext.mode].border, [themeContext]);

  return <StyledTextInput borderColor={borderColor} {...props} />;
}

const StyledTextInput = styled(RNTextInput)<{ readonly borderColor: string }>(
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
