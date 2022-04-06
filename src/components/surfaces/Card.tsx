import React, { ReactNode, useMemo } from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import useThemeContext from '../../hooks/useThemeContext';
import { colors, spacing } from '../../styles';

type Props = {
  children: ReactNode;
};

function Card({ children }: Props) {
  const themeContext = useThemeContext();
  const backgroundColor = useMemo(() => colors[themeContext.mode].surface, [themeContext]);
  const color = useMemo(() => colors[themeContext.mode].onSurface, [themeContext]);

  return (
    <StyledCard backgroundColor={backgroundColor} color={color}>
      {children}
    </StyledCard>
  );
}

const StyledCard = styled(View)<{ backgroundColor: string; color: string }>(
  ({ backgroundColor, color }) => css`
    background-color: ${backgroundColor};
    color: ${color};
    border-radius: ${spacing.xxs};
    display: flex;
    flex-direction: column;
  `,
);

export default Card;
