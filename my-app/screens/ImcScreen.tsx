import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';

export default function ImcScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const calcularIMC = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura);
    if (p > 0 && a > 0) {
      const imc = p / (a * a);
      Alert.alert("Resultado", `Tu IMC es: ${imc.toFixed(2)}`);
    } else {
      Alert.alert("Error", "Por favor ingresa valores válidos");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>
      
      <TextInput
        style={styles.input}
        placeholder='Peso en KG (ej: 70)'
        keyboardType='numeric'
        onChangeText={setPeso}
      />

      <TextInput
        style={styles.input}
        placeholder='Altura en metros (ej: 1.75)'
        keyboardType='numeric'
        onChangeText={setAltura}
      />

      <Button title='Calcular Ahora' color="#007AFF" onPress={calcularIMC} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  input: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
  }
});