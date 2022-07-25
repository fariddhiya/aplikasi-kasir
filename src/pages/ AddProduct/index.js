import {useIsFocused} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
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
import {IconAddPhotoGrey, IconCameraWhite, IconErrorRed} from '../../assets';
import {PhotoModal, TopBar} from '../../components';
import {TransactionContext} from '../../context';
import {useOrientation} from '../../hooks';
import * as RootNavigation from '../../RootNavigation';
import styles from './styles';

export default function AddProduct() {
  const orientation = useOrientation();
  const loadingRef = useRef(true);
  const isFocused = useIsFocused();
  const [photoResponse, setPhotoResponse] = useState(null);
  const [modalPhoto, setModalPhoto] = useState(false);
  const [progress, setProgress] = useState(0);
  const handlerModalPhoto = () => {
    setModalPhoto(() => !modalPhoto);
  };
  const closeModalPhoto = () => {
    setModalPhoto(false);
  };

  const uri = photoResponse?.assets && photoResponse.assets[0].uri;

  const images = uri;

  const {
    addItemSale,
    clearData,
    state: {errorMsg, msg},
  } = useContext(TransactionContext);

  const [newItem, setNewItem] = useState({
    name: null,
    category: null,
    price: null,
  });

  const {name, category, price} = newItem;

  const handleForm = (input, fieldInput) => {
    setNewItem({...newItem, [fieldInput]: input});
  };

  const handlerBack = () => {
    RootNavigation.goBack('');
  };

  const submitForm = () => {
    addItemSale({name, category, price, images});
    setLoading(true);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loadingRef.current && isFocused) {
      loadingRef.current = false;
    }
    if (!loadingRef.current && isFocused) {
      setLoading(() => false);
    }
  }, [errorMsg, msg]);

  return (
    <SafeAreaView style={styles.pages}>
      <TopBar
        label="Tambah Produk"
        condition="backButton"
        orientation={orientation}
      />
      <FlatList
        ListHeaderComponent={
          <View style={styles.container(orientation)}>
            <View style={styles.content(orientation)}>
              <View style={styles.form(orientation)}>
                <Text style={styles.font(orientation)}>Nama Item</Text>
                {!errorMsg.name ? (
                  <TextInput
                    style={styles.fieldForm(orientation)}
                    placeholder="Masukkan nama item"
                    onChangeText={value => handleForm(value, 'name')}
                    value={name}
                  />
                ) : (
                  <View style={styles.fieldError}>
                    <TextInput
                      style={styles.fieldErrorForm}
                      placeholder="Masukkan nama item"
                      onChangeText={value => handleForm(value, 'name')}
                      value={name}
                    />
                    <View style={styles.warningIcon}>
                      <IconErrorRed />
                    </View>
                  </View>
                )}
              </View>

              <View style={styles.form(orientation)}>
                <Text style={styles.font(orientation)}>Kategori</Text>
                {!errorMsg.category ? (
                  <TextInput
                    style={styles.fieldForm(orientation)}
                    placeholder="Masukkan Kategori"
                    onChangeText={value => handleForm(value, 'category')}
                    value={category}
                  />
                ) : (
                  <View style={styles.fieldError}>
                    <TextInput
                      style={styles.fieldErrorForm}
                      placeholder="Masukkan Kategori"
                      onChangeText={value => handleForm(value, 'category')}
                      value={category}
                    />
                    <View style={styles.warningIcon}>
                      <IconErrorRed />
                    </View>
                  </View>
                )}
              </View>

              <View style={styles.form(orientation)}>
                <Text style={styles.font(orientation)}>Kategori</Text>
                {!errorMsg.price ? (
                  <TextInput
                    style={styles.fieldForm(orientation)}
                    placeholder="Masukkan Harga"
                    onChangeText={value => handleForm(value, 'price')}
                    value={price}
                  />
                ) : (
                  <View style={styles.fieldError}>
                    <TextInput
                      style={styles.fieldErrorForm}
                      placeholder="Masukkan Harga"
                      onChangeText={value => handleForm(value, 'price')}
                      value={price}
                    />
                    <View style={styles.warningIcon}>
                      <IconErrorRed />
                    </View>
                  </View>
                )}
              </View>

              <View style={styles.form(orientation)}>
                <Text style={styles.font(orientation)}>Tambah Gambar</Text>

                {uri ? (
                  <View style={styles.imageForm(orientation)}>
                    <Image
                      source={{uri}}
                      style={styles.photoItem(orientation)}
                      resizeMode="contain"
                    />
                    <TouchableOpacity
                      style={styles.editPhoto(orientation)}
                      onPress={handlerModalPhoto}>
                      <IconCameraWhite width={'60%'} height={'60%'} />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    style={styles.imageForm(orientation)}
                    onPress={handlerModalPhoto}>
                    <IconAddPhotoGrey width={'50%'} height={'50%'} />
                  </TouchableOpacity>
                )}
              </View>
            </View>
            {loading ? (
              <View style={[styles.buttonSave, {backgroundColor: 'white'}]}>
                <ActivityIndicator size={40} />
              </View>
            ) : (
              <TouchableOpacity
                style={styles.buttonSave(orientation)}
                onPress={submitForm}>
                <Text style={[styles.font(orientation), {color: 'white'}]}>
                  Simpan
                </Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.buttonCancel} onPress={handlerBack}>
              <Text style={[styles.font(orientation), {color: '#7f7f7f'}]}>
                Batalkan
              </Text>
            </TouchableOpacity>
            {modalPhoto && (
              <PhotoModal
                isVisible={modalPhoto}
                onClose={closeModalPhoto}
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
