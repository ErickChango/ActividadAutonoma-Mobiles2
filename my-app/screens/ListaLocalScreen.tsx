import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import crash from '../assets/data/crash.json'
import Tarjeta from '../components/Tarjeta';

export default function ListaLocalScreen() {

    const [dataCrash, setdataCrash] = useState(crash)

    console.log(dataCrash);


  return (
    <View>
      <Text>ListaLocalScreen</Text>
      <FlatList 
        data={dataCrash}
        renderItem={({item})=>
            <Tarjeta datos={item} />
      
        }
        />
    </View>
  )
}

const styles = StyleSheet.create({})