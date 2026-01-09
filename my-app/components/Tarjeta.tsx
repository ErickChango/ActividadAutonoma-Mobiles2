import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Tarjeta(props: any) {
  if (!props.datos) return null;

  function mensaje(nombre: string, descripcion: string) {
    Alert.alert(nombre, descripcion)
  }

  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={() => mensaje(props.datos.name, props.datos.description)}
    >
      <Text style={styles.titulo}>{props.datos.name}</Text>

      <View style={styles.fila}>
        <Image
          style={styles.img}
          source={{ uri: props.datos.image }}
        />
        <View style={styles.textoContenedor}>
          <Text style={styles.descripcion} numberOfLines={4}>
            {props.datos.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,            
    borderColor: '#333',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  titulo: {
    textAlign: 'center', 
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333'
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 90,
    width: 90,
    resizeMode: 'contain',
    marginRight: 10,
    borderRadius: 5,
  },
  textoContenedor: {
    flex: 1,
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
    textAlign: 'justify',
  },
})
