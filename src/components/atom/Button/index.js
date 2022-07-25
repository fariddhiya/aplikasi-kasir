import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Button({label, onPress, resize, color, opacity}) {
  return (
    <TouchableOpacity
      style={styles.loginButton(resize, color, opacity)}
      onPress={onPress}
      disabled={onPress === 'disable' ? true : false}>
      <Text style={styles.textButton}>{label}</Text>
    </TouchableOpacity>
  );
}
