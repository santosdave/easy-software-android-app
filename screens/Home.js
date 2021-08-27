import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={tw `p-5`}>
                <Text style={styles.headerText}>Homepage</Text>
                <Text style={styles.headerText1}> By Santos</Text>
                <View  style={styles.subcontainer}>
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
})
