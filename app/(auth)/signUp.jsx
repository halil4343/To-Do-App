import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function SignUp({ navigation }) {
  const handleSignUp = () => {
    // Add your sign-up logic here
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign Up</Text>
      <View style={{ width: '80%', marginBottom: 10 }}>
        <Text>Email</Text>
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
          placeholder="example@email.com"
        />
      </View>
      <View style={{ width: '80%', marginBottom: 10 }}>
        <Text>Password</Text>
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
          secureTextEntry
          placeholder="Password"
        />
      </View>
      <View style={{ width: '80%', marginBottom: 20 }}>
        <Text>Confirm Password</Text>
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
          secureTextEntry
          placeholder="Confirm Password"
        />
      </View>
      <Button title="Sign Up" onPress={handleSignUp} />
      <Text style={{ marginTop: 20 }}>
        Already have an account?{' '}
        <Text
          style={{ color: 'blue' }}
          onPress={() => navigation.navigate('Login')}
        >
          Sign in
        </Text>
      </Text>
    </View>
  );
}