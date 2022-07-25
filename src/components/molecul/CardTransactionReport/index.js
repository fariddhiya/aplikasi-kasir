import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ReportBuyContext} from '../../../context';
import styles from './styles';

export default function CardTransactionReport({data, orientation}) {
  const {detailTransaction} = useContext(ReportBuyContext);
  const handlerDetailTransaction = () => {
    detailTransaction({data});
  };

  return (
    <TouchableOpacity
      style={styles.historyTrx(orientation)}
      onPress={handlerDetailTransaction}>
      <View style={styles.rightSide(orientation)}>
        <View
          style={
            data.type === 'SalesOrder'
              ? styles.statusPurchases(orientation)
              : styles.statusSales(orientation)
          }>
          <Text
            style={[
              styles.font(orientation),
              {
                color: data.type === 'SalesOrder' ? '#115f31' : '#bc242d',
                fontWeight: 'bold',
              },
            ]}>
            {data.type === 'SalesOrder' ? 'Penjualan' : 'Belanja'}
          </Text>
        </View>

        <View>
          <Text
            numberOfLines={1}
            style={[
              styles.font(orientation),
              {color: '#4c4c4d', fontWeight: 'bold'},
            ]}>
            {data.name}
          </Text>
          <Text style={[styles.font(orientation), {color: '#6e6d6e'}]}>
            {data.date}
          </Text>
        </View>
      </View>
      <Text style={[styles.font(orientation), {fontWeight: 'bold'}]}>
        {data.total_price_format}
      </Text>
    </TouchableOpacity>
  );
}
