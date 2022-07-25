import {View} from 'react-native';
import {Texting} from '../../atom';
import DeleteButton from './DeleteButton';
import styles from './styles';
import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconDeleteWhite} from '../../../assets/icon';
import {TransactionContext} from '../../../context';

export default function CardBuyItem({name, qty, id, orientation}) {
  const {
    deleteBuyItem,
    state: {dataBuyItem},
  } = useContext(TransactionContext);

  const handlerDeleteItem = () => {
    deleteBuyItem({dataBuyItem, id});
  };
  return (
    <View style={styles.container(orientation)}>
      <Text style={[styles.font(orientation), {fontWeight: 'bold'}]}>
        {name}
      </Text>
      <Text style={[styles.font(orientation), {color: '#a09c9c'}]}>{qty}</Text>

      <TouchableOpacity
        style={styles.removeButton(orientation)}
        onPress={handlerDeleteItem}>
        <IconDeleteWhite width={'80%'} height={'80%'} />
      </TouchableOpacity>
    </View>
  );
}
