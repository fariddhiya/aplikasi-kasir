import React, {useContext, useEffect, useState} from 'react';
import {Image, SafeAreaView, Text} from 'react-native';
import {ILLogoApp} from '../../assets';
import {AuthContext} from '../../context';
import {useOrientation} from '../../hooks';
import styles from './styles';
import * as RootNavigation from '../../RootNavigation';

export default function SplashScreen() {
  const orientation = useOrientation();
  const [isMounted, setMounted] = useState({});

  const {checkAccount} = useContext(AuthContext);

  useEffect(() => {
    if (isMounted) {
      checkAccount({setMounted});
    }
    return () => setMounted({});
  }, []);

  return (
    <SafeAreaView style={styles.pages(orientation)}>
      <Image source={ILLogoApp} style={styles.image(orientation)} />
      <Text style={styles.font(orientation)}>pinterusaha.ai</Text>
    </SafeAreaView>
  );
}
