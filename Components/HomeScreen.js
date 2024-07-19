import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useRef,useCallback } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => {
    const bottomSheetRef = useRef();

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
      }, []);
  return (
    <View style={styles.homescreen}>
      <Text style={styles.homeText}>Booking App</Text>
      <BottomSheet   ref={bottomSheetRef}
      snapPoints={['25%']}
       onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('login')}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('signup')}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    homescreen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#70737c'
    },
    homeText:{
        fontSize:60,

    },
    button: {
        height: 70,
        borderWidth: 2,
        backgroundColor: "#000",
        color:"white",
        paddingHorizontal: 10,
        width:150,
        marginLeft:30,
        marginRight:12,
        marginTop:70,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight:'600'
    
      },
      contentContainer:{
        flex:1,
        flexDirection:'row'
      }
})