import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconDeleteWhite} from '../../../assets';
import styles from './styles';

export default function RemoveButton({onPress}) {
  return (
    <TouchableOpacity style={styles.closeButton} onPress={onPress}>
      <IconDeleteWhite />
    </TouchableOpacity>
  );
}
