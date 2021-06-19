import {StatusBar} from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import IssLocation from './screens/IssLocation';
import Meteors from './screens/Meteors';
import Updates from './screens/Updates';

const Stack=createStackNavigator();
function App(){ 
    return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'
        screenOptions={{headerShown:false}}>
          <Stack.Screen name='HomeScreen' component={HomeScreen}/>
          <Stack.Screen name='IssLocation' component={IssLocation}/>
          <Stack.Screen name='Meteors' component={Meteors}/>
          <Stack.Screen name='Updates' component={Updates}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;

 
