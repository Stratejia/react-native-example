import React, { useMemo } from 'react';
import { View } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Severity } from '../../types/feedback';
import useThemeContext from '../../hooks/useThemeContext';
import colors from '../../styles/colors';
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '../icons/faIcons';
import spacing from '../../styles/spacing';
import Body1 from '../typography/Body1';

type AlertIconProps = {
  readonly severity: Severity;
};

function AlertIcon({ severity }: AlertIconProps) {
  const themeContext = useThemeContext();
  const color = useMemo(() => colors[themeContext.mode].variants[severity].main, [severity, themeContext]);

  switch (severity) {
    default:
    case 'success':
      return <SuccessIcon color={color} />;
    case 'info':
      return <InfoIcon color={color} />;
    case 'warning':
      return <WarningIcon color={color} />;
    case 'error':
      return <ErrorIcon color={color} />;
  }
}

type Props = {
  readonly severity: Severity;
  readonly text: string;
};

function Alert({ severity, text }: Props) {
  const themeContext = useThemeContext();
  const backgroundColor = useMemo(
    () => colors[themeContext.mode].variants[severity].background,
    [severity, themeContext],
  );
  const textColor = useMemo(() => colors[themeContext.mode].variants[severity].onBackground, [severity, themeContext]);

  return (
    <AlertContainer backgroundColor={backgroundColor}>
      <AlertIcon severity={severity} />
      <AlertText color={textColor}>{text}</AlertText>
    </AlertContainer>
  );
}

const AlertContainer = styled(View)<{ readonly backgroundColor: string }>(
  ({ backgroundColor }) => css`
    display: flex;
    align-items: center;
    gap: ${spacing.s};
    padding: ${spacing.xs} ${spacing.m};
    background-color: ${backgroundColor};
    border-radius: ${spacing.xxs};
  `,
);

const AlertText = styled(Body1)<{ readonly color: string }>(
  ({ color }) => css`
    color: ${color};
  `,
);

export default Alert;
