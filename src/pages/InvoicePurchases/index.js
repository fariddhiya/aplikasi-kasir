import React, {useContext} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILLogoApp} from '../../assets';
import {TopBar} from '../../components';
import {TransactionContext} from '../../context';
import {useOrientation} from '../../hooks';
import * as RootNavigation from '../../RootNavigation';
import {FormatterDate} from '../../utils';
import styles from './styles';

export default function InvoicePurchases() {
  const orientation = useOrientation();
  const {
    refreshData,
    state: {dataPurchasesInvoice},
  } = useContext(TransactionContext);
  let height = dataPurchasesInvoice.data.length;

  const handlerSaveButton = () => {
    RootNavigation.reset('MainApp');
    refreshData({type: 'buyItem'});
  };

  const id = dataPurchasesInvoice.id.slice(9, 30);

  return (
    <SafeAreaView style={styles.pages}>
      <TopBar
        condition="mainTopBar"
        label="Struk Belanja"
        orientation={orientation}
      />

      <FlatList
        ListHeaderComponent={
          <View style={styles.container(height, orientation)}>
            <View style={styles.header(orientation)}>
              <Image
                source={ILLogoApp}
                style={styles.logoApp(orientation)}
                resizeMode="contain"
              />
              <View>
                <Text
                  style={[styles.fontTitle(orientation), {fontWeight: 'bold'}]}>
                  Riwayat Transaksi
                </Text>
                <Text style={styles.font(orientation)}>
                  {FormatterDate(new Date())}
                </Text>
              </View>
            </View>

            <View style={styles.numberTrx(orientation)}>
              <Text style={[styles.font(orientation), {color: 'grey'}]}>
                {id}
              </Text>
              <Text
                style={[
                  styles.font(orientation),
                  styles.statusPayment(orientation),
                ]}>
                LUNAS
              </Text>
            </View>

            <View style={styles.descriptionSales(orientation)}>
              <Text style={styles.font(orientation)}>Daftar Belanja</Text>

              {dataPurchasesInvoice.data.map((index, key) => {
                return (
                  <View style={styles.itemSale(orientation)} key={key}>
                    <Text numberOfLines={1} style={styles.font(orientation)}>
                      {index.name}
                    </Text>
                    <Text numberOfLines={1} style={styles.font(orientation)}>
                      {index.quantity}
                    </Text>
                  </View>
                );
              })}

              <View style={styles.totalPayment(orientation)}>
                <Text style={styles.font(orientation)}>Total Pembayaran</Text>
                <Text style={[styles.font(orientation), {fontWeight: 'bold'}]}>
                  {`Rp. ${dataPurchasesInvoice.total_price}`}
                </Text>
              </View>
            </View>
          </View>
        }
      />
      <TouchableOpacity
        style={styles.saveButton(orientation)}
        onPress={handlerSaveButton}>
        <Text style={[styles.font(orientation), {color: 'white'}]}>Simpan</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
