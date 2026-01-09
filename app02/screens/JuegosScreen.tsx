import { FlatList, StyleSheet, Text, View, ActivityIndicator, Switch } from 'react-native'
import React, { useEffect, useState } from 'react'
import CardJuegos from '../components/CardJuegos'

export default function JuegosScreens() {
  const URL = "https://jritsqmet.github.io/web-api/videojuegos.json"
  const [juegos, setJuegos] = useState([])
  const [cargando, setCargando] = useState(true)
  const [esHorizontal, setEsHorizontal] = useState(false)

  useEffect(() => {
    leer()
  }, [])

  async function leer() {
    try {
      const resp = await fetch(URL);
      const json = await resp.json();
      setJuegos(json.videojuegos);
    } catch (error) {
      console.error(error);
    } finally {
      setCargando(false);
    }
  }

  if (cargando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#5F9598" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.tituloPeque}>Ver en Horizontal</Text>
        <Switch
          value={esHorizontal}
          onValueChange={() => setEsHorizontal(!esHorizontal)}
          trackColor={{ false: "#767577", true: "#5F9598" }}
          thumbColor={esHorizontal ? "#89986D" : "#f4f3f4"}
        />
      </View>

      <View style={esHorizontal ? styles.horizontalContainer : styles.verticalContainer}>
        <FlatList
          key={esHorizontal ? 'h' : 'v'}
          horizontal={esHorizontal}
          data={juegos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <CardJuegos juego={item} horizontal={esHorizontal} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  tituloPeque: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666'
  },
  verticalContainer: {
    flex: 1,
  },
  horizontalContainer: {
    height: 300,
    marginTop: 50
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
