import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';


import Card from '../components/Card'; 

export default function ListaExternaScreen() {
  const [data, setData] = useState([]);

  async function leer() {
    try {
      const resp = await fetch('https://api.sampleapis.com/futurama/characters');
      const json = await resp.json();
      setData(json);
    } catch (error) {
      console.error("Error cargando API:", error);
    }
  }

  useEffect(() => {
    leer();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista Externa</Text>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <Card info={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    textAlign: 'left',
    marginHorizontal: 15,
    marginVertical: 10,
    fontWeight: 'bold'
  }
});