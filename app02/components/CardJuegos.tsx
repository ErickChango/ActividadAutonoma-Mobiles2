import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'

interface Juego {
    titulo: string;
    imagen: string;
    descripcion: string;
}

export default function CardJuegos({ juego, horizontal }: { juego: Juego, horizontal: boolean }) {
    const [verModal, setVerModal] = useState(false);

    return (
        <TouchableOpacity
            onPress={() => setVerModal(true)}
            style={[
                styles.container, 
                horizontal ? styles.cardHorizontal : styles.cardVertical
            ]}>

            <Text numberOfLines={1} style={styles.tituloText}>{juego.titulo}</Text>
            <Image
                style={horizontal ? styles.imgH : styles.imgV}
                source={{ uri: juego.imagen }} 
            />

            <Modal visible={verModal} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <View style={{ alignSelf: 'flex-start' }}>
                            <Text style={styles.modalLabel}>DETALLES</Text>
                            <Text style={styles.modalTitulo}>{juego.titulo}</Text>
                        </View>
                        <Image
                            style={styles.imgModal}
                            source={{ uri: juego.imagen }} 
                        />
                        <Text style={styles.desc}>{juego.descripcion}</Text>
                        <TouchableOpacity 
                            style={styles.btnCerrar} 
                            onPress={() => setVerModal(false)}>
                            <Text style={styles.btnText}>CERRAR</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#80a6a8ff", 
        padding: 15,
        margin: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4
    },
    cardVertical: {
        width: '94%',
    },
    cardHorizontal: {
        width: 200,
        height: 250,
    },
    imgV: {
        height: 150, 
        width: 120,
        resizeMode: 'contain', 
        marginTop: 5
    },
    imgH: {
        height: 140, 
        width: 160,
        resizeMode: 'contain', 
        marginTop: 5
    },
    tituloText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center'
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: "#89986D", 
        width: "85%",
        borderRadius: 20,
        padding: 25,
        alignItems: 'center'
    },
    modalLabel: { fontSize: 12, color: '#444', fontWeight: 'bold' },
    modalTitulo: { fontSize: 18, color: '#000', marginBottom: 15 },
    imgModal: {
        height: 220,
        width: 160,
        borderRadius: 5,
        marginBottom: 15
    },
    desc: { 
        textAlign: 'justify', 
        color: '#333', 
        marginBottom: 20,
        fontSize: 14 
    },
    btnCerrar: {
        backgroundColor: '#2196F3', 
        paddingVertical: 12,
        width: '100%',
        borderRadius: 5,
        alignItems: 'center'
    },
    btnText: { color: 'white', fontWeight: 'bold' }
})