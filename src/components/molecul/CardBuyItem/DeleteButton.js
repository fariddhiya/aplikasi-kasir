import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconDeleteWhite} from '../../../assets/icon';
import {TransactionContext} from '../../../context';

export default function DeleteButton({id}) {
  const {
    deleteBuyItem,
    state: {dataBuyItem},
  } = useContext(TransactionContext);

  const handlerDeleteItem = () => {
    deleteBuyItem({dataBuyItem, id});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlerDeleteItem}>
      <IconDeleteWhite />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    position: 'absolute',
    top: -5,
    right: -5,
  },
});
