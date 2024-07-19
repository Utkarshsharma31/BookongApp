import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NativeScreenNavigationContainer } from 'react-native-screens';

import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Components/HomeScreen';
import Login from '../Components/Login';
import Register from '../Components/Register';
import HomePage from '../Components/HomePage';
import AppStack from './AppStack';


const RootStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView> 
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="app" component={AppStack}
        options={{ headerShown: false }} 
         />
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>  )
}

export default RootStack