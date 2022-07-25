import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  IconCartBlue,
  IconCartWhite,
  IconHomeBlue,
  IconHomeWhite,
  IconNewsBlue,
  IconNewsWhite,
  IconReportBlue,
  IconReportWhite,
  IconSaleBlue,
  IconSaleWhite,
} from '../../../assets/icon';
import styles from './styles';

export default function BottomTabItems({title, active, onLongPress, onPress}) {
  const Icon = () => {
    if (title === 'Berita') {
      return active ? <IconNewsWhite /> : <IconNewsBlue />;
    }
    if (title === 'Penjualan') {
      return active ? <IconSaleWhite /> : <IconSaleBlue />;
    }
    if (title === 'Home') {
      return active ? <IconHomeWhite /> : <IconHomeBlue />;
    }
    if (title === 'Belanja') {
      return active ? <IconCartWhite /> : <IconCartBlue />;
    }
    if (title === 'Laporan') {
      return active ? <IconReportWhite /> : <IconReportBlue />;
    }
    return null;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
}
