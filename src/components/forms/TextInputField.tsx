import React, { forwardRef } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import Caption from '../typography/Caption';
import type { TextInputProps } from '../inputs/TextInput';
import TextInput from '../inputs/TextInput';
import spacing from '../../styles/spacing';

type Props = {
  readonly error?: string;
} & TextInputProps;

const TextInputField = forwardRef(({ error, ...otherProps }: Props, ref) => {
  // TODO: Translate errors -> https://github.com/react-hook-form/react-hook-form/discussions/2632
  return (
    <Wrapper>
      <StyledTextInput {...otherProps} ref={ref} />
      <ErrorWrapper>{error && <Caption>{error}</Caption>}</ErrorWrapper>
    </Wrapper>
  );
});

const Wrapper = styled(View)`
  margin: ${spacing.s};
`;

// TODO: Text wrapping is hidden
const ErrorWrapper = styled(View)`
  min-height: ${spacing.s};
`;

const StyledTextInput = styled(TextInput)`
  margin: 0;
`;

// TODO: Solve this FP-style?
// eslint-disable-next-line functional/immutable-data
TextInputField.displayName = 'TextInputField';

export default TextInputField;
