import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IconDeleteWhite} from '../../../assets';

export default function FloatingButton({
  width,
  height,
  top,
  bottom,
  right,
  left,
  color,
  icon,
}) {
  const Icon = () => {
    if (icon === 'close') {
      return <IconDeleteWhite />;
    }
    return null;
  };
  return (
    <View
      style={styles.container(width, height, top, bottom, right, left, color)}>
      <Icon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: (width, height, top, bottom, right, left, color) => ({
    width: width ? width : null,
    height: height ? height ,
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  }),
});
