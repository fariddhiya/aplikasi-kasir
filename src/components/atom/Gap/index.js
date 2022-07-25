import React from 'react';
import {View} from 'react-native';
import styles from './styles';

export default function Gap({height, width}) {
  return <View style={styles.container(height, width)} />;
}
