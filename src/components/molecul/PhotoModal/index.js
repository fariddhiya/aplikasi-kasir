import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Modal from 'react-native-modal';
import {onCameraPress, onGalleryPress} from '../../../utils';
import {Gap, Texting} from '../../atom';
import styles from './styles';

export default function PhotoModal({
  isVisible,
  onClose,
  addPhoto,
  orientation,
}) {
  const handlerCamera = () => {
    onClose();
    onCameraPress({addPhoto});
  };
  const handlerGallery = () => {
    onClose();
    onGalleryPress({addPhoto});
  };
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      onDismiss={onClose}
      animationType="fade">
      <SafeAreaView style={styles.photoModal(orientation)}>
        <Text style={styles.fontTitle(orientation)}>Pilih Foto</Text>

        <TouchableOpacity
          onPress={handlerCamera}
          style={styles.photoButton(orientation)}>
          <Text style={styles.font(orientation)}>Kamera</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlerGallery}
          style={styles.photoButton(orientation)}>
          <Text style={styles.font(orientation)}>Gallery</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
}
