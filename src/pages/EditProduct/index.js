import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILAddImageGrey, ILNotFound} from '../../assets';
import {Gap, PhotoModal, TopBar} from '../../components';
import {TransactionContext} from '../../context';
import {useOrientation} from '../../hooks';
import * as RootNavigation from '../../RootNavigation';
import {colors} from '../../utils';
import styles from './styles';

export default function EditProduct({route}) {
  const orientation = useOrientation();
  // let {id, image, name, price, category} = route.params;

  let id = 100;
  let image = null;
  let name = 'farid';
  let price = 10000;
  let category = 'testr';

  const [photoResponse, setPhotoResponse] = useState(null);
  const [modalPhoto, setModalPhoto] = useState(false);

  const handlerModalPhoto = () => {
    setModalPhoto(!modalPhoto);
  };

  const uri = photoResponse?.assets && photoResponse.assets[0].uri;

  const handlerBack = () => {
    RootNavigation.goBack();
  };
  const [loading, setLoading] = useState(false);

  const {
    editItemSale,
    clearError,
    state: {errorMsg, msg},
  } = useContext(TransactionContext);

  const [item, setItem] = useState({
    newName: name,
    newCategory: category,
    newPrice: price,
  });

  const {newName, newCategory, newPrice} = item;

  const handleForm = (input, fieldInput) => {
    setItem({...item, [fieldInput]: input});
  };

  const submitForm = () => {
    editItemSale({
      id: id,
      name: newName,
      category: newCategory,
      price: newPrice,
      image: image,
      uri: uri,
    });

    setLoading(true);
    clearError();
  };

  useEffect(() => {
    setLoading(() => false);
  }, [errorMsg, msg]);

  return (
    <SafeAreaView style={styles.pages}>
      <TopBar
        condition="backButton"
        label="Edit Produk"
        orientation={orientation}
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <View style={styles.boxProduct(orientation)}>
              <Image
                source={uri ? {uri: uri} : image ? {uri: image} : ILNotFound}
                style={styles.imgProduct(orientation)}
              />
              <TouchableOpacity
                style={styles.btnAddImage(orientation)}
                onPress={handlerModalPhoto}>
                <Image
                  source={ILAddImageGrey}
                  style={styles.imgAddImage(orientation)}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.form(orientation)}>
              <Text style={styles.text(orientation)}>Nama Barang</Text>
              <TextInput
                style={styles.fieldForm(orientation)}
                placeholder="Masukkan Nama Barang"
                placeholderTextColor={colors.text.placeholder}
                onChangeText={value => handleForm(value, 'newName')}
                value={newName}
              />
            </View>
            <View style={styles.form(orientation)}>
              <Text style={styles.text(orientation)}>Kategori</Text>
              <TextInput
                style={styles.fieldForm(orientation)}
                placeholder="Masukkan Kategori"
                placeholderTextColor={colors.text.placeholder}
                onChangeText={value => handleForm(value, 'newCategory')}
                value={newCategory}
              />
            </View>
            <View style={styles.form(orientation)}>
              <Text style={styles.text(orientation)}>Harga</Text>
              <TextInput
                style={styles.fieldForm(orientation)}
                placeholder="Masukkan Harga"
                placeholderTextColor={colors.text.placeholder}
                onChangeText={value => handleForm(value, 'newPrice')}>
                {newPrice}
              </TextInput>
            </View>
            <Gap height={10} />
            <View style={styles.buttonContainer(orientation)}>
              {loading ? (
                <ActivityIndicator />
              ) : (
                <TouchableOpacity
                  style={styles.buttonSave(orientation)}
                  onPress={submitForm}>
                  <Text style={[styles.text(orientation), {color: 'white'}]}>
                    Simpan
                  </Text>
                  {/* <Texting label="Simpan" color="white" /> */}
                </TouchableOpacity>
              )}

              <TouchableOpacity
                style={styles.buttonCancel(orientation)}
                onPress={handlerBack}>
                <Text
                  style={[
                    styles.text(orientation),
                    {color: '#7f7f7f', paddingTop: 10},
                  ]}>
                  Batalkan
                </Text>
              </TouchableOpacity>
            </View>
            {modalPhoto && (
              <PhotoModal
                isVisible={modalPhoto}
                onClose={handlerModalPhoto}
                addPhoto={setPhotoResponse}
                orientation={orientation}
              />
            )}
          </View>
        }
      />
    </SafeAreaView>
  );
}
