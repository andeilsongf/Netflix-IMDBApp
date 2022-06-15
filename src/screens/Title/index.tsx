import React, { useEffect, useState } from 'react';

import { FontAwesome5, AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { View } from 'react-native';

import * as Sharing from 'expo-sharing';

import {
  Container,
  Trailer,
  Preview,
  Wrapper,
  Name,
  Details,
  ImdbWrapper,
  SeeScore,
  PlayWrapper,
  Play,
  About,
  Movie,
  Description,
  Genre,
  Tags,
  Social,
  SocialWrapper,
  SocialDetail,
  SocialContainer,
  Relation,
  Trailers,
  Cast,
  TrailersContainer,
  TrailersWrapper,
  CastContainer,
  MovieCast
} from './style';

interface Params {
  movie: MovieDTO;
}


import { ScrollView } from 'react-native-gesture-handler';
import { Back } from '../../components/Back';
import { MovieDTO } from '../../dtos/MovieDTO';


export function Title({ navigation: { goBack } }) {

  const theme = useTheme();

  const route = useRoute();
  const { movie } = route.params as Params;

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const navigation = useNavigation();

  const [state, setState] = useState();

  function handleProfile(movie: MovieDTO) {
    navigation.navigate("Profile", { movie });
  }

  return (
    <>
      <Container>
        <Back onPress={() => goBack()} />
        <ScrollView>
          <Trailer>
            <Preview source={{
              uri: movie.image_url
            }} />
          </Trailer>

          <Wrapper>
            <Name>{movie.name}</Name>
            <Details>{movie.year}  •  {movie.rating}</Details>

            <ImdbWrapper onPress={() => {
              navigation.navigate('Profile', {
                movie
              })
            }}>

              <AntDesign name="link" size={20} color={theme.colors.text} />
              <SeeScore>See IMDB information</SeeScore>
            </ImdbWrapper>

            <About>
              <Movie>Details</Movie>
              <Description>{movie.desc}</Description>
              <Genre>Genres: </Genre>
              <Tags>{movie.genre.join(', ')}</Tags>
            </About>

            <Relation>
              <TrailersContainer>
                <Trailers>Trailers</Trailers>
                <TrailersWrapper>
                  <View>

                    <PlayWrapper onPress={() => {
                      navigation.navigate('Profile', {
                        movie
                      })
                    }} >
                      <Play
                        title='See Trailer'
                      />
                    </PlayWrapper>
                  </View>
                </TrailersWrapper>
              </TrailersContainer>
              <CastContainer>
                <Cast>Cast</Cast>
                <MovieCast> {movie.actors.join(', ')} </MovieCast>
              </CastContainer>
            </Relation>
          </Wrapper>
        </ScrollView>
      </Container>
    </>
  );
}