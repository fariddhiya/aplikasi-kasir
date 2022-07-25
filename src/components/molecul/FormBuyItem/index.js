import React from 'react';
import {TextInput, View} from 'react-native';
import {Gap, Texting} from '../../atom';
import {colors} from '../../../utils';
import RemoveButton from './RemoveButton';
import styles from './styles';

export default function FormBuyItem({deleteHandler, keys}) {
  return (
    <View style={styles.container} key={keys}>
      <View style={styles.form}>
        <Texting label={`Barang ke-${keys + 1}`} size={16} />
      </View>

      <View style={styles.form}>
        <Texting label="Nama Item" width={280} />
        <TextInput
          style={styles.fieldForm}
          placeholder="Pisang"
          placeholderTextColor={colors.text.placeholder}
        />
      </View>
      <Gap height={10} />
      <View style={styles.form}>
        <Texting label="Satuan" width={280} />
        <TextInput
          style={styles.fieldForm}
          placeholder="25 Buah"
          placeholderTextColor={colors.text.placeholder}
        />
      </View>
      <RemoveButton onPress={() => deleteHandler()} />
    </View>
  );
}
