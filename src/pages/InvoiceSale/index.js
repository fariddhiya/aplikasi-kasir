import {useIsFocused} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import {CardReceipt, Texting} from '../../components';
import {TransactionContext} from '../../context';
import {useOrientation} from '../../hooks';
import SkeletonPlaceholder from './SkeletonPlaceholder';
import styles from './styles';

export default function InvoiceSale() {
  const orientation = useOrientation();
  const loadingRef = useRef(true);
  const dataRef = useRef(true);
  const isFocused = useIsFocused();
  const [loading, isLoading] = useState(false);
  const {
    invoiceSale,
    clearData,
    state: {dataInvoice, msg, errorMsg},
  } = useContext(TransactionContext);

  useEffect(() => {
    if (dataRef.current && isFocused) {
      dataRef.current = false;
    }
    if (!dataRef.current && isFocused) {
      invoiceSale();
      isLoading(true);
    }
  }, [msg]);

  useEffect(() => {
    if (loadingRef.current && isFocused) {
      loadingRef.current = false;
    }
    if (loadingRef.current == false) {
      isLoading(false);
    }
  }, [dataInvoice || errorMsg]);

  const handlerHome = () => {
    clearData();
  };

  return (
    <SafeAreaView style={styles.pages}>
      {dataInvoice ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <View style={styles.topBar(orientation)}>
                <Text style={styles.fontTitle(orientation)}>
                  Bukti Transaksi
                </Text>
                <View style={styles.printButton(orientation)}>
                  <View style={styles.circleOrange(orientation)} />
                  <Text
                    style={[styles.fontTitle(orientation), {letterSpacing: 4}]}>
                    PRINT
                  </Text>
                </View>
              </View>
              <CardReceipt
                data={dataInvoice}
                label={'INVOICE'}
                orientation={orientation}
              />

              <TouchableOpacity
                style={styles.saveButton(orientation)}
                onPress={handlerHome}>
                <Text
                  style={[
                    styles.fontTitle(orientation),
                    {fontWeight: 'bold', color: 'white'},
                  ]}>
                  Simpan
                </Text>
              </TouchableOpacity>
            </>
          }
        />
      ) : (
        <SkeletonPlaceholder orientation={orientation} />
      )}
    </SafeAreaView>
  );
}
