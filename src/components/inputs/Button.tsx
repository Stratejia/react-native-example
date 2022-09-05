import React from 'react';
import type { ButtonProps } from 'react-native';
import { Button as RNButton } from 'react-native';
import styled, { css } from 'styled-components/native';
import spacing from '../../styles/spacing';
import fonts from '../../styles/fonts';
import type { Theme } from '../../styles/theme';

type Variant = 'contained' | 'outlined' | 'text';

type Props = {
  readonly variant?: Variant;
} & ButtonProps;

function Button({ variant = 'contained', ...otherProps }: Props) {
  return <StyledButton variant={variant} {...otherProps} />;
}

const StyledButtonText = `
    font-family: sans-serif;
    font-weight: ${fonts.weights.regular};
    font-size: ${fonts.sizes.s};
    text-transform: uppercase;
    line-height: 1.75;
`;

const variantToGetStyle: Record<Variant, (theme: Theme) => string> = {
  contained: theme => `
    color: #fff;
    background-color: ${theme.tint};
  `,
  outlined: theme => `
    border: 2px;
    color: ${theme.tint};
    background-color: ${theme.tint};
  `,
  text: theme => `
    color: ${theme.tint};
    background-color: transparent;
  `,
};

const StyledButton = styled(RNButton)<{ readonly variant: Variant }>(
  ({ variant, theme }) => css`
    ${StyledButtonText};
    display: flex;
    border-radius: ${spacing.xxs};
    cursor: pointer;
    padding: ${spacing.xxs} ${spacing.xs};
    outline: 0;
    border: 0;

    ${variantToGetStyle[variant](theme)}
  `,
);

export default Button;
