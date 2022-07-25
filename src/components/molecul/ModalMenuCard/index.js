import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {onCameraPress, onGalleryPress} from '../../../utils';
import {Texting} from '../../atom';
import styles from './styles';

export default function PhotoModal({isVisible, onClose, addPhoto}) {
  const handlerCamera = () => {
    onClose();
    onCameraPress(addPhoto);
  };
  const handlerGallery = () => {
    onClose();
    onGalleryPress(addPhoto);
  };
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      onDismiss={onClose}
      animationType="fade">
      <SafeAreaView style={styles.modal}>
        <Texting label="Pilih Foto" textSize={20} />
        <TouchableOpacity onPress={handlerCamera} style={styles.photoButton}>
          <Texting label="Kamera" color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlerGallery} style={styles.photoButton}>
          <Texting label="Galeri" color="white" />
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
}
