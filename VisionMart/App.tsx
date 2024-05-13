import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginScreen from './android/app/src/screens/LoginScreen';
import SignupScreen from './android/app/src/screens/SignupScreen';
import  {NavigationContainer}  from '@react-navigation/native';
import AppNavigation from './android/app/src/navigation/AppNavigation';
import 'react-native-gesture-handler';



function App():JSX.Element {

  return (


      <View style={sty.container}>
        <AppNavigation/>
        {/* <LoginScreen/>
      <SignupScreen/> */}
      </View>  
  );

}                     
const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',

  }
})
export default App;
