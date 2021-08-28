import React from 'react'
import { StyleSheet, View, SafeAreaView  } from 'react-native'
import{Avatar,Title,Caption,Text, TouchableRipple} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
const Profile = () => {
    const navigation=useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoContainer}>
                <View style={{flexDirection: 'row', marginTop:15}}>
                    <Avatar.Image
                        source={{
                            uri:'https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0'
                        }}
                        size={80}
                    />
                    <View style={{marginLeft:20, }}>
                        <Title style={styles.title,{marginTop:15, marginBottom:5,}}>Santos Dave</Title>
                        <Caption style={styles.caption}>davesantos</Caption>
                    </View>
                </View>
                <View style={styles.userInfoContainer}>
                    <View style={styles.row}>
                            <Icon name="map-marker-radius" color='#777777' size={20}/>
                            <Text style={{color: '#777777', marginLeft:20,}}>Nairobi, Kenya</Text>
                    </View>
                    <View style={styles.row}>
                            <Icon name="phone" color='#777777' size={20}/>
                            <Text style={{color: '#777777', marginLeft:20,}}>0787654321</Text>
                    </View>
                    <View style={styles.row}>
                            <Icon name="email" color='#777777' size={20}/>
                            <Text style={{color: '#777777', marginLeft:20,}}>Santosdave@gmail.com</Text>
                    </View>
                    
                    

                </View>
                
            </View>
            <View style={styles.infoBoxWrapper}>
                        
                        <View style={styles.infoBox}>
                        <View style={styles.row}>
                            <Icon name="clock" color='#777777' size={30}/>
                            <Text style={{color: '#777777', marginLeft:20,}}>created on tuesday</Text>
                        </View>
                        </View>
                </View>
                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={()=>{}}>
                        <View style={styles.menuItem}>
                            <Icon name="heart-outline" color='#777777' size={25}/>
                            <Text style={styles.menuItemText}>Your Favourites</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={()=> navigation.navigate('EditProfile')}>
                        <View style={styles.menuItem}>
                            <Icon name="account-edit" color='#777777' size={25}/>
                            <Text style={styles.menuItemText}>Edit</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={()=>{}}>
                        <View style={styles.menuItem}>
                            <Icon name="share-outline" color='#777777' size={25}/>
                            <Text style={styles.menuItemText}>Share</Text>
                        </View>
                    </TouchableRipple>
                </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoContainer: {
        paddingHorizontal:30,
        marginBottom:25,
        marginTop:10,
    },
    title: {
        fontSize:24,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        
        fontWeight:'500',
    },
    row:{
        flexDirection: 'row',
        marginBottom:10,
    },
    infoBoxWrapper:{
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
        borderTopColor:'#dddddd',
        borderTopWidth:1,
        flexDirection: 'row',
        height:100,

    },
    infoBox:{
        width:'50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
     flexDirection: 'row',
     paddingVertical:15,
     paddingHorizontal:30,
    },
    menuItemText: {
        color:'#777777',
        marginLeft:20,
        fontWeight:'600',
        fontSize: 16,
        
    },
})

