import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from './Main';


const AppDrawer = () => {
    const Logout = ({navigation})=>{
        navigation.navigate('Home');
    };
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Main} options={{ headerShown: true }} />
            <Drawer.Screen name='logout' component={Logout} options={{ headerShown: true }} />
        </Drawer.Navigator>
    )
}

export default AppDrawer