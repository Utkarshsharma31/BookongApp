import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Components/Login';
import Register from '../Components/Register';
import HomePage from '../Components/HomePage';
import HomeScreen from '../Components/HomeScreen';
import AppDrawer from './AppDrawer';

const AppStack = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{ headerShown: false }}/>
         <Stack.Screen name="login" component={Login}/>
         <Stack.Screen name="signup" component={Register}/>
         <Stack.Screen name="appDrawer" component={AppDrawer}
         options={{ headerShown: false }}/>
      </Stack.Navigator>
  )
}

export default AppStack