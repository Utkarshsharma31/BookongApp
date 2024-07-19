import { StatusBar } from 'expo-status-bar';

import Register from './Components/Register';
import Login from './Components/Login';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Components/HomeScreen';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomePage from './Components/HomePage';
import RootStack from './Navigation/RootStack';

export default function App() {
  


  return (
    <RootStack/>
  );
}


