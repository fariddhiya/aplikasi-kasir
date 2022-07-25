import {useIsFocused} from '@react-navigation/native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import {ILLogoApp, ILLogoName} from '../../assets';
import {Gap, Texting, TopBar} from '../../components';
import {AuthContext} from '../../context';
import * as RootNavigation from '../../RootNavigation';
import {colors} from '../../utils';
import styles from './styles';
import {useOrientation} from '../../hooks';

export default function OTPScreen({route}) {
  const {token, phone} = route.params;
  const orientation = useOrientation();
  const {
    sendOtp,
    resendOtp,
    state: {errorMsg, msg},
  } = useContext(AuthContext);

  const handlerChangeNumber = () => {
    RootNavigation.navigate('Login');
  };

  const [count, setCount] = useState(0);

  const isFocused = useIsFocused();

  const [loading, setLoading] = useState(false);

  const [resendButton, setResendButton] = useState(false);
  const handleResendButton = () => {
    setTimeout(() => {
      setResendButton({showCountDown: false});
    }, 100);
  };

  const handleResend = () => {
    setResendButton(() => !resendButton);
    setCount(count + 1);
    resendOtp({token: token, phone_number: phone});
  };

  let textInput = useRef(null);
  const lengthInput = 6;
  const [internalVal, setInternalVal] = useState('');

  const onChangeText = val => {
    setInternalVal(val);
  };

  const handlerLoginButton = () => {
    sendOtp({otp: internalVal, token: token, phone_number: phone});
    setLoading(true);
  };

  useEffect(() => {
    if (isFocused) {
      textInput.focus();
    }
  }, [RootNavigation]);

  useEffect(() => {
    let isMounted = true;
    if ((errorMsg || msg) && isMounted) {
      setLoading(false);
    }
    return () => {
      isMounted = false;
    };
  }, [errorMsg, msg]);

  useEffect(() => {
    setLoading(false);
  }, [errorMsg, msg]);

  return (
    <SafeAreaView style={styles.pages}>
      <TopBar condition="backButton" orientation={orientation} />
      <ScrollView>
        <View style={styles.container(orientation)}>
          <View style={styles.topContainer(orientation)}>
            <Image source={ILLogoApp} style={styles.logoImage(orientation)} />
            <Image source={ILLogoName} style={styles.logoName(orientation)} />
          </View>
          <View style={styles.bottomContainer(orientation)}>
            <Text style={styles.textTitle(orientation)}>Masukkan kode OTP</Text>
            {true && <Texting label={errorMsg?.error} weight="bold" />}

            <TextInput
              ref={input => {
                return (textInput = input);
              }}
              onChangeText={onChangeText}
              style={{width: 0, height: 0}}
              value={internalVal}
              maxLength={lengthInput}
              returnKeyType="done"
              keyboardType="numeric"
            />
            <View style={styles.containerInput}>
              {Array(lengthInput)
                .fill()
                .map((data, index) => (
                  <TouchableOpacity
                    onPress={() => textInput.focus()}
                    key={index}
                    style={[
                      styles.cellView(orientation),
                      {
                        borderColor:
                          index === internalVal.length ? '#0844bc' : 'grey',
                      },
                    ]}>
                    <Text
                      onPress={() => textInput.focus()}
                      style={styles.cellText(orientation)}>
                      {internalVal && internalVal.length > 0
                        ? internalVal[index]
                        : ''}
                    </Text>
                  </TouchableOpacity>
                ))}
            </View>
            <Gap height={20} />

            {count < 1 ? (
              resendButton ? (
                <View style={styles.resend(orientation)}>
                  <Text
                    style={styles.text(
                      orientation,
                    )}>{`Belum dapat kode?  `}</Text>
                  <TouchableOpacity
                    onPress={handleResend}
                    style={styles.resendButton}>
                    <Text
                      style={[
                        styles.text(orientation),
                        {color: '#0844bc', fontWeight: 'bold'},
                      ]}>{`Kirim ulang `}</Text>
                  </TouchableOpacity>
                  <Text style={styles.text(orientation)}>{`atau `}</Text>
                  <TouchableOpacity
                    onPress={handlerChangeNumber}
                    style={styles.resendButton}>
                    <Text
                      style={[
                        styles.text(orientation),
                        {color: '#0844bc', fontWeight: 'bold'},
                      ]}>
                      Ganti Nomor
                    </Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <CountDown
                  digitStyle={{backgroundColor: 'transparent'}}
                  digitTxtStyle={styles.countdownFont(orientation)}
                  timeToShow={['S']}
                  timeLabels={{s: 'Detik'}}
                  size={24}
                  until={60}
                  onFinish={handleResendButton}
                  timeLabelStyle={styles.countdownLabelFont(orientation)}
                />
              )
            ) : (
              <View style={styles.resend(orientation)} />
            )}

            {loading ? (
              <ActivityIndicator size={60} />
            ) : (
              <TouchableOpacity
                style={styles.button(orientation)}
                onPress={handlerLoginButton}>
                <Text style={[styles.text(orientation), {color: 'white'}]}>
                  Lanjut
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
