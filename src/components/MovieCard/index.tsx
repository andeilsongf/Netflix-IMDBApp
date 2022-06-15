
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { MovieDTO } from '../../dtos/MovieDTO';

import {
  Container,
  Cover,
  Wrapper,
  Header,
  Title,
  Information,
  Footer,
  Description,
  Tags,
} from './style';

interface Props extends RectButtonProps {
  data: MovieDTO;
}

export function MovieCard({ data, ...rest }: Props) {

  return (
    <>
      <StatusBar style='light' />
      <Container {...rest}>
        <Cover
          source={{ uri: data.image_url}}
        />

        <Wrapper>
          <Header>
            <Title>{data.name}</Title>
            <Information>
              {data.year}   •   {data.rating}
            </Information>
          </Header>

          <Footer>
            <Description>
              {data.desc}
            </Description>
            <Tags>{data.genre.join(', ')}.</Tags>
          </Footer>
        </Wrapper>
      </Container>
    </>
  );
}