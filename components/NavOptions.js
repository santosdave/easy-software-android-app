import { useNavigation } from '@react-navigation/native';
import React from 'react'
import {FlatList, Text,StyleSheet,  TouchableOpacity, View} from 'react-native'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
const data = [
    {
        id:"1",
        title:"My Profile",
        icon:"user",
        screens:"Profile",
    },
    {
        id:"2",
        title:"Users",
        icon:"team",
        screens:"Users",
    },
];

const NavOptions = () => {
    const navigation=useNavigation()
    return (
        <FlatList
        data={data}
         keyExtractor={(item) => item.id}
         renderItem={({item})=>(
             <TouchableOpacity
             onPress={()=> navigation.navigate(item.screens)}
              style={tw `p-7  bg-gray-200 m-2 w-60 rounded-xl`}>
                 <View>
                    <Icon
                        style={tw `p-4 bg-black rounded-full w-40  `}
                        name={item.icon}
                        color="white"
                        type="antdesign"
                    />
                     <Text style={tw `mt-2 ml-9 text-lg  font-bold `}>{item.title}</Text>
                     
                 </View>
             </TouchableOpacity>
         )}
        
        
        
        
        />
    )
}

export default NavOptions

const styles = StyleSheet.create({})
