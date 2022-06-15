import React from 'react';

import { AntDesign } from '@expo/vector-icons';

import {
  Container
} from './style';


import { useTheme } from 'styled-components';

export function Back({...rest}) {

  const theme = useTheme();

  return (
    <Container {...rest}>
      <AntDesign name="arrowleft" size={32} color={theme.colors.title} />
    </Container>
  );
}