import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Button} from 'react-native-elements';

const HomePage = () => {
  const handleVoiceButtonClick = () => {
    // Handle voice button click event
  };

  const handleOrderButtonClick = () => {
    // Handle order button click event
  };

  return (
    <ImageBackground
      source={require('../../../../assets/img/home.png')} // Path to your background image
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <Button
          title="Click through your grocery order"
          onPress={handleOrderButtonClick}
          buttonStyle={[styles.button1, styles.orderButton]} // Add orderButton style
          titleStyle={styles.buttonText}
          accessibilityLabel="Place Order"
        />
        <Button
          title="By groceries with voice control"
          onPress={handleVoiceButtonClick}
          buttonStyle={[styles.button2, styles.voiceButton]} // Add voiceButton style
          titleStyle={styles.buttonText}
          accessibilityLabel="Voice Assistance"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,

  },
  button1: {
      width: 200, // Set button width to desired size
      height: 200, // Set button height to desired size
      marginVertical: 50,
      borderRadius: 75, // Set border radius to half of the button's width (or height for perfect circle)
      justifyContent: 'center',
      alignItems: 'center', // Center button content
  
  },
  button2: {
    width: 230, // Set button width to desired size
    height: 150, // Set button height to desired size
    borderRadius: 75, // Set border radius to half of the button's width (or height for perfect circle)
    justifyContent: 'center',
    alignItems: 'center', 
  },
  orderButton: {
    backgroundColor: '#D8D8C9', // Set background color for order button
  },
  voiceButton: {
    backgroundColor: '#D8D642', // Set background color for voice button
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default HomePage;
