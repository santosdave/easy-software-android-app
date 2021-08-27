import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { dimensionHeight } from '../utils/dimensions'
import SignupInput from '../components/SignupForm/SignupInput'
import { useNavigation } from '@react-navigation/native';
const Signup = () => {
    const navigation=useNavigation()
    return (
        <View style={styles.container}>
            <View style={styles.signupContainer}>
                <Text style={styles.headerText}>Login</Text>
                <Text style={styles.headerText1}> By Santos</Text>
                <SignupInput/>
                <TouchableOpacity style={styles.signupButton} onPress={()=> navigation.navigate('Login')}>
                    <Text style={styles.signupText}>Signup</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6366f1',
        padding: 20,
    },
    signupContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1faee',
        padding: 10,
        borderRadius:3,
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
