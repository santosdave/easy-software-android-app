import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={tw `p-5`}>
                <View  style={styles.subcontainer}>
                    <Text style={styles.headerText}>Homepage</Text>
                    <Text style={styles.headerText1}> By Santos</Text>
                </View>
                
                <View style={styles.navContainer} >
                    <NavOptions/>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6366f1',
        padding: 10,
    },
    subcontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    navContainer:{
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
    headerText1: {
        fontSize: 20,
        margin: 0,
        fontWeight: '300',
    },
})
