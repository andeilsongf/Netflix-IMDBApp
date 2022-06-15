import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components'

import {
  Container,
  Title
} from './style';

interface Props {
  title: string;
  color?: string;

  style?: string;

  onPress: () => void;

}

export function Button({
  title,
  color,
  onPress
}: Props) {

  const theme = useTheme();

  return (
    <Container
      color={color ? color : theme.colors.main}
      onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
}