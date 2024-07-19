import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CheckBox from 'react-native-check-box';
export default function CreateMatch()  {
    function ischecked(){
        console.log("checked!!!!!!!!!")
    }
    return (
        <View style={styles.container}>
          <View style={styles.Register}>
          {/* <Text style={styles.heading}>Register</Text> */}
          <TextInput 
          style={styles.inputText}
          placeholder='Sport'
          />
          <TextInput 
          style={styles.inputText}
          placeholder='Court'
          />
                <TextInput 
          style={styles.inputText}
          placeholder='Date'

          />
                <TextInput 
          style={styles.inputText}
          placeholder='Time'

          />
          <Text>
           <CheckBox
          style={styles.checkbox}
          onClick={ischecked}
        />
        Recurring Booking
        </Text>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Proceed To Pay</Text>
            </TouchableOpacity>

          </View>
        </View>
      );
  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    Register: {
      flex: 1,
      backgroundColor: '#fff',
      marginTop:50,
    },
    heading:{
      fontSize:30
    },
    inputText: {
      height: 50,
      borderWidth: 2,
      borderColor: "#000",
      paddingHorizontal: 10,
      width:350,
      marginLeft:18,
      marginRight:10,
      marginTop:30
    },
    button: {
      height: 50,
      borderWidth: 2,
      backgroundColor: "#000",
      color:"white",
      paddingHorizontal: 10,
      width:350,
      marginLeft:18,
      marginRight:10,
      marginTop:30,
      borderRadius:5,
      justifyContent:'center',
      alignItems:'center'
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight:'600'
  
    },
    policy:{
        marginLeft:18,
        marginRight:10,
        marginTop:30,
    },
    underlinedText: {
        textDecorationLine: 'underline',
      },
  });
