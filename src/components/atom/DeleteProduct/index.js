import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import {Gap, Texting} from '..';
import {IconTrashBinBlue} from '../../../assets';
import styles from './styles';

export default function DeleteProduct({
  isVisible,
  onClose,
  name,
  id,
  deleteItemSale,
  orientation,
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
      <SafeAreaView style={styles.deleteModal(orientation)}>
        <IconTrashBinBlue
          width={(orientation.width + orientation.height) / 55}
          height={(orientation.width + orientation.height) / 55}
        />
        <Text style={styles.font(orientation)}>{`Delete ${name}`}</Text>

        <Text
          style={[
            styles.font(orientation),
            {
              textAlign: 'center',
              width: '80%',
            },
          ]}>
          {`Apakah Anda yakin untuk menghapus item ${name}?`}
        </Text>
        <View style={styles.confirmationRow}>
          <TouchableOpacity
            onPress={onClose}
            style={[styles.button(orientation), {backgroundColor: 'white'}]}>
            <Text style={[styles.font(orientation), {color: '#282c9c'}]}>
              Tidak
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handlerDelete}
            style={[styles.button(orientation), {backgroundColor: '#282c9c'}]}>
            <Text style={[styles.font(orientation), {color: 'white'}]}>Ya</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
