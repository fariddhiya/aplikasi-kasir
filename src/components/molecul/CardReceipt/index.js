import React from 'react';
import {Image, Text, View} from 'react-native';
import {ILLogoApp} from '../../../assets';
import {numberWithCommas} from '../../../utils';
import {Texting} from '../../atom';
import styles from './styles';

export default function CardReceipt({data, label, orientation}) {
  let height = data.items.length;

  return (
    <View style={styles.container(height, orientation)}>
      <View style={styles.header(orientation)}>
        <Image
          source={ILLogoApp}
          style={styles.logoApp(orientation)}
          resizeMode="contain"
        />
        <Text style={styles.fontTitle(orientation)}>INVOICE</Text>
        <View style={styles.date}>
          <Text style={styles.font(orientation)}>{data.data.date}</Text>
          <Text style={styles.font(orientation)}>{data.data.time}</Text>
        </View>
      </View>
      <View style={styles.numberTrx(orientation)}>
        <Text style={[styles.font(orientation), {color: 'grey'}]}>
          {`No : ${data.data.number}`}
        </Text>

        <Text
          style={[
            styles.font(orientation),
            {
              letterSpacing: 3,
              fontWeight: 'bold',
              color: '#08943c',
              backgroundColor: '#b0f4d4',
              paddingHorizontal: orientation.width * 0.02,
              paddingVertical: orientation.height * 0.005,
              borderRadius: 100,
            },
          ]}>
          LUNAS
        </Text>
      </View>
      <Text
        style={[
          styles.font(orientation),
          {fontWeight: 'bold', textAlign: 'center'},
        ]}>
        {`Toko ${data.data.merchant_name}`}
      </Text>

      <View style={styles.descriptionSales(orientation)}>
        <Text style={styles.font(orientation)}>Daftar Belanja</Text>
        {data.items.map((index, key) => {
          return (
            <View style={styles.itemSale(orientation)} key={key}>
              <Text
                numberOfLines={1}
                style={[
                  styles.font(orientation),
                  {width: '50%', paddingVertical: orientation.height * 0.003},
                ]}>
                {index.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  width: '45%',
                  justifyContent: 'space-between',
                }}>
                <Text numberOfLines={1} style={styles.font(orientation)}>
                  {index.quantity}
                </Text>
                <Text numberOfLines={1} style={styles.font(orientation)}>
                  {`Rp. ${numberWithCommas(index.total)}`}
                </Text>
              </View>
            </View>
          );
        })}
        <View style={styles.totalPayment(orientation)}>
          <Text style={styles.font(orientation)}>Total Pembayaran</Text>
          <Text style={styles.font(orientation)}>
            {data.total_price_format}
          </Text>
        </View>

        <Image
          source={data ? {uri: data.barcode_png} : null}
          style={styles.qrCode(orientation)}
          resizeMode="contain"
        />
        <Text style={[styles.font(orientation), {textAlign: 'center'}]}>
          www.wellcode.io
        </Text>

        <Text
          style={[
            styles.font(orientation),
            {textAlign: 'center', color: '#9c9c9c'},
          ]}>
          Invoice ini adalah bukti pembayaran yang sah
        </Text>
      </View>
    </View>
  );
}
