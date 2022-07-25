import React, {useContext} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {IconDeleteWhite} from '../../../assets';
import {TransactionContext} from '../../../context';
import {Texting} from '../../atom';
import styles from './styles';

export default function CardOtherProduct({name, qty, price, id}) {
  const {
    deleteOtherProduct,
    state: {dataOtherProduct},
  } = useContext(TransactionContext);

  const handlerDeleteProduct = () => {
    deleteOtherProduct({dataOtherProduct, id});
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSide}>
        <Texting label={name} />
        <Texting label={qty} color="#a09c9c" />
      </View>
      <View style={styles.rightSide}>
        <Texting label="Rp. " size={12} weight="bold" />
        <Texting label={price} weight="bold" />
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={handlerDeleteProduct}>
        <IconDeleteWhite />
      </TouchableOpacity>
    </View>
  );
}
