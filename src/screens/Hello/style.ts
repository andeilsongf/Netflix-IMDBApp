import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
  width: 100%;
  height: auto;
  
`;

export const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0 ${RFValue(24)}px;

  margin-bottom: ${RFValue(30)}px;

  /* background-color: ${({theme}) => theme.colors.secondary}; */
`;

export const Greetings = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  font-size: ${RFValue(20)}px;
  line-height: ${RFValue(32)}px;

  color: ${({theme}) => theme.colors.text};

`

export const Description = styled.Text`
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(23)}px;
  font-family: ${({theme}) => theme.fonts.primary_400};

  margin-top: ${RFValue(30)}px;
  margin-bottom: ${RFValue(30)}px;
  text-align: center;

  color: ${({theme}) => theme.colors.text};

`;

export const Register = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-size: ${RFValue(10)}px;
  line-height: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.primary_500};

  margin-top: ${RFValue(23)}px;
`;

export const LoginArea = styled.View`
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: ${RFValue(18)}px;
`;