import React, {useContext, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconAddWhite} from '../../assets';
import {AddBuyItem, CardBuyItem, Gap, Texting, TopBar} from '../../components';
import {TransactionContext} from '../../context';
import {useOrientation} from '../../hooks';
import styles from './styles';

export default function BuyItemScreen() {
  const orientation = useOrientation();

  const {
    saveBuyItemAPI,
    state: {dataBuyItem},
  } = useContext(TransactionContext);

  const [showModal, setShowModal] = useState(false);
  const handlerModal = () => {
    setShowModal(() => !showModal);
  };

  const [price, setPrice] = useState(null);

  const submitForm = () => {
    saveBuyItemAPI({dataBuyItem, total_price: price});
    setPrice(null);
  };

  return (
    <SafeAreaView style={styles.pages}>
      <TopBar
        label="Belanja Barang"
        condition="mainTopBar"
        orientation={orientation}
      />
      <FlatList
        ListFooterComponent={<Gap height={220} />}
        maxToRenderPerBatch={2}
        updateCellsBatchingPeriod={2}
        initialNumToRender={2}
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
        style={{flexGrow: 0}}
        keyExtractor={(index, value) => value}
        data={dataBuyItem}
        renderItem={({item}) => {
          return (
            <CardBuyItem
              name={item.name}
              qty={item.quantity}
              price={item.price}
              id={item.id}
              orientation={orientation}
            />
          );
        }}
      />
      <View style={styles.container(orientation)}>
        <Text style={[styles.font(orientation), {textAlign: 'center'}]}>
          Total belanja
        </Text>

        <TextInput
          style={styles.priceInput(orientation)}
          onChangeText={value => value.replace(/[^0-9]/g, '')}
          autoCapitalize="none"
          keyboardType="numeric"
          placeholder={'Masukkan total harga belanja'}
          onChangeText={value => setPrice(value)}
          value={price}
        />

        <View style={styles.row(orientation)}>
          <TouchableOpacity
            style={styles.saveButton(orientation)}
            onPress={submitForm}>
            <Text
              style={[
                styles.font(orientation),
                {fontWeight: 'bold', color: 'white'},
              ]}>
              Simpan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addButton(orientation)}
            onPress={handlerModal}>
            <IconAddWhite width={'90%'} height={'90%'} />
          </TouchableOpacity>
        </View>
        <AddBuyItem
          handleClose={handlerModal}
          showModal={showModal}
          orientation={orientation}
        />
      </View>
    </SafeAreaView>
  );
}
