import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function Register()  {

    return (
        <View style={styles.container}>
          <View style={styles.Register}>
          <Text style={styles.heading}>Register</Text>
          <TextInput 
          style={styles.inputText}
          placeholder='FirstName'
          />
          <TextInput 
          style={styles.inputText}
          placeholder='LastName'
          />
                <TextInput 
          style={styles.inputText}
          placeholder='UserName'
          textContentType='emailAddress'
          />
                <TextInput 
          style={styles.inputText}
          placeholder='Password'
          secureTextEntry={true}
          />
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>

            <Text style={styles.policy}>
            By signing up, you agree to Photo’s <Text style={styles.underlinedText}>Terms of Service</Text> and 
            <Text style={styles.underlinedText}> Privacy Policy</Text>
            </Text>
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
      fontSize:30,
      marginLeft:18,
      marginRight:10,
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
