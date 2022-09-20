import React, { forwardRef, useMemo } from 'react';
import type { TextInputProps } from 'react-native';
import { TextInput as RNTextInput } from 'react-native';
import styled, { css } from 'styled-components/native';
import useThemeContext from '../../hooks/useThemeContext';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';
import Caption from '../typography/Caption';

type Props = {
  readonly error?: string;
} & TextInputProps;

const TextInput = forwardRef(({ error, ...otherProps }: Props, ref) => {
  const themeContext = useThemeContext();
  const borderColor = useMemo(() => colors[themeContext.mode].border, [themeContext]);

  // TODO: Better error display
  return (
    <>
      <StyledTextInput {...otherProps} borderColor={borderColor} ref={ref} />
      {error && <Caption>{error}</Caption>}
    </>
  );
});

// TODO: Solve this FP-style?
// eslint-disable-next-line functional/immutable-data
TextInput.displayName = 'TextInput';

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
