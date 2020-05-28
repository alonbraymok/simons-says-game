/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Game from './src/screens/game/game';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ResultsScreen from './src/screens/result/result';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Simons Says" component={Game} />
        <Stack.Screen name="Details" component={ResultsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
