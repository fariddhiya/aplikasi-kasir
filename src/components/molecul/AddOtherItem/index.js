import React, {useContext, useState} from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {TransactionContext} from '../../../context';
import {Gap, Texting} from '../../atom';
import styles from './styles';

export default function AddOtherItem({showModal, handleClose, orientation}) {
  const {addOtherProduct} = useContext(TransactionContext);

  const [dataItem, setDataItem] = useState({
    id: '',
    name: null,
    price: null,
    quantity: null,
  });

  const {id, name, price, quantity} = dataItem;

  const handleForm = (input, fieldInput) => {
    setDataItem({...dataItem, [fieldInput]: input});
  };

  const submitForm = () => {
    addOtherProduct({id, name, price, quantity});
    handleClose();
    setDataItem({
      name: null,
      price: null,
      quantity: null,
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
        <Text style={[styles.fontTitle(orientation), {textAlign: 'center'}]}>
          Tambah Produk Lainnya
        </Text>
        <View style={{}}>
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
            onChangeText={value => handleForm(value, 'quantity')}
            autoCapitalize="none"
            autoComplete="tel"
            keyboardType="number-pad"
            value={quantity}
          />
          <TextInput
            style={styles.textInput(orientation)}
            placeholder={'Harga'}
            placeholderTextColor={'#7f7f7f'}
            onChangeText={value => handleForm(value, 'price')}
            autoCapitalize="none"
            autoComplete="tel"
            keyboardType="number-pad"
            value={price}
          />
        </View>
        <View style={{alignItems: 'center'}}>
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
