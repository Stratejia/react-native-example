import React, { memo } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import Alert from './Alert';

type Props = {
  text: string;
};

function Error({ text }: Props) {
  return (
    <AlertContainer>
      <Alert severity="error" text={text} />
    </AlertContainer>
  );
}

const AlertContainer = styled(View)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default memo(Error);
