import React from 'react'
import { StyleSheet, View, SafeAreaView,Text  } from 'react-native'
import UserList from '../components/UserList'

const Users = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.usersInfoContainer}>
                
                <UserList/>
            </View>
        </SafeAreaView>
    )
}

export default Users

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    usersInfoContainer: {
        paddingHorizontal:30,
        marginBottom:25,
        marginTop:10,
    },
    subcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    headerText: {
        fontSize: 50,
        margin: 0,
        fontWeight: '600',
        marginBottom:4,
        color: 'white',
        
    },
})
