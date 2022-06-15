import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components/native';

import Logo from '../../assets/images/logo.svg';
import BackgroundHello from '../../assets/images/BackgroundHello.png';

import { Button } from '../../components/Button';

import {
  Container,
  Wrapper,
  Greetings,
  Description,
  Register,
  LoginArea
} from './style';
import { StatusBar } from 'expo-status-bar';

export function Hello({ navigation }) {

  return (
    <>
      <StatusBar style='light' />
      <Container source={BackgroundHello} resizeMode="cover">
        <Wrapper>
          <Logo />
          <Greetings>Enjoy your Movies</Greetings>
          <Greetings>Watch Everywhere</Greetings>
          <Description>Stream unlimited movies and TV shows{`\n`}on your phone, tablet, laptop, and TV.</Description>

          <LoginArea>
          
          <Button
            onPress={() => navigation.navigate('Dashboard')}
            title="Try for now"
          />
          </LoginArea>

          <Register>No credit card required.</Register>

        </Wrapper>
      </Container>
    </>
  );
}