import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ILAddImageGrey} from '../../assets';

export default function ButtonAddImage({onPress}) {
  return (
    <TouchableOpacity style={styles.btnAddImage} onPress={onPress}>
      <Image source={ILAddImageGrey} style={styles.imgAddImage} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnAddImage: {
    backgroundColor: '#3034a4',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
  },
  imgAddImage: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: -20,
    right: -20,
    borderRadius: 50,
  },
});
