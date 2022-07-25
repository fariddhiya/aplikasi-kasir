import React, {useCallback} from 'react';
import {PermissionsAndroid} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const options = {
  saveToPhotos: true,
  mediaType: 'photo',
  includeBase64: false,
  selectionLimit: 1,
  maxHeight: 360,
  maxWidth: 640,
  cameraType: 'back',
};

const onGalleryPress = async ({addPhoto}) => {
  await ImagePicker.launchImageLibrary(options, addPhoto);
};

const onCameraPress = async ({addPhoto}) => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      await ImagePicker.launchCamera(options, addPhoto);
    }
  } catch (err) {
    console.warn(err);
  }
};

export {onGalleryPress, onCameraPress};
