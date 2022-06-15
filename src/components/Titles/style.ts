import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Image = styled.Image`
   width: ${RFValue(100)}px;
  height: ${RFValue(150)}px;
`;