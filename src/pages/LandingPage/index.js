import React, {useState} from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {ILLogoAppWhite, ILLogoNameWhite} from '../../assets/illustration';
import {TopBar} from '../../components';
import {useOrientation} from '../../hooks';
import * as RootNavigation from '../../RootNavigation';
import styles from './styles';

export default function LandingPage() {
  const orientation = useOrientation();

  const handlerLogin = () => {
    RootNavigation.navigate('Login');
  };
  const handlerRegister = () => {
    RootNavigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.pages}>
      <TopBar orientation={orientation} />
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
            <Text style={styles.fontTitle(orientation)}>Selamat Datang</Text>

            <Text style={styles.font(orientation)}>
              Memerlukan aplikasi pembukuan untuk bisnis? Sekarang kamu bisa
              kelola dan mengamati bisnis dimana saja dari device apapun
            </Text>
          </View>
          <View>
            <TouchableOpacity
              style={[styles.button(orientation), {backgroundColor: 'white'}]}
              onPress={handlerLogin}>
              <Text
                style={[
                  styles.fontButton(orientation),
                  {color: 'black', fontWeight: 'bold'},
                ]}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button(orientation)}
              onPress={handlerRegister}>
              <Text style={[styles.fontButton(orientation), {color: 'white'}]}>
                Daftar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
