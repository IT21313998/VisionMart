import React, { useState } from 'react';
import { View, TextInput, Button, Alert, ImageBackground, StyleSheet, Text } from 'react-native';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [billingAddress, setBillingAddress] = useState('');

  const processPayment = async () => {
    // Your payment processing logic here
    // For example, you can make an API call to your server to process the payment
    // Or you can integrate with a payment gateway SDK directly in this function
    // This is just a placeholder function
  };

  const handleSubmit = async () => {
    try {
      await processPayment();
      Alert.alert('Payment Successful', 'Your payment was processed successfully.');
    } catch (error) {
      Alert.alert('Payment Error', 'There was an error processing your payment. Please try again.');
    }
  };

  return (
    <ImageBackground source={require('../../../../assets/img/Forget.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.paymentText}>Payment</Text>
        <TextInput
          value={cardNumber}
          onChangeText={setCardNumber}
          placeholder="Card Number"
          style={styles.input}
        />
        <TextInput
          value={expirationDate}
          onChangeText={setExpirationDate}
          placeholder="Expiration Date"
          style={styles.input}
        />
        <TextInput
          value={cvv}
          onChangeText={setCVV}
          placeholder="CVV"
          style={styles.input}
        />
        <TextInput
          value={billingAddress}
          onChangeText={setBillingAddress}
          placeholder="Billing Address"
          style={styles.input}
        />
        <Button title="Submit Payment" onPress={handleSubmit} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'black',
  },
  paymentText: {
    fontSize: 50, // Increase the font size to 30
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: 'white',
    
  },
}); 

export default PaymentPage;
