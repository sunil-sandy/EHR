// src/components/CustomInput.js
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from '../styles/common';

export default function CustomInput({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  showPassword,
  togglePassword,
  keyboardType
}) {
  return (
    <View style={styles.inputContainer}>
      <Icon name={icon} size={20} color="#666" style={styles.inputIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      {togglePassword && (
        <TouchableOpacity onPress={togglePassword}>
          <Icon name={showPassword ? "eye-off" : "eye"} size={20} color="#666" />
        </TouchableOpacity>
      )}
    </View>
  );
}