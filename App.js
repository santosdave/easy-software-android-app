import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import Users from './screens/Users';
import EditProfile from './screens/EditProfile';
import EditUser from './screens/EditUser';
import ViewUser from './screens/ViewUser';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown:true,
              }}
          />
          <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown:true,
              }}
          />
          <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown:true,
              }}
          />
          <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown:true,
              }}
          />
          <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{
                headerShown:true,
                title: 'Edit Profile',
              }}
          />
          <Stack.Screen
              name="Users"
              component={Users}
              options={{
                headerShown:true,
              }}
          />
          <Stack.Screen
              name="ViewUser"
              component={ViewUser}
              options={{
                headerShown:true,
                title: 'View User',
              }}
          />
          <Stack.Screen
              name="EditUser"
              component={EditUser}
              options={{
                headerShown:true,
                title: 'Edit User',
              }}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({});
