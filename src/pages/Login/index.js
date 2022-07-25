import React, {useContext, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ILLogoAppWhite, ILLogoNameWhite} from '../../assets';
import {Gap, Texting, TopBar} from '../../components';
import {AuthContext} from '../../context';
import useOrientation from '../../hooks/useOrientation';
import * as RootNavigation from '../../RootNavigation';
import styles from './styles';

export default function Login() {
  const {
    signIn,
    state: {errorMsg, msg},
  } = useContext(AuthContext);

  const [phoneNumber, setPhoneNumber] = useState(null);

  const orientation = useOrientation();

  const handlerLogin = () => {
    RootNavigation.navigate('Register');
  };

  const [loading, setLoading] = useState(false);

  const submitForm = () => {
    signIn({phone_number: phoneNumber});
    setLoading(true);
  };

  useEffect(() => {
    let isMounted = true;
    if ((errorMsg || msg) && isMounted) {
      setLoading(false);
    }
    return () => {
      isMounted = false;
    };
  }, [errorMsg, msg]);

  return (
    <SafeAreaView style={styles.pages}>
      <TopBar condition="backButton" orientation={orientation} />
      <View style={styles.container(orientation)}>
        <View style={styles.topContainer(orientation)}>
          <Image
            source={ILLogoAppWhite}
            style={styles.logoImage(orientation)}
          />
          <Image
            source={ILLogoNameWhite}
            style={styles.logoName(orientation)}
          />
        </View>

        <View style={styles.bottomContainer(orientation)}>
          <View>
            <Text style={styles.titleText(orientation)}>Login</Text>
            <Text style={styles.text(orientation)}>Nomor Handphone</Text>

            <TextInput
              placeholder="Masukkan Nomor Handphone"
              style={[styles.textInput(orientation)]}
              onChangeText={value => setPhoneNumber(value)}
              autoCapitalize="none"
              autoComplete="tel"
              keyboardType="number-pad"
              value={phoneNumber}
              autoCorrect={false}
              maxLength={16}
            />
          </View>
          {errorMsg ? (
            <>
              <Texting
                label={errorMsg.error}
                color={'white'}
                align={'center'}
                weight={'bold'}
              />
              {loading && <Gap height={20} />}
            </>
          ) : (
            <Gap height={20} />
          )}

          {loading ? (
            <ActivityIndicator size={40} />
          ) : (
            <TouchableOpacity
              style={[styles.button(orientation), {backgroundColor: 'white'}]}
              onPress={submitForm}>
              <Text style={[styles.text(orientation), {color: 'black'}]}>
                Login
              </Text>
            </TouchableOpacity>
          )}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.text(orientation)}>
              {`Belum punya akun?  `}
            </Text>

            <TouchableOpacity
              style={{
                borderBottomWidth: orientation.height * 0.001,
                borderBottomColor: 'white',
              }}
              onPress={handlerLogin}>
              <Text style={styles.text(orientation)}>Daftar disini.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
