import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Switch, TextInput } from 'react-native-gesture-handler'

export default function FormularioScreen() {

    const [nombre, setnombre] = useState("")
    const [edad, setedad] = useState(0)
    const [genero, setgenero] = useState(false)
    function mensaje() {
  let gen = "Masculino"

  if (genero) {
    gen = "Femenino";
  }

       Alert.alert(
    "Mensaje", 
    `El usuario ${nombre} con ${edad} años y género ${gen} se ha registrado`
  );
}
    return (

        <View>
            <Text>FormularioScreen</Text>
            <TextInput
                placeholder='Ingresa nombre'
                onChangeText={(texto) => setnombre(texto)}
                style={styles.input}
            />

            <TextInput
                placeholder='Ingresa edad'
                onChangeText={(texto) => setedad(+texto)}
                style={styles.input}
            />
            <View style={styles.fila}>
                <Text>Género</Text>

                <Switch
                    value={genero}
                    onValueChange={(valor) => setgenero(valor)} />
            </View>
            <Text>{genero ? "Masculino" : "Femenino"}  </Text>
            <Button title='Guardar' onPress={mensaje} />

        </View>
    )
}

const styles = StyleSheet.create({
    fila: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#6666',
        fontSize: 25,
        margin: 5
    }
})