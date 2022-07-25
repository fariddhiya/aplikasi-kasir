import React, {useContext} from 'react';
import {FlatList, Image, SafeAreaView, Text, View} from 'react-native';
import {ILLogoApp} from '../../assets';
import {TopBar} from '../../components';
import {ReportBuyContext} from '../../context';
import {useOrientation} from '../../hooks';
import styles from './styles';

export default function DetailTransactionReport() {
  const {
    state: {dataDetailTransaction},
  } = useContext(ReportBuyContext);
  const orientation = useOrientation();

  const data = dataDetailTransaction.data;

  let height = data.items.length;

  const id = dataDetailTransaction.data.id.slice(9, 30);

  return (
    <SafeAreaView style={styles.pages}>
      <TopBar
        condition={'backButton'}
        label={`Riwayat`}
        orientation={orientation}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.container(height, orientation)}>
            <View
              style={{
                flexDirection: 'row',
                width: orientation.isPotrait ? '100%' : '50%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <Image
                source={ILLogoApp}
                style={styles.logoApp(orientation)}
                resizeMode="contain"
              />
              <View>
                <Text
                  style={[
                    styles.fontTitle(orientation),
                    {textAlign: 'center', fontWeight: 'bold'},
                  ]}>
                  Riwayat Transaksi
                </Text>
                <Text style={[styles.font(orientation), {textAlign: 'center'}]}>
                  {data.date}
                </Text>
              </View>
            </View>
            <View>
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
            </View>

            <View style={styles.descriptionSales(orientation)}>
              <Text style={styles.font(orientation)}>Daftar Belanja</Text>

              {data.items.map((index, key) => {
                const price = index.unit_price_cents.slice(
                  0,
                  index.unit_price_cents.length - 4,
                );
                return (
                  <View style={styles.itemSale(orientation)} key={key}>
                    <Text numberOfLines={1} style={styles.font(orientation)}>
                      {index.item_name}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '40%',
                        justifyContent: 'space-between',
                      }}>
                      <Text numberOfLines={1} style={styles.font(orientation)}>
                        {index.quantity}
                      </Text>
                      <Text numberOfLines={1} style={styles.font(orientation)}>
                        {`Rp. ${price}`}
                      </Text>
                    </View>
                  </View>
                );
              })}

              <View style={styles.totalPayment(orientation)}>
                <Text style={styles.font(orientation)}>Total Pembayaran</Text>
                <Text style={[styles.font(orientation), {fontWeight: 'bold'}]}>
                  {data.total_price_format}
                </Text>
              </View>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
