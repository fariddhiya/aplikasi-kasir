import React, {useContext, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Modal from 'react-native-modal';
import uuid from 'react-native-uuid';
import {TransactionContext} from '../../../context';
import styles from './styles';

export default function AddBuyItem({showModal, handleClose, orientation}) {
  const {
    listBuyItem,
    state: {dataBuyItem},
  } = useContext(TransactionContext);

  const [dataItem, setDataItem] = useState({
    name: null,
    qty: null,
  });

  const {name, qty} = dataItem;

  const handleForm = (input, fieldInput) => {
    setDataItem({...dataItem, [fieldInput]: input});
  };
  const id = uuid.v4();

  const submitForm = () => {
    listBuyItem({id, name, qty});
    handleClose();
    setDataItem({
      name: null,
      qty: null,
    });
  };

  return (
    <Modal
      isVisible={showModal}
      onBackButtonPress={handleClose}
      onBackdropPress={handleClose}
      onDismiss={handleClose}
      animationType="fade">
      <View style={styles.container(orientation)}>
        <Text style={styles.fontTitle(orientation)}>Tambah Item Custom</Text>
        <View>
          <TextInput
            style={styles.textInput(orientation)}
            placeholder={'Nama Item'}
            placeholderTextColor={'#7f7f7f'}
            onChangeText={value => handleForm(value, 'name')}
            autoCapitalize="none"
            value={name}
          />
          <TextInput
            style={styles.textInput(orientation)}
            placeholder={'Satuan'}
            placeholderTextColor={'#7f7f7f'}
            onChangeText={value => handleForm(value, 'qty')}
            autoCapitalize="none"
            value={qty}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.addButton(orientation)}
            onPress={submitForm}>
            <Text
              style={[
                styles.font(orientation),
                {color: 'white', fontWeight: 'bold'},
              ]}>
              Tambah
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancelButton} onPress={handleClose}>
            <Text style={[styles.font(orientation), {color: '#7f7f7f'}]}>
              Batal
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
