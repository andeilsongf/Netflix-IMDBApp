import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  width: ${RFValue(300)}px;
  flex-direction: column;
  margin-bottom: ${RFValue(62)}px;
`;

export const Cover = styled.Image`
  width: ${RFValue(100)}%;
  height: ${RFValue(165)}px;

  margin-bottom: ${RFValue(20)}px;

`;

export const Wrapper = styled.View`
  width: 100%;
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


export const Footer = styled.View`
  flex-basis: 100%;
`;

export const Description = styled.Text.attrs({

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