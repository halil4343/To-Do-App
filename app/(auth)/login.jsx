import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Login({ navigation }) {
  const handleLogin = () => {
    // Add your login logic here
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign In</Text>
      <View style={{ width: '80%', marginBottom: 10 }}>
        <Text>Email</Text>
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
          placeholder="example@email.com"
        />
      </View>
      <View style={{ width: '80%', marginBottom: 20 }}>
        <Text>Password</Text>
        <TextInput
          style={{ borderWidth: 1, padding: 10, marginTop: 5 }}
          secureTextEntry
          placeholder="Password"
        />
      </View>
      <Button title="Sign In" onPress={handleLogin} />
      <Text style={{ marginTop: 20 }}>
        Don't have an account?{' '}
        <Text
          style={{ color: 'blue' }}
          onPress={() => navigation.navigate('SignUp')}
        >
          Sign up
        </Text>
      </Text>
    </View>
  );
}