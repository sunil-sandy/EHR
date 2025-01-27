// src/screens/ForgotPasswordScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/common';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Icon name="user" size={24} color="#000" />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.welcomeText}>Recover Password</Text>
        <Text style={styles.loginText}>Enter your email to reset password</Text>

        <View style={styles.inputContainer}>
          <Icon name="mail" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#666"
            keyboardType="email-address"
          />
        </View>

        <View style={[styles.buttonContainer, { marginTop: 16 }]}>
          <TouchableOpacity 
            style={styles.cancelButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.loginButtonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ForgotPasswordScreen;