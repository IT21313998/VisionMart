import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Switch,
  Text,
  ImageBackground,
  Image,
} from 'react-native';
import { Button } from 'react-native-elements';

const SearchAndBrowse = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/img/Forget.png')}
        style={styles.imageBackground}>
        <View style={styles.innerContainer}>
          <View style={styles.switchContainer}>
            <Text style={styles.modeText}>CLICK MODE</Text>
            <Switch />
            <Text style={styles.modeText}>VOICE MODE</Text>
          </View>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Button
              title="Search and Browse"
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonText}
              icon={
                <Image source={require('../../../../assets/img/search.png')} style={styles.image} />
              }
            >
            </Button>
            <Button
              title="Take a Photo"
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonText}
              icon={
                <Image source={require('../../../../assets/img/camera.png')} style={styles.image} />
              }
            >
              
            </Button>
            <Button
              title="Cart and Chechout"
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonText}
              icon={
                <Image source={require('../../../../assets/img/cart.png')} style={styles.image} />
              }
            >
             
            </Button>
            <Button
              title="Order History"
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.buttonStyle}
              titleStyle={styles.buttonText}
              icon={
                <Image source={require('../../../../assets/img/order.png')} style={styles.image} />
              }
            >
              
            </Button>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    marginBottom: 40,
  },
  modeText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
    width: 240, // Adjusted width to accommodate longer titles
  },
  buttonStyle: {
    width: '100%', // Button width now takes the full width of the container
    height: 160,
    borderRadius: 25,
    backgroundColor: '#A5A5A3',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonSubText: {
    fontSize: 18,
    marginTop: 5,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default SearchAndBrowse;
