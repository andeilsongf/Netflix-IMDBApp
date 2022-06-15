import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

import { RectButton } from 'react-native-gesture-handler';



export const Container = styled.View`
  flex: 1;
  background: #171717;
`;


export const Trailer = styled.View`
`;

export const Preview = styled.Image.attrs({
  resizeMode: "contain",
  width: RFValue(100),
  height: RFValue(100),
})`
  width: 100%;
  height: ${RFValue(385)}px;
  
  margin-bottom: ${RFValue(24)}px;
`;

export const Wrapper = styled.View`
  padding: 0 ${RFValue(16)}px;
`;
  
export const Name = styled.Text`
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(24)}px;

  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.primary_700};
  margin-bottom: ${RFValue(12)}px;
`;
  
export const Details = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12)}px;

  color: ${({theme}) => theme.colors.line};
  font-family: ${({theme}) => theme.fonts.primary_400};
  margin-bottom: ${RFValue(20)}px;
`;


export const ImdbWrapper = styled(RectButton)`
  width: 100%;
  height: ${RFValue(40)}px;

  background-color: ${({theme}) => theme.colors.main};
  border-radius: ${RFValue(8)}px;

  align-items: center;
  justify-content: center;

  margin-bottom: ${RFValue(20)}px;

  flex-direction: row;
`;
  
export const SeeScore = styled.Text`
  margin-left: ${RFValue(12)}px;

  font-family: ${({theme}) => theme.fonts.primary_400};
  color: ${({theme}) => theme.colors.title};

  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14)}px;
`;

export const PlayWrapper = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.title};
  
  width: 100%;
  height: ${RFValue(40)}px;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(8)}px;

  margin-top: ${RFValue(20)}px;
`;

export const Play = styled.Button.attrs({
  color: theme.colors.secondary,
})`
  
  font-family: ${({theme}) => theme.fonts.primary_700};

 
`;

export const PlayArea = styled.Text`
  margin-left: ${RFValue(10)}px;

  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12)}px;

  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.primary_500};


`;

export const About = styled.View`
  flex-direction: column;
`;

export const Movie = styled.Text`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(16)}px;

  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.primary_700};
  margin-bottom: ${RFValue(12)}px;
`;

export const Description = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(18)}px;

  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.primary_400};
  margin-bottom: ${RFValue(12)}px;
`;

export const Genre = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(18)}px;

  color: ${({theme}) => theme.colors.line};
  font-family: ${({theme}) => theme.fonts.primary_400};

  margin-bottom: ${RFValue(6)}px;
`;

export const Tags = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(18)}px;

  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.primary_400};

`;

export const Social = styled.View`
  margin-top: ${RFValue(25)}px;
`;

export const SocialWrapper = styled.View`
  flex-direction: row;
  
  justify-content: space-around;
  
`;

export const SocialContainer = styled(RectButton)`
  align-items: center;
  justify-content: center;
`;

export const SocialDetail = styled.Text`
  margin-top: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.primary_400};
  
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12)}px;
`;


export const Relation = styled.View`
  margin-top: ${RFValue(32)}px;
  
 
`;

export const Trailers = styled.Text`

  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14)}px;

  font-family: ${({theme}) => theme.fonts.primary_700};
  color: ${({theme}) => theme.colors.title};

`;

export const TrailersWrapper = styled.View`

`;


export const Cast = styled.Text`

  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(14)}px;

  font-family: ${({theme}) => theme.fonts.primary_700};
  color: ${({theme}) => theme.colors.title};

  margin-bottom: ${RFValue(8)}px;

`;

export const MovieCast = styled.Text`
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(18)}px;

  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.primary_400};
  margin-bottom: ${RFValue(12)}px;
`;

export const TrailersContainer = styled.View`
  margin-bottom: ${RFValue(24)}px;
`;

export const CastContainer = styled.View`
`;