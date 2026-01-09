import { Button, StyleSheet, Text, View, Switch, Alert } from 'react-native'
import React, { use, useEffect, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'

export default function MusicaScreen() {

  const [cancion, setCancion] = useState("")
  const [tiempo, setTiempo] = useState(0.0)
  const [genero, setGenero] = useState("")
  const [aceptar, setAceptar] = useState(false)

function guardar(){

    if( aceptar && cancion.trim() != "" ){
      Alert.alert("Mensaje", "Cancion Guardada")
    }else{
      Alert.alert("Error", "Se debe aceptar las condiciones")
    }
}

useEffect(() => {

    if(tiempo >= 6){
      Alert.alert("Error", "El tiempo máximo es de 6 minutos")
    }

}, [tiempo])

  return (
    <View>
      <Text>Musica</Text>
      <TextInput
        placeholder='Ingresar cancion'
        style={styles.input}
        onChangeText={(texto) => setCancion(texto)}
      />

      <TextInput
        placeholder='Ingresar tiempo'
        style={styles.input}
        onChangeText={(texto) => setTiempo(+texto)}
      />

      <TextInput
        placeholder='Ingresar genero'
        style={styles.input}
        onChangeText={(texto) => setGenero(texto)}
      />

      <Text>Acepta los términos</Text>
      <Switch
        value={aceptar}
        onValueChange={(valor: boolean) => setAceptar(valor)}
      />
      <Button title='Guardar' onPress={()=> guardar()} />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10
  }
})