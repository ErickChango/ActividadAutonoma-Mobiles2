import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Vibration } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  
  return (
  <ImageBackground
    source={{ uri: "https://4kwallpapers.com/images/walls/thumbs_3t/24951.jpg" }}
    style={styles.container}
  >
    <Text style={styles.title}>Bienvenido</Text>

    <View style={styles.buttonContainer}>
    <TouchableOpacity 
      style={styles.btn}
      onPress={() => {
      Vibration.vibrate(50);
      navigation.navigate("Local");
      }}
    >
      <Text style={styles.textBtn}>Ir a Lista Local</Text>
    </TouchableOpacity>

    <TouchableOpacity 
      style={[styles.btn, { backgroundColor: '#4a90e2' }]}
      onPress={() => {
      Vibration.vibrate(50);
      navigation.navigate("Externa");
      }}
    >
      <Text style={styles.textBtn}>Ir a Lista Externa</Text>
    </TouchableOpacity>
    
    <TouchableOpacity 
      style={[styles.btn, { backgroundColor: '#2ecc71' }]}
      onPress={() => navigation.navigate("MainTabs")}
    >
      <Text style={styles.textBtn}>Ver Calculadora/Tabs</Text>
    </TouchableOpacity>
    </View>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  },
  title: {
  color: 'white',
  fontSize: 50,
  fontWeight: 'bold',
  marginBottom: 40
  },
  buttonContainer: {
  width: '80%',
  },
  btn: {
  backgroundColor: '#9faec6',
  padding: 15,
  borderRadius: 10,
  marginVertical: 10,
  alignItems: 'center',
  },
  textBtn: {
  color: 'white',
  fontSize: 18,
  fontWeight: 'bold'
  }
});
