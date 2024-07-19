import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'

const Club = () => {
    const DATA = [
        { id: '1', image: 'https://via.placeholder.com/150' },
        { id: '2', image: 'https://via.placeholder.com/150' },
        { id: '3', image: 'https://via.placeholder.com/150' },
        { id: '4', image: 'https://via.placeholder.com/150' },
        { id: '5', image: 'https://via.placeholder.com/150' },
      ];
      return (
        <View >
          <Text style={styles.text}>CLUB</Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) =>  <Image source={{ uri: item.image }} style={styles.image} />}
          keyExtractor={item => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={true}
        />
      </View>
      )
    }
    
    const styles =StyleSheet.create({
      text: {
       marginTop:20,
       marginBottom:10,
       marginLeft:15,
        fontSize:18,
        fontWeight:'600'
      },
      
      image: {
        width: 340,
        height: 250,
        borderRadius: 10,
        margin:10
      },
    });
export default Club