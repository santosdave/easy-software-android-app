import React, {createRef} from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import  BottomSheet  from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'
import { TextInput } from 'react-native-paper'
const EditProfile = () => {
    const reference =createRef();
    const down=new Animated.Value(1);

    const renderDetail=() => (
            <View style={styles.panel}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.panelTitle}>
                        Upload a Photo
                    </Text>
                    <Text style={styles.panelSubtitle}>
                        Choose Your Profile Picture
                    </Text>
                </View>
                <TouchableOpacity style={styles.panelButton}>
                    <Text style={styles.panelButtonTitle}>Take a Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelButton}>
                    <Text style={styles.panelButtonTitle}>Choose from Library</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.panelButton} onPress={()=> this.bs.current.snapTo(1)}>
                    <Text style={styles.panelButtonTitle}>Cancel</Text>
                </TouchableOpacity>
            </View>
    );
    const renderHeader=() => (
        <View style={styles.header}>
            <View style={styles.panelHeader}>
                <View style={styles.panelHandler}>

                </View>
            </View>
        </View>
    );
    return (
        <View style={styles.container}>
            <BottomSheet
                ref={this.reference}
                snapPoints={[330, 0]}
                initialSnap={1}
                renderContent={this.renderDetail}
                renderHeader={this.renderHeader}
                callbackNode={this.down}
                enabledGestureInteraction={true}
            />
            <Animated.View style={{margin:20, opacity:Animated.add(0.1, Animated.multiply(this.down, 1.0)),
            
            }}>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=>this.reference.current.snapTo(0)}>
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
                        <TextInputInput
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
                    <FontAwesome name={'envolope-o'} size={20}/>
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
                    <FontAwesome name={'map-marker-outline'} size={20}/>
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
            </Animated.View>
        </View>
    )
}

export default EditProfile

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
    panel: {
        padding: 20,
        backgroundColor:'#FFFFFF',
        paddingTop: 20,
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
    panelHeader: {
        alignItems: 'center',
    },
    panelHandler: {
        width: 40,
        height: 8,
        borderRadius:4,
        backgroundColor:'#00000040',
        marginBottom:10,
    },
    panelTitle: {
        fontSize:27,
        height:35,
    },
    panelSubtitle: {
        fontSize:14,
        color: 'gray',
        height: 30,
        marginBottom:10,
    },
    panelButton: {
        padding: 13,
        borderRadius:10,
        backgroundColor:'#FF6347',
        alignItems: 'center',
        marginVertical:7,
    },
    panelButtonTitle: {
        fontSize:17,
        fontWeight:'bold',
        color: 'white',
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
