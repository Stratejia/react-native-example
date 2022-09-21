import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
  readonly size?: number;
  readonly color?: string;
};

function CatIcon(props: Props) {
  return <FontAwesome5 name="cat" {...props} />;
}

function PlusIcon(props: Props) {
  return <FontAwesome5 name="plus" {...props} />;
}

function ErrorIcon(props: Props) {
  return <FontAwesome5 name="skull-crossbones" {...props} />;
}

function InfoIcon(props: Props) {
  return <FontAwesome5 name="circle-info" {...props} />;
}

function QuestionIcon(props: Props) {
  return <FontAwesome5 name="question" {...props} />;
}

function SuccessIcon(props: Props) {
  return <FontAwesome5 name="circle-check" {...props} />;
}

function WarningIcon(props: Props) {
  return <FontAwesome5 name="circle-exclamation" {...props} />;
}

export { CatIcon, PlusIcon, ErrorIcon, InfoIcon, QuestionIcon, SuccessIcon, WarningIcon };
