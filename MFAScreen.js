// src/screens/MFAScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Image,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/common';

const MFAScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Icon name="user" size={24} color="#000" />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        <Text style={styles.welcomeText}>MFA Verification</Text>
        <Text style={styles.loginText}>Enter the MFA Code</Text>

        <View style={styles.inputContainer}>
          <Icon name="message-square" size={20} color="#666" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Enter Code"
            placeholderTextColor="#666"
            keyboardType="numeric"
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
            onPress={() => {}}
          >
            <Text style={styles.loginButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MFAScreen;