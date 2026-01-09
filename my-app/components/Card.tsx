import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Card( props : any) {
  
    console.log(props.info.age);

    return (
      <TouchableOpacity style={styles.container}>
  
        <Text style={styles.text}>
          {props.info.name.first} {props.info.name.last}
        </Text>
        
       
        <Image 
          style={styles.img} 
          source={{ uri: props.info.images.main }}
        />
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#eb7676ff", 
        height: 150,
        margin: 5,
        padding: 10
    },
    text: {
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 5
    },
    img:{
        width: 120, 
        height: 120,
        resizeMode: 'contain'
    }
})