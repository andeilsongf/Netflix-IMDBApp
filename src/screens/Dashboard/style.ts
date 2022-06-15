import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import { MovieDTO } from '../../dtos/MovieDTO';

import { FlatList } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export const Container = styled.View`

`;

export const BackgroundImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
 
})`
  width: 100%;
  height: 100%;
  background-color: ${({theme}) => theme.colors.secondary};

`;

export const Wrapper = styled.View`
  padding: 0 ${RFValue(17)}px;
  flex-direction: column;

  justify-content: flex-end;
  padding-bottom: ${RFValue(30)}px;
  margin-top: ${RFValue(200)}px;

`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;

  z-index: 10000;
`;

export const PlayButton = styled(LinearGradient).attrs({
  colors: ['#D81F26', '#BA3595']
})`


  width: ${RFValue(68)}px;
  height: ${RFValue(68)}px;

  border-radius: ${RFValue(34)}px;

  justify-content: center;
  align-items: center;
  align-self: center;

  position: absolute;
  top: ${RFValue(15)}%;

`;

export const FeaturedWrapper = styled.View`
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};
  color: ${({theme}) => theme.colors.title};

  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(20)}px;

  margin-bottom: ${RFValue(15)}px;
`;

export const HighlightTitles = styled.ScrollView.attrs({

  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 0, paddingRight: 20 }

})`
    width: 100%;
    margin-bottom: ${RFValue(30)}px;
`;


export const Categories = styled(RectButton)`
  justify-content: center;
  align-items: center;

  margin-right: ${RFValue(16)}px;
`;

export const CategoryIcon = styled.Text`

  font-size: ${RFValue(32)}px;

`;
  
export const CategoriesWrapper = styled.View`
  
  width: ${RFValue(64)}px;
  height: ${RFValue(64)}px;

  font-size: 40px;

  background-color: ${({theme}) => theme.colors.primary};
  border-radius: ${RFValue(12)}px;
  margin-bottom: ${RFValue(8)}px;

  align-items: center;
  justify-content: center;

`;
  
export const Category = styled.Text`
  color: ${({theme}) => theme.colors.title};

  font-family: ${({theme}) => theme.fonts.primary_400};
`;

export const Image = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(150)}px;

  margin-right: ${RFValue(18)}px;
  
  border-radius: ${RFValue(8)}px;

`;


export const Favorites = styled.View`
  
`;

export const FavoritesWrapper = styled.View`
  flex-direction: column;
  justify-content: space-between;

`;

export const HeaderFavorites = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`;

export const All = styled.Text`
  font-family: ${({theme}) => theme.fonts.primary_700};

  color: ${({theme}) => theme.colors.main};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(12)}px;
  
`;

export const TopMovies = styled.View`
  
`;

export const TopWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;


export const MovieList = styled(FlatList as new () => FlatList<MovieDTO>).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`

`;