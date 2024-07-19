import { View, Text, Image } from "react-native";
import React from "react";
import HomePage from "../Components/HomePage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeScreenNavigationContainer } from "react-native-screens";
import Search from "../Components/TabComponents/Search";
import CreateMatch from "../Components/TabComponents/CreateMatch";
import Chat from "../Components/TabComponents/Chat";
import Profile from "../Components/TabComponents/Profile";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const MAin = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Homepage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <AntDesign name="home" size={30} color="black" />
            );
          },tabBarShowLabel:false
        }}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{ headerShown: false, tabBarIcon:()=>{
          return(
          <AntDesign name="search1" size={30} color="black" />
          )
        },tabBarShowLabel:false 
      }}
      />
      <Tab.Screen
        name="plus"
        component={CreateMatch}
        options={{ headerShown: false,
          tabBarIcon:()=>{
            return(
           <View style={{borderRadius:20, backgroundColor:'black', width:80,height:40 , alignItems:'center'}}>
            <Text style={{color:'white', fontSize:30}}>+</Text>
           </View>
            )
          },tabBarShowLabel:false
         }}
      />
      <Tab.Screen
        name="chat"
        component={Chat}
        options={{ headerShown: false ,
        tabBarIcon:()=>{
        return(
          <Ionicons name="chatbubble-outline" size={30} color="black" />
        )
      },tabBarShowLabel:false
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{ headerShown: false,
         tabBarIcon:()=>{ return(
<Ionicons name="person-outline" size={30} color="black" />
          )
        },tabBarShowLabel:false
         }}
      />
    </Tab.Navigator>
  );
};

export default MAin;
