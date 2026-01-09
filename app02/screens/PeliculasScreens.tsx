import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardPelicula from '../components/CardPelicula'

export default function PeliculasScreens() {
  const URL = "https://jritsqmet.github.io/web-api/peliculas2.json"
  const [peliculas, setpeliculas] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    leer()
  }, [])

  async function leer() {
    try {
      const resp = await fetch(URL);
      const json = await resp.json();
      
      
      setpeliculas(json.peliculas); 
      
    } catch (error) {
      console.error("Error al obtener datos:", error);
    } finally {
      setCargando(false);
    }
  }

  if (cargando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Cargando películas...</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Peliculas!!!!!</Text>
      <FlatList
        data={peliculas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <CardPelicula pelicula={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#fff',
    paddingTop: 20
  },
  titulo: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
    fontWeight: 'bold',
    color: '#000'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})