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
import {ILLogoAppWhite, ILLogoNameWhite} from '../../assets';
import {TopBar} from '../../components';
import {AuthContext} from '../../context';
import {useOrientation} from '../../hooks';
import * as RootNavigation from '../../RootNavigation';
import {colors, phoneNumberInput} from '../../utils';
import styles from './styles';

export default function Register() {
  const orientation = useOrientation();
  const [state, setState] = useState();
  const {
    register,
    state: {errorMsg, msg},
  } = useContext(AuthContext);

  const [accountInfo, setAccountInfo] = useState({
    name: '',
    merchant_name: '',
    phone_number: '',
    email: '',
  });

  const handlerLogin = () => {
    RootNavigation.navigate('Login');
  };

  const dataRef = useRef(true);

  const {name, merchant_name, phone_number, email} = accountInfo;

  const handleOnChangeText = (input, fieldInput) => {
    setAccountInfo({...accountInfo, [fieldInput]: input});
  };

  const submitForm = () => {
    register({name, merchant_name, phone_number, email});
    setLoading(true);
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (errorMsg || msg) {
        setLoading(false);
      }
    }

    return () => {
      isMounted = false;
    };
  }, [errorMsg, msg]);

  return (
    <SafeAreaView style={styles.pages}>
      <TopBar
        condition="backButton"
        label="Daftar Akun"
        orientation={orientation}
      />

      <View style={styles.container(orientation)}>
        <View style={styles.logoContainer(orientation)}>
          <Image
            source={ILLogoAppWhite}
            style={styles.logoImage(orientation)}
          />
          <Image
            source={ILLogoNameWhite}
            style={styles.logoName(orientation)}
          />
        </View>
        <View style={styles.formContainer(orientation)}>
          <View style={styles.form(orientation)}>
            <Text style={styles.font(orientation)} maxFontSizeMultiplier={1}>
              Nama Pemilik
            </Text>
            <TextInput
              placeholder="Masukkan Nama Pemilik"
              style={[
                styles.fieldForm(orientation),
                styles.textInputFont(orientation),
              ]}
              placeholderTextColor={colors.text.placeholder}
              onChangeText={value => handleOnChangeText(value, 'name')}
              value={name}
            />
            {/* {errorMsg.name && (
                  <Texting
                    label="Nama valid"
                    color={'red'}
                    weight={'bold'}
                    align={'left'}
                  />
                )} */}
          </View>

          <View style={styles.form(orientation)}>
            <Text style={styles.font(orientation)}>Nama Toko/Usaha</Text>

            <TextInput
              placeholder="Masukkan Nama Toko/Usaha"
              style={[
                styles.fieldForm(orientation),
                styles.textInputFont(orientation),
              ]}
              placeholderTextColor={colors.text.placeholder}
              onChangeText={value => handleOnChangeText(value, 'merchant_name')}
              value={merchant_name}
            />
            {/* {errorMsg.merchant_name && (
                  <Texting
                    label="Nama toko tidak valid"
                    color={'white'}
                    weight={'bold'}
                    align={'left'}
                  />
                )} */}
          </View>

          <View style={styles.form(orientation)}>
            <Text style={styles.font(orientation)}>Nomor Handphone</Text>

            <TextInput
              placeholder="Masukkan Nomor Handphone"
              style={[
                styles.fieldForm(orientation),
                styles.textInputFont(orientation),
              ]}
              placeholderTextColor={colors.text.placeholder}
              onChangeText={value => handleOnChangeText(value, 'phone_number')}
              keyboardType="number-pad"
              value={phoneNumberInput(phone_number)}
            />
            {/* {errorMsg.phone_number && (
                  <Texting
                    label="Nomor Handphone tidak valid"
                    color={'white'}
                    weight={'bold'}
                    align={'center'}
                  />
                )} */}
          </View>

          <View style={styles.form(orientation)}>
            <Text style={styles.font(orientation)}>
              Masukkan Email (opsional)
            </Text>
            <TextInput
              placeholder="Masukkan Email "
              style={[
                styles.fieldForm(orientation),
                styles.textInputFont(orientation),
              ]}
              placeholderTextColor={colors.text.placeholder}
              onChangeText={value => handleOnChangeText(value, 'email')}
            />
          </View>
          {loading ? (
            <ActivityIndicator size={40} />
          ) : (
            <TouchableOpacity
              style={styles.button(orientation)}
              onPress={submitForm}>
              <Text
                style={[
                  styles.font(orientation),
                  {
                    fontWeight: 'bold',
                    color: 'black',
                    textAlign: 'center',
                  },
                ]}>
                Daftar
              </Text>
            </TouchableOpacity>
          )}
          <View style={styles.loginButton(orientation)}>
            <Text style={[styles.font(orientation), {color: 'white'}]}>
              {`Sudah punya akun?  `}
            </Text>
            <TouchableOpacity
              style={{
                borderBottomWidth: 0.7,
                borderBottomColor: 'white',
              }}
              onPress={handlerLogin}>
              <Text style={[styles.font(orientation), {color: 'white'}]}>
                Login disini.
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
