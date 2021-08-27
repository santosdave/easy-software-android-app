import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Input from '../components/LoginForm/Input'

import { dimensionHeight } from '../utils/dimensions'
import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.headerText}>Login</Text>
                <Text style={styles.headerText1}> By Santos</Text>
                <Input/>
            
                <TouchableOpacity style={styles.loginButton} onPress={()=> navigation.navigate('Home')}>
                    <Text style={styles.signupText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signupButton} onPress={()=> navigation.navigate('Signup')}>
                    <Text style={styles.signupText}>Signup</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6366f1',
        padding: 20,
    },
    loginContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1faee',
        padding: 10,
        borderRadius:2,
        width: 300,
    },
    headerText: {
        fontSize: 30,
        margin: 0,
        fontWeight: '600',
        marginBottom:4,
    },
    headerText1: {
        fontSize: 10,
        margin: 0,
        fontWeight: '300',
    },
    loginButton: {
        marginVertical:25,
       
        width: '100%',
        marginTop: 10,
        width: '100%',
        height: dimensionHeight / 15,
        backgroundColor: "blue",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:3,
    },
    signupButton: {
        marginVertical:15,
       
        width: '100%',
        marginTop: 10,
        width: '100%',
        height: dimensionHeight / 15,
        backgroundColor: "blue",
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:3,
    },
    signupText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#ffffff',
       
    }

})
