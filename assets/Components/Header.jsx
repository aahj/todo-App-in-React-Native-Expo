import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Foundation } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.textIcons}>
                <Foundation name='clipboard-pencil' size={35} color='rgb(24,24,24)' />
                <Text style={styles.text}>ToDOs</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        padding: 30,
        backgroundColor: "#D3D3D3",
        margin: 38,
        marginBottom: 10,
        borderRadius: 15
    },

    text: {
        fontSize: 28,
        fontFamily: 'CarterOne-Regular',
        marginLeft: 15,
        color: 'rgb(24,24,24)'
    },

    textIcons: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "#BEBEBE",
    }
});
