// src/components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/common';

export default function CustomButton({ title, onPress, variant = 'primary' }) {
  return (
    <TouchableOpacity 
      style={variant === 'primary' ? styles.loginButton : styles.cancelButton}
      onPress={onPress}
    >
      <Text style={variant === 'primary' ? styles.loginButtonText : styles.cancelButtonText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}