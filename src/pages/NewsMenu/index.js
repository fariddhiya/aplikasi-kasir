import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {TopBar} from '../../components';
import {useOrientation} from '../../hooks';
import {NewsRouter} from '../../router';
import styles from './styles';

export default function NewsScreen() {
  const orientation = useOrientation();
  return (
    <SafeAreaView style={styles.pages}>
      <TopBar
        label="Halaman Berita"
        condition="mainTopBar"
        orientation={orientation}
      />
      <View style={styles.container}>
        <NewsRouter orientation={orientation} />
      </View>
    </SafeAreaView>
  );
}
