import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Hello } from "../screens/Hello";
import { Dashboard } from "../screens/Dashboard";
import { Title } from "../screens/Title";
import { Profile } from "../screens/Profile";
import { Listing } from "../screens/Listing";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Hello" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Title" component={Title} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Listing" component={Listing} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;