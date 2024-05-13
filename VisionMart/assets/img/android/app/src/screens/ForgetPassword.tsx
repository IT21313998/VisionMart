import { useState } from "react";
import { Alert, ImageBackground, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    // Implement logic to send reset password instructions
    if (email.trim() === '') {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    // Logic to send reset password instructions
    // Example: Send email to the provided email address with a reset link

    Alert.alert('Password Reset', 'Instructions to reset your password have been sent to your email');
  };

  return (
    <ImageBackground
      source={require('../../../../assets/img/Forget.png')} // Path to your background image
      style={styles.background}
      resizeMode="cover">
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ForgotPasswordPage;
