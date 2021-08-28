import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground,TextInput , SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const EditUser = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{margin:20,}}>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>{}}>
                        <View style={{
                            height: 100,
                            width: 100,
                            borderRadius:15,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <ImageBackground 
                                source={{ uri:'https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0'}}
                                style={{height:100, width:100}}
                                imageStyle={{borderRadius:15}}
                            >
                                    <View style={{
                                        flex:1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Icon name='camera' size={35} color='white' style={{
                                            opacity: 0.7,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderWidth: 1,
                                            borderColor: '#fff',
                                            borderRadius:10,
                                        }}/>
                                    </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={{marginTop:10, fontSize:18, fontWeight: 'bold'}}>Santos Dave</Text>
                </View>
                <View style={styles.action}>
                    <FontAwesome name={'user-o'} size={20}/>
                        <TextInput
                            placeholder='First Name'
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                            autocorrect={false}
                        />
                </View>
                <View style={styles.action}>
                    <FontAwesome name={'user-o'} size={20}/>
                        <TextInput
                            placeholder='Last Name'
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                            autocorrect={false}
                        />
                </View>
                <View style={styles.action}>
                    <FontAwesome name={'phone'} size={20}/>
                        <TextInput
                            placeholder='Phone'
                            keyboardType='number-pad'
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                            autocorrect={false}
                        />
                </View>
                <View style={styles.action}>
                    <FontAwesome name={'envelope-o'} size={20}/>
                        <TextInput
                            placeholder='Email'
                            keyboardType='email-address'
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                            autocorrect={false}
                        />
                </View>
                <View style={styles.action}>
                    <FontAwesome name={'globe'} size={20}/>
                        <TextInput
                            placeholder='Country'
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                            autocorrect={false}
                        />
                </View>
                <View style={styles.action}>
                    <Icon name="map-marker-radius"  size={20}/>
                        <TextInput
                            placeholder='City'
                            placeholderTextColor='#666666'
                            style={styles.textInput}
                            autocorrect={false}
                        />
                </View>
                <TouchableOpacity style={styles.commandButton} onPress={()=>{}}>
                    <Text style={styles.panelButtonTitle}>Submit</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default EditUser

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    commandButton: {
        padding: 15,
        borderRadius:10,
        backgroundColor:'#FF6347',
        alignItems: 'center',
        marginTop: 10,
    },
    header: {
        backgroundColor:'#FFFFFF',
        shadowColor:'#333333',
        shadowOffset:{width:-1, height:-1},
        shadowRadius:2,
        shadowOpacity:0.4,
        paddingTop:20,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5,
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth:1,
        borderBottomColor:'#FF0000',
        paddingBottom:5,
    },
    textInput: {
        flex: 1,
        marginTop:-12,
        paddingLeft:10,
        color:'#05375a',
    },

    
})

