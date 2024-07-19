import React, { Component } from 'react'
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function ContactUs()  {

    return (
        <View style={styles.container}>
          <View style={styles.Register}>
          {/* <Text style={styles.heading}>Register</Text> */}
          <TextInput 
          style={styles.inputText}
          placeholder='Name'
          />
          <TextInput 
          style={styles.inputText}
          placeholder='Email'
          />
                <TextInput 
          style={styles.inputText}
          placeholder='Phone No.'
          textContentType='telephoneNumber'
          />
                <TextInput 
          style={styles.inputText}
          placeholder='Message'

          />
            <TouchableOpacity style={styles.button} onPress={() => {}}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <Text style={styles.policy}>
            CONTACT US
            </Text>
            <Text style={styles.underlinedText}>lorem Ipsum</Text>
            <Text style={styles.underlinedText}>Email: mail@app.Component
                Phone: 123456789
                Website: www.abc.com 
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
        fontSize: 18,
             fontWeight:'600'
    },
    underlinedText: {
        marginLeft:18,
        marginRight:10,
        marginTop:10,
      },
  });
