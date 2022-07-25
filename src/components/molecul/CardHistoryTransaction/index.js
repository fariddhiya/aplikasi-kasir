import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {Gap, Texting} from '../../atom';
import styles from './styles';

export default function CardHistoryTransaction({
  type,
  price,
  status,
  date,
  name,
  keys,
}) {
  return (
    <View key={keys} style={styles.container}>
      <Texting label={type} color={'#08943c'} weight="bold" />

      <Gap height={5} />
      <View style={styles.contentHistorySale} key={keys}>
        <Text numberOfLines={1} style={styles.nameItem} key={keys}>
          {name}
        </Text>
        <Texting label={price} weight="bold" />
      </View>
      <Gap height={5} />
      <View style={styles.contentHistorySale}>
        <Texting label={date} color={'#a6a6a6'} size={13} />
        <View style={styles.iconStatus}>
          <Texting
            label={status ? 'Berhasil' : null}
            color={'#098254'}
            weight="bold"
            size={12}
          />
        </View>
      </View>
    </View>
  );
}
