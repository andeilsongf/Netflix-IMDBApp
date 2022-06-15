import React, { useState, useEffect } from 'react';

import Logo from '../../assets/images/logo.svg';
import FeaturedImage from '../../assets/images/Featured.png';
import FeaturedTitle from '../../assets/images/featured-1.png';

import { useTheme } from 'styled-components/native';

import { Ionicons } from '@expo/vector-icons';

import { MovieDTO } from '../../dtos/MovieDTO';

import { Load } from '../../components/Load';

import {
  BackgroundImage,
  Wrapper,
  Header,
  PlayButton,
  FeaturedWrapper,
  Title,
  HighlightTitles,
  Categories,
  CategoriesWrapper,
  CategoryIcon,
  Category,
  Favorites,
  FavoritesWrapper,
  All,
  Image,
  MovieList,
  HeaderFavorites
} from './style';

import { StatusBar } from 'expo-status-bar';

import { MovieCard } from '../../components/MovieCard';

import api from '../../services/api';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export function Dashboard() {

  const [movies, setMovies] = useState<MovieDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const theme = useTheme();

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("/movies");
        setMovies(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  });

  function handleMovieDetails(movie: MovieDTO) {
    navigation.navigate("Title", { movie });
  }

  return (
    <>
      {loading ? <Load /> :
        <ScrollView>
          <StatusBar style="light" />
          <BackgroundImage source={FeaturedImage}>
            <Header>
              <Logo width={100} />
            </Header>

            <Wrapper>

              <FeaturedWrapper>

                <Title>Category</Title>
                <HighlightTitles>

                  <Categories onPress={() => {
                      navigation.navigate('Listing', {
                        movie_category: 'Romance',
                      });
                    }}>
                    <CategoriesWrapper>
                      <CategoryIcon>🥹</CategoryIcon>
                    </CategoriesWrapper>

                    <Category>Romance</Category>
                  </Categories>

                  <Categories onPress={() => {
                      navigation.navigate('Listing', {
                        movie_category: 'Comedy',
                      });
                    }}>
                    <CategoriesWrapper>
                      <CategoryIcon>🤣</CategoryIcon>
                    </CategoriesWrapper>
                    <Category>Comedy</Category>
                  </Categories>

                  <Categories onPress={() => {
                      navigation.navigate('Listing', {
                        movie_category: 'Horror',
                      });
                    }}>
                    <CategoriesWrapper>
                      <CategoryIcon>😱</CategoryIcon>
                    </CategoriesWrapper>
                    <Category>Horror</Category>
                  </Categories>

                  <Categories onPress={() => {
                      navigation.navigate('Listing', {
                        movie_category: 'Action',
                      });
                    }}>
                    <CategoriesWrapper>
                      <CategoryIcon>😎</CategoryIcon>
                    </CategoriesWrapper>
                    <Category>Action</Category>
                  </Categories>

                  <Categories onPress={() => {
                      navigation.navigate('Listing', {
                        movie_category: 'Mystery',
                      });
                    }}>
                    <CategoriesWrapper>
                      <CategoryIcon>🧐</CategoryIcon>
                    </CategoriesWrapper>
                    <Category>Mystery</Category>
                  </Categories>

                </HighlightTitles>
                <Favorites>
                  <FavoritesWrapper>
                    <HeaderFavorites>
                      <Title>You need to watch</Title>

                      <MovieList
                        data={movies}
                        maxToRenderPerBatch={2}
                        key={(item) => item.name}
                        renderItem={({ item }) =>
                          <MovieCard data={item} onPress={() => handleMovieDetails(item)} />
                        }
                      />

                    </HeaderFavorites>

                  </FavoritesWrapper>

                </Favorites>
              </FeaturedWrapper>
            </Wrapper>
          </BackgroundImage>
        </ScrollView>
      }
    </>
  );
}