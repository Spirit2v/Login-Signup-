



import React, { Component, useState } from 'react';
import 'react-native-gesture-handler';
import { View, 
  Text
   ,
   StyleSheet,
    TextInput, 
    Touchable, 
    TouchableOpacity, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/Main';
import Login from './screens/Login';
import Signup from './screens/Signup';




const Stack = createStackNavigator();
const  userInfo = {username:'admin',password:'pass123'}

export class App extends Component {
  static navigationOptions={
    header:null
  }

render() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        
        name="Main" component={Main}
        options={{  headerShown: false }} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="signup" component={Signup}
          options={{  headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
  

}



export default App;
