import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
    return (
        <View styles={styles.header}>
            <Text style={styles.headerText}>Aula Mobile</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        padding: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});