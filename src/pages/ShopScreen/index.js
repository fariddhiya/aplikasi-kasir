import {useIsFocused} from '@react-navigation/native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconAddWhite, IconQRCode, IconSearchGrey} from '../../assets';
import {
  AddOtherItem,
  CardProduct,
  EmptyFlatList,
  Gap,
  TopBar,
} from '../../components';
import {AuthContext, TransactionContext} from '../../context';
import {useOrientation} from '../../hooks';
import * as RootNavigation from '../../RootNavigation';
import {colors} from '../../utils';
import ButtonBayar from './ButtonBayar';
import SkeletonPlaceholder from './SkeletonPlaceholder';
import styles from './styles';

export default function ShopScreen({navigation}) {
  const orientation = useOrientation();
  const isFocused = useIsFocused();
  const dataRef = useRef(true);
  const loadingRef = useRef(true);
  const dataHomeRef = useRef(true);
  const [loading, isLoading] = useState(null);
  const handlerAddProduct = () => {
    RootNavigation.navigate('AddProduct');
  };
  const [modal, setModal] = useState(false);
  const handlerModal = () => {
    setModal(() => !modal);
  };

  const {
    listItemSale,
    refreshData,
    state: {totalPriceSaleItem, dataItem, items, msg, errorMsg},
  } = useContext(TransactionContext);

  const {
    state: {dataHome},
  } = useContext(AuthContext);

  useEffect(() => {
    if (dataRef.current && isFocused) {
      dataRef.current = false;
    }
    if (!dataRef.current && isFocused) {
      listItemSale();
      isLoading(true);
      dataRef.current = true;
    }
  }, [msg]);

  useEffect(() => {
    if (loadingRef.current && isFocused) {
      loadingRef.current = false;
    }
    if (!loadingRef.current && isFocused) {
      isLoading(false);
      setRefreshing(false);
      loadingRef.current = true;
    }
  }, [dataItem || errorMsg]);

  useEffect(() => {
    if (dataHomeRef.current && isFocused) {
      dataHomeRef.current = false;
    }
    if (!dataHomeRef.current && isFocused && dataHome !== null) {
      setMerchantName(dataHome?.data?.user?.merchant_name);
    }
  }, [dataHome]);

  const [refreshing, setRefreshing] = useState(false);

  const type = 'sale';

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    refreshData({type});
    listItemSale();
  }, []);

  const [otherProduct, showOtherProduct] = useState(false);

  const handlerOtherProduct = () => {
    showOtherProduct(() => !otherProduct);
  };

  const [merchantName, setMerchantName] = useState(null);

  return (
    <SafeAreaView style={styles.pages}>
      <TopBar
        condition="mainTopBar"
        label={merchantName !== null ? `Toko ${merchantName}` : 'Toko Fulan'}
        orientation={orientation}
      />

      <View style={styles.topContainer(orientation)}>
        <View style={styles.searchContainer(orientation)}>
          <TextInput
            style={[styles.fieldSearch(orientation), styles.font(orientation)]}
            placeholder="Cari Barang .."
            placeholderTextColor="grey"
          />

          <TouchableOpacity style={styles.buttonSearch(orientation)}>
            <IconQRCode
              width={(orientation.width + orientation.height) / 50}
              height={(orientation.width + orientation.height) / 50}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonSearch(orientation)}>
            <IconSearchGrey
              width={(orientation.width + orientation.height) / 50}
              height={(orientation.width + orientation.height) / 50}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.addProduct(orientation)}
          onPress={handlerAddProduct}>
          <IconAddWhite
            width={(orientation.width + orientation.height) / 45}
            height={(orientation.width + orientation.height) / 45}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.container(orientation)}>
        <Text
          style={[
            styles.fontTitle(orientation),
            {color: colors.background.secondary},
          ]}>
          Kategori
        </Text>

        <TouchableOpacity
          style={styles.buttonOtherProduct(orientation)}
          onPress={handlerOtherProduct}>
          <IconAddWhite
            width={(orientation.width + orientation.height) / 65}
            height={(orientation.width + orientation.height) / 65}
          />
          <Text style={[styles.fontTitle(orientation), {color: 'white'}]}>
            Lainnya
          </Text>
        </TouchableOpacity>
      </View>

      {!loading && dataItem ? (
        <>
          {!loading && dataItem.length > 0 ? (
            <FlatList
              style={{
                alignContent: 'center',
              }}
              contentContainerStyle={{
                alignItems: 'center',
              }}
              columnWrapperStyle={{
                alignSelf: 'center',
              }}
              numColumns={2}
              maxToRenderPerBatch={2}
              updateCellsBatchingPeriod={2}
              initialNumToRender={2}
              data={dataItem}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={true}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <CardProduct
                    price={item.price}
                    img={item.image_url}
                    name={item.name}
                    id={item.id}
                    quantity={item.quantity}
                    category={item.category}
                    orientation={orientation}
                  />
                );
              }}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  size={
                    orientation.width > 600 && orientation.height > 600
                      ? 'large'
                      : 'default'
                  }
                />
              }
              ListFooterComponent={
                totalPriceSaleItem > 0 ? (
                  <Gap
                    height={
                      orientation.isPotrait && orientation.tablet
                        ? orientation.height * 0.14
                        : orientation.tablet
                        ? orientation.height * 0.2
                        : orientation.isPotrait
                        ? orientation.height * 0.14
                        : orientation.height * 0.27
                    }
                  />
                ) : (
                  <Gap
                    height={
                      orientation.tablet
                        ? orientation.height * 0.1
                        : orientation.height * 0.15
                    }
                  />
                )
              }
              ListHeaderComponent={
                <Text
                  style={[
                    styles.font(orientation),
                    {color: 'grey', textAlign: 'center'},
                  ]}>
                  Tarik untuk memperbarui
                </Text>
              }
            />
          ) : (
            <EmptyFlatList
              numColumns={2}
              refreshing={refreshing}
              onRefresh={onRefresh}
              label={'Barang Penjualan'}
            />
          )}
        </>
      ) : (
        <SkeletonPlaceholder orientation={orientation} />
      )}
      {totalPriceSaleItem > 0 && <ButtonBayar orientation={orientation} />}
      {otherProduct && (
        <AddOtherItem
          handleClose={handlerOtherProduct}
          showModal={otherProduct}
          orientation={orientation}
        />
      )}
    </SafeAreaView>
  );
}
