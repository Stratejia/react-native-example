import type { ReactNode } from 'react';
import React, { useMemo } from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import useThemeContext from '../../hooks/useThemeContext';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

type Props = {
  readonly children: ReactNode;
  readonly fullWidth?: boolean;
};

function Card({ children, fullWidth = false }: Props) {
  const themeContext = useThemeContext();
  const backgroundColor = useMemo(() => colors[themeContext.mode].surface, [themeContext]);
  const color = useMemo(() => colors[themeContext.mode].onSurface, [themeContext]);

  return (
    <StyledCard backgroundColor={backgroundColor} color={color} fullWidth={fullWidth}>
      {children}
    </StyledCard>
  );
}

const StyledCard = styled(View)<{
  readonly backgroundColor: string;
  readonly color: string;
  readonly fullWidth: boolean;
}>(
  ({ backgroundColor, color, fullWidth }) => css`
    background-color: ${backgroundColor};
    color: ${color};
    border-radius: ${spacing.xxs};
    display: flex;
    flex-direction: column;

    ${fullWidth &&
    css`
      width: 100%;
    `}
  `,
);

export default Card;
