import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

export default function Texting({
  size,
  color,
  align,
  width,
  weight,
  label,
  numberOfLines,
}) {
  return (
    <Text
      style={styles.textStyle(size, color, align, width, weight)}
      numberOfLines={numberOfLines}>
      {label}
    </Text>
  );
}
