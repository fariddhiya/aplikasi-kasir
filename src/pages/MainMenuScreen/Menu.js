import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {ILHistory, ILOuput, ILProgram, ILTransaction} from '../../assets';
import {Texting} from '../../components';
import * as RootNavigation from '../../RootNavigation';
import styles from './styles';

export default function Menu({orientation}) {
  const handlerBuy = () => {
    RootNavigation.navigate('MainApp', {screen: 'Penjualan'});
  };
  const handlerSale = () => {
    RootNavigation.navigate('MainApp', {screen: 'Belanja'});
  };
  const handlerProgram = () => {
    RootNavigation.navigate('MainApp', {screen: 'Berita'});
  };
  const handlerHistory = () => {
    RootNavigation.navigate('MainApp', {screen: 'Laporan'});
  };
  return (
    <View style={styles.menuContainer(orientation)}>
      <TouchableOpacity
        style={styles.menuIcon(orientation)}
        onPress={handlerBuy}>
        <Image
          source={ILTransaction}
          style={styles.imageMenu(orientation)}
          resizeMode="contain"
        />
        <Text style={styles.font(orientation)}>Penjualan </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuIcon(orientation)}
        onPress={handlerSale}>
        <Image
          source={ILOuput}
          style={styles.imageMenu(orientation)}
          resizeMode="contain"
        />
        <Text style={styles.font(orientation)}>Belanja</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuIcon(orientation)}
        onPress={handlerProgram}>
        <Image
          source={ILProgram}
          style={styles.imageMenu(orientation)}
          resizeMode="contain"
        />
        <Text style={styles.font(orientation)}>Berita</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.menuIcon(orientation)}
        onPress={handlerHistory}>
        <Image
          source={ILHistory}
          style={styles.imageMenu(orientation)}
          resizeMode="contain"
        />
        <Text style={styles.font(orientation)}>Riwayat</Text>
      </TouchableOpacity>
    </View>
  );
}
