import React, {useContext} from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {IconAddGrey, IconRemoveGrey, ILNotFound} from '../../../assets';
import {TransactionContext} from '../../../context';
import {Texting} from '../../atom';
import styles from './styles';

export default function CardItemSaleCart({
  id,
  name,
  price,
  img,
  qty,
  orientation,
}) {
  const {
    incrementItemCart,
    decrementItemCart,
    state: {items, dataItem, totalPriceSaleItem},
  } = useContext(TransactionContext);

  const handlerIncrement = () => {
    incrementItemCart({price, cartItems: items, id, dataItem});
  };

  const handlerDecrement = () => {
    if (qty > 0) {
      decrementItemCart({price, cartItems: items, id, dataItem});
    }
  };

  return (
    <View style={styles.container(orientation)}>
      <Image
        style={styles.image(orientation)}
        source={img ? {uri: img} : ILNotFound}
        resizeMode="contain"
      />

      <View
        style={{
          width: '55%',
          paddingStart: orientation.width * 0.025,
          alignSelf: 'center',
        }}>
        <Text style={[styles.font(orientation), {fontWeight: 'bold'}]}>
          {name}
        </Text>
        <Text style={[styles.font(orientation), {color: 'grey'}]}>
          {`Rp. ${price}`}
        </Text>
        {/* <Texting label={`Rp. ${price}`} size={12} color="grey" /> */}
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          onPress={handlerDecrement}
          style={styles.buttonEditAmount(orientation)}>
          <IconRemoveGrey width={'60%'} height={'60%'} />
        </TouchableOpacity>
        <Text style={styles.qtyBox(orientation)}>{qty}</Text>
        <TouchableOpacity
          onPress={handlerIncrement}
          style={styles.buttonEditAmount(orientation)}>
          <IconAddGrey width={'60%'} height={'60%'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
