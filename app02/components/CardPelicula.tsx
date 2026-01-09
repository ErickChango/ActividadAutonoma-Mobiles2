import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

export default function CardPelicula({ pelicula }: any) {
  const [verModal, setVerModal] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setVerModal(true)}
      style={styles.container}>

      <Text style={styles.tituloText}>{pelicula.titulo}</Text>
      
      <Image
        style={styles.img}
        source={{ uri: pelicula.enlaces.image }} 
      />

      <Modal visible={verModal} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalLabel}>DETALLES</Text>
            <Text style={styles.modalTitulo}>{pelicula.titulo}</Text>
            
            <Image
              style={styles.imgModal}
              source={{ uri: pelicula.enlaces.image }} 
            />
            
            <Text style={styles.desc}>{pelicula.descripcion}</Text>

            <TouchableOpacity 
              style={styles.btnCerrar} 
              onPress={() => setVerModal(false)}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>CERRAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#639b50ff", 
    padding: 15,
    margin: 10,
    borderRadius: 10,
    minHeight: 180,
  },
  img: {
    height: 120, 
    width: 90,
    resizeMode: 'cover',
    marginTop: 10,
    backgroundColor: '#eee'
  },
  tituloText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000'
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: "#c594e0",
    width: "85%",
    borderRadius: 20,
    padding: 20,
    alignItems: 'center'
  },
  imgModal: {
    height: 200,
    width: 150,
    marginVertical: 15,
    borderRadius: 5
  },
  modalLabel: { fontSize: 12, fontWeight: 'bold' },
  modalTitulo: { fontSize: 18, marginBottom: 10 },
  desc: { textAlign: 'center', marginBottom: 20 },
  btnCerrar: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center'
  }
})