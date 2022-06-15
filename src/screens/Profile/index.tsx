import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import WebView from 'react-native-webview';
import { Back } from '../../components/Back';
import { MovieDTO } from '../../dtos/MovieDTO';

interface Params {
  movie: MovieDTO;
}

export function Profile({navigation: { goBack }}){

  const route = useRoute();
  const { movie } = route.params as Params;

  return (
    <>
      <Back onPress={() => goBack()} />
      <WebView source={{ uri: `https://imdb.com${movie.imdb_url}`}} />
    </>
  );
}