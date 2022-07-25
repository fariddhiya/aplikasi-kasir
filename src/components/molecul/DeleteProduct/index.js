import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {IconTrashBinBlue} from '../../../assets';
import {Gap, Texting} from '../../../components';
import styles from './styles';

export default function DeleteProduct({
  isVisible,
  onClose,
  name,
  id,
  deleteItemSale,
}) {
  const handlerDelete = () => {
    deleteItemSale({id});
    onClose();
  };
  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      onDismiss={onClose}
      animationType="fade">
      <SafeAreaView style={styles.deleteModal}>
        <IconTrashBinBlue />
        <Texting label={`Delete ${name}`} textSize={20} />
        <Gap height={20} />
        <Texting label={`Apakah Anda yakin untuk menghapus item ${name}?`} />
        <View style={styles.confirmationRow}>
          <TouchableOpacity onPress={onClose} style={styles.noButton}>
            <Texting label="Tidak" color={'#282c9c'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handlerDelete} style={styles.yesButton}>
            <Texting label="Ya" color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
