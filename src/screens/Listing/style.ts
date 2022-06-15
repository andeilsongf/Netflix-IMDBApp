import { RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
  align-items: center;
`;

export const Wrapper = styled.View`
  
`;

export const List = styled.FlatList`
  background-color: ${({theme}) => theme.colors.title};
  border-radius: ${RFValue(6)}px;
  height: ${RFValue(150)}px;
`;

export const Information = styled.View`
  /* padding: ${RFValue(16)}px; */
`;

export const Name = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;

  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary_700};

  margin-bottom: ${RFValue(8)}px;
  
`;

export const Footer = styled.View`
  flex-direction: row;
`;

export const Category = styled.Text`
  margin-right: ${RFValue(8)}px;

  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary_400};

`;

export const Rating = styled.Text`
  margin-right: ${RFValue(8)}px;

  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary_400};
`;

export const Year = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.primary_400};
`;
