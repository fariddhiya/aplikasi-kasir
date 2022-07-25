import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/color';
import {useOrientation} from '../../../hooks';

export default function TopTabItems({
  title,
  active,
  onPress,
  onLongPress,
  condition,
}) {
  const orientation = useOrientation();

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.button(active, orientation)}>
      <Text style={styles.text(active, orientation)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: (active, orientation) => ({
    fontSize: (orientation.width + orientation.height) / 93,
    fontWeight: active ? 'bold' : 'normal',
    textAlign: 'center',
    color: active ? 'white' : '#3034a4',
  }),
  button: (active, orientation) => ({
    backgroundColor: active ? '#3034a4' : 'white',
    width: orientation.isPotrait
      ? orientation.width * 0.21
      : orientation.width * 0.1,
    height: orientation.isPotrait
      ? orientation.height * 0.04
      : orientation.height * 0.06,
    borderRadius: 50,
    justifyContent: 'center',
  }),
});
