import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {IconRightGrey, ILImage1, ILImage2, ILImage3} from '../../assets';
import {Gap, Texting} from '../../components';
import * as RootNavigation from '../../RootNavigation';
import styles from './styles';

export default function Highlight({orientation}) {
  const handlerNews = () => {
    RootNavigation.navigate('MainApp', {screen: 'Berita'});
  };
  const handlerTips = () => {
    RootNavigation.navigate('MainApp', {screen: 'Berita'});
  };
  const handlerKur = () => {
    RootNavigation.navigate('MainApp', {screen: 'Berita'});
  };
  return (
    <View>
      <View
        style={[
          styles.headerTitle(orientation),
          {
            paddingHorizontal: orientation.isPotrait
              ? orientation.width * 0.04
              : orientation.width * 0.02,
            paddingVertical: orientation.height * 0.01,
          },
        ]}>
        <Text style={[styles.fontTitle(orientation), {color: '#181c4c'}]}>
          Berita saat ini
        </Text>

        <TouchableOpacity style={styles.row(orientation)} onPress={handlerNews}>
          <Text style={[styles.fontTitle(orientation), {color: '#808080'}]}>
            Lihat semua
          </Text>

          <IconRightGrey
            width={orientation.width * 0.05}
            height={orientation.height * 0.05}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.row(orientation)}>
            <TouchableOpacity onPress={handlerKur}>
              <Image
                style={styles.illustration(orientation)}
                source={ILImage1}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handlerNews}>
              <Image
                style={styles.illustration(orientation)}
                source={ILImage2}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={handlerTips}>
              <Image
                style={styles.illustration(orientation)}
                source={ILImage3}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        }
        ListFooterComponent={<Gap width={20} />}
      />
    </View>
  );
}
