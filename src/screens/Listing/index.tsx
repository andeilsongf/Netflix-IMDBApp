import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  Wrapper,
} from './style';

interface MovieProps {
  genre: string;
  movie: MovieDTO;
}

import { Back } from '../../components/Back';
import { MovieDTO } from '../../dtos/MovieDTO';

import api from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';

import { CategoryCard } from '../../components/CategoryCard';

export function Listing({ route, navigation: { goBack } }) {

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);

  const { movie_category } = route.params;

  useEffect(() => {
    async function fetchMovies() {

      try {
        const response = await api.get('/movies', {
          params: {
            genre: movie_category,
          },
          
        });

        setMovies(response.data)

      } catch (error) {
        console.log(error);

      } finally {
        setLoading(false);
      }

    }

    fetchMovies();

  }, []);

  return (
    <Container>
      <Back onPress={() => goBack()} />
      <Wrapper>
        <FlatList
          style={{
            marginTop: 30
          }}
          alwaysBounceVertical={true}
          data={movies}
          maxToRenderPerBatch={2}
          key={(item) => item.name}
          renderItem={({ item }) =>
            <CategoryCard data={item} />
          }
        />
      </Wrapper>
    </Container>
  );
}