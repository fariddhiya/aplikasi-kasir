import React, {useContext, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Menu, MenuItem} from 'react-native-material-menu';
import {
  IconAddWhite,
  IconEditBlack,
  IconMeatballsBlack,
  IconRemoveWhite,
  IconTrashBinBlack,
  ILNotFound,
} from '../../../assets';
import {DeleteProduct} from '../../../components';
import {TransactionContext} from '../../../context';
import * as RootNavigation from '../../../RootNavigation';
import styles from './styles';

export default function CardProduct({
  id,
  name,
  price,
  img,
  category,
  quantity,
  orientation,
}) {
  const {
    incrementItemCart,
    decrementItemCart,
    deleteItemSale,
    state: {totalPriceSaleItem, items, dataItem},
  } = useContext(TransactionContext);

  const [deleteItem, setDeleteItem] = useState(false);
  const handlerDeleteItem = () => {
    setDeleteItem(() => !deleteItem);
  };

  const handlerEdit = () => {
    RootNavigation.navigate('EditProduct', {
      id: id,
      image: img,
      name: name,
      price: price,
      category: category,
    });
    setVisibleMenu(false);
  };

  const increaseItem = () => {
    incrementItemCart({
      id,
      name,
      category,
      price,
      img,
      cartItems: items,
      dataItem,
    });
  };

  const decreaseItem = () => {
    if (quantity > 0) {
      decrementItemCart({
        id,
        price,
        cartItems: items,
        dataItem,
      });
    }
  };

  const handlerDelete = () => {
    setDeleteItem(() => !deleteItem);
    setVisibleMenu(false);
  };

  const [visibleMenu, setVisibleMenu] = useState(false);

  const handlerMenu = () => setVisibleMenu(!visibleMenu);

  return (
    <View style={styles.container(orientation)}>
      <View style={styles.header(orientation)}>
        <Text style={styles.fontTitle(orientation)}>{quantity}</Text>

        <Menu
          visible={visibleMenu}
          anchor={
            <TouchableOpacity
              onPress={handlerMenu}
              style={styles.buttonMenuItem(orientation)}>
              <IconMeatballsBlack
                width={orientation.isPotrait ? '100%' : '150%'}
                height={orientation.isPotrait ? '100%' : '150%'}
              />
            </TouchableOpacity>
          }
          onRequestClose={handlerMenu}>
          <MenuItem onPress={handlerEdit}>
            <View style={styles.optionModal}>
              <IconEditBlack
                width={(orientation.width + orientation.height) / 60}
                height={(orientation.width + orientation.height) / 60}
              />
              <Text style={styles.fontMenu(orientation)}>Edit</Text>
            </View>
          </MenuItem>
          <MenuItem onPress={handlerDelete}>
            <View style={styles.optionModal}>
              <IconTrashBinBlack
                width={(orientation.width + orientation.height) / 60}
                height={(orientation.width + orientation.height) / 60}
              />
              <Text style={styles.fontMenu(orientation)}>Hapus</Text>
            </View>
          </MenuItem>
        </Menu>
      </View>

      <Image
        source={img ? {uri: img} : ILNotFound}
        style={styles.image(orientation)}
        resizeMode={img ? 'cover' : 'contain'}
      />
      <View style={styles.footer(orientation)}>
        <View
          style={{
            paddingStart: orientation.isPotrait
              ? orientation.width * 0.02
              : orientation.width * 0.04,
            paddingBottom: orientation.isPotrait
              ? orientation.height * 0.005
              : orientation.height * 0.02,
          }}>
          <Text style={[styles.font(orientation), {fontWeight: 'bold'}]}>
            {name}
          </Text>
          <Text
            style={[
              styles.font(orientation),
              {color: 'green'},
            ]}>{`Rp. ${price}`}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[
              styles.amountButton(orientation),
              {backgroundColor: 'green', borderTopLeftRadius: 15},
            ]}
            onPress={increaseItem}>
            <IconAddWhite
              width={(orientation.width + orientation.height) / 60}
              height={(orientation.width + orientation.height) / 60}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={
              quantity > 0
                ? [
                    styles.amountButton(orientation),
                    {backgroundColor: 'red', borderBottomRightRadius: 15},
                  ]
                : [
                    styles.amountButton(orientation),
                    {backgroundColor: 'grey', borderBottomRightRadius: 15},
                  ]
            }
            onPress={decreaseItem}
            disabled={quantity > 0 ? false : true}>
            <IconRemoveWhite
              width={(orientation.width + orientation.height) / 60}
              height={(orientation.width + orientation.height) / 60}
            />
          </TouchableOpacity>
        </View>
      </View>
      {deleteItem && (
        <DeleteProduct
          isVisible={deleteItem}
          onClose={handlerDeleteItem}
          name={name}
          id={id}
          deleteItemSale={deleteItemSale}
          orientation={orientation}
        />
      )}
    </View>
  );
}
