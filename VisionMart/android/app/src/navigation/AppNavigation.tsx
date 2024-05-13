import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import HomePage from '../screens/HomePage';
import ForgotPasswordPage from '../screens/ForgetPassword';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // Corrected syntax
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomePage} />
        {/* <Stack.Screen name="Home" component={ForgotPasswordPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
