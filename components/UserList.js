import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {FlatList,StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import{Avatar,Title,Caption, TouchableRipple} from 'react-native-paper'
import tw from 'tailwind-react-native-classnames';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const data = [
    {
        id:"1",
        name:"Santos Dave",
        username:"santosdave",
        createdAt:"Thursday 12:00",
        screens:"ViewUser",
    },
    {
        id:"2",
        name:"Peter Dury",
        username:"duryPeter",
        createdAt:"Friday 12:00",
        screens:"ViewUser",
    },
    {
        id:"3",
        name:"Peter Dury",
        username:"duryPeter",
        createdAt:"Friday 12:00",
        screens:"ViewUser",
    },
];
const UserList = () => {
    const navigation=useNavigation()
    return (
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item})=>(
            <View style={tw `p-5  bg-gray-200 m-2 rounded-xl`}>
                <View style={{flexDirection: 'row', marginTop:15}}>
                    <Avatar.Image
                        source={{
                            uri:'https://media-exp3.licdn.com/dms/image/C4D03AQFaYwtIZ5k53g/profile-displayphoto-shrink_800_800/0/1622195469007?e=1632355200&v=beta&t=24cvGNubyys3-JrSg5kB9FYqbRV4dOeGOH5T5MmdD-0'
                        }}
                        size={80}
                    />
                    <View style={{marginLeft:20, }}>
                        <Title style={styles.title,{marginTop:15, marginBottom:5,}}>{item.name}</Title>
                        <Caption style={styles.caption}>{item.username}</Caption>
                    </View>
                </View>
                
                <View style={styles.infoBoxWrapper}>
                        
                        
                        <View style={styles.infoBox}>
                            <View style={styles.row}>
                                <TouchableRipple onPress={()=> navigation.navigate('EditUser')}>
                                    <View style={styles.menuItem}>
                                        <Icon name="account-edit" color='#777777' size={25}/>
                                        <Text style={styles.menuItemText}>Edit</Text>
                                    </View>
                                </TouchableRipple>
                            </View>
                            <View style={styles.row}>
                                <TouchableRipple onPress={()=>navigation.navigate('ViewUser')}>
                                    <View style={styles.menuItem}>
                                        <Icon name="share-outline" color='#777777' size={25}/>
                                        <Text style={styles.menuItemText}>Profile</Text>
                                    </View>
                                </TouchableRipple>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.menuItem}>
                                    <Icon name="clock" color='#777777' size={25}/>
                                    <Text style={styles.menuItemText}>{item.createdAt}</Text>
                                </View>
                                
                            </View>
                        </View>
                        
                </View>
            </View>
        )}
        
        
        />
    )
}

export default UserList

const styles = StyleSheet.create({
    title: {
        fontSize:24,
        fontWeight:'bold',
    },
    caption:{
        fontSize:14,
        
        fontWeight:'500',
    },
    infoBoxWrapper:{
        marginTop:20,
        borderBottomColor:'#dddddd',
        borderBottomWidth:1,
        borderTopColor:'#dddddd',
        borderTopWidth:1,
        flexDirection: 'row',
        height:120,
        

    },
    infoBox:{
        width:'50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical:1,
        paddingHorizontal:10,
       },
    menuItemText: {
        color:'#777777',
        marginLeft:20,
        fontWeight:'600',
        fontSize: 16,
        
    },
    row:{
        flexDirection: 'row',
        marginBottom:10,
    },
})
