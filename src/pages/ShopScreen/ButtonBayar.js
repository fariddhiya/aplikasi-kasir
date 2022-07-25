import React, {useContext, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {CardItemSaleCart, Gap, Texting} from '../../components';
import {TransactionContext} from '../../context';
import styles from './styles';

export default function ButtonBayar({orientation}) {
  const {
    state: {totalPriceSaleItem, items},
  } = useContext(TransactionContext);

  const [popUp, setPopUp] = useState(false);

  const handlerPopup = () => {
    setPopUp(() => !popUp);
  };

  const closePopup = () => {
    setPopUp(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.floatingButton(orientation)}
        onPress={handlerPopup}>
        <Text style={[styles.font(orientation), {color: 'white'}]}>
          {`Total Belanja : Rp. ${totalPriceSaleItem}`}
        </Text>

        <View style={styles.buttonPayment(orientation)}>
          <Text
            style={[
              styles.font(orientation),
              {textAlign: 'center', color: 'white'},
            ]}>
            Bayar
          </Text>
        </View>
      </TouchableOpacity>

      {popUp && (
        <PopUp
          isVisible={popUp}
          handlerClose={handlerPopup}
          totalPriceSaleItem={totalPriceSaleItem}
          orientation={orientation}
        />
      )}
    </>
  );
}

function PopUp({isVisible, handlerClose, totalPriceSaleItem, orientation}) {
  const {
    incrementItemCart,
    decrementItemCart,
    paymentSale,
    state: {items},
  } = useContext(TransactionContext);

  const handlerPaymentSale = () => {
    paymentSale({items});
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackButtonPress={handlerClose}
      onBackdropPress={handlerClose}
      onDismiss={handlerClose}
      animationType="fade">
      <SafeAreaView style={styles.modalPaymentContainer(orientation)}>
        <View style={styles.headerCart(orientation)}>
          <Text style={[styles.font(orientation), {fontWeight: 'bold'}]}>
            Penjualan
          </Text>
          <Text
            style={[
              styles.fontMini(orientation),
              {fontWeight: 'bold', color: 'grey'},
            ]}>
            EDIT CART
          </Text>
        </View>

        <FlatList
          ListFooterComponent={<Gap height={80} />}
          maxToRenderPerBatch={2}
          updateCellsBatchingPeriod={2}
          initialNumToRender={2}
          showsVerticalScrollIndicator={false}
          removeClippedSubviews={true}
          keyExtractor={(item, key) => key}
          data={items}
          renderItem={({item}) => {
            return (
              <CardItemSaleCart
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                qty={item.quantity}
                orientation={orientation}
              />
            );
          }}
        />
        <TouchableOpacity
          style={[
            styles.floatingButton(orientation),
            {
              bottom:
                orientation.isPotrait && orientation.tablet
                  ? orientation.height * -0.095
                  : orientation.tablet
                  ? orientation.height * -0.12
                  : orientation.isPotrait
                  ? orientation.height * -0.1
                  : orientation.height * -0.18,
            },
          ]}
          onPress={handlerPaymentSale}>
          <Text style={styles.font(orientation)}></Text>
          <Text style={[styles.font(orientation), {color: 'white'}]}>
            {`Total Belanja : Rp. ${totalPriceSaleItem}`}
          </Text>

          <View style={styles.buttonPayment(orientation)}>
            <Text
              style={[
                styles.font(orientation),
                {
                  color: 'white',
                  textAlign: 'center',
                  textAlignVertical: 'center',
                },
              ]}>
              Bayar
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
}
