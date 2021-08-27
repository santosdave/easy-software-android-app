import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { dimensionHeight, dimensionWidth } from '../../utils/dimensions'

const Input = () => {
    return (
        <View>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Email/Username"
            placeholderTextColor="primary"
            numberOfLines={1}
            />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="primary"
                secureTextEntry={true}
                numberOfLines={1}
            />
            </View>
           
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom:10,
        
        height: dimensionHeight/ 15,
        borderColor: '#ccc',
        borderRadius:3,
        borderWidth:1,
        alignItems: 'center',
        backgroundColor: '#fff',

    },
    input: {
        padding: 10,
        flex: 1,
        fontSize:16,
        fontFamily: 'Helvetica',
        color: '#444',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: dimensionWidth / 1.5,
        height: dimensionHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    }
})
