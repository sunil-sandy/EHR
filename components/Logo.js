// src/components/Logo.js
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/common';

export default function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Text style={styles.logo}>B</Text>
    </View>
  );
}