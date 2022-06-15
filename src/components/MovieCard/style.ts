import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: ${RFValue(250)}px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  margin-right: ${RFValue(32)}px;
`;

export const Cover = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(165)}px;

  margin-bottom: ${RFValue(20)}px;

  align-self: flex-start;

  border-radius: ${RFValue(8)}px;
`;

export const Wrapper = styled.View`
  /* padding: 0 ${RFValue(16)}px; */
`;

export const Header = styled.View`
  flex-direction: column;
  align-items: flex-start;


  margin-bottom: ${RFValue(20)}px;
`;
  
export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_500};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(18)}px;
  

`;
  
export const Information = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.line};
  font-size: ${RFValue(12)}px;

`;


export const Footer = styled.View``;

export const Description = styled.Text.attrs({
  numberOfLines: 3,
})`
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.line};
  font-size: ${RFValue(12)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const Tags = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  margin-bottom: ${RFValue(8)}px;
`;  