import moment from 'moment';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Texting} from '../../atom';
import {ILBRI} from '../../../assets';
import * as RootNavigation from '../../../RootNavigation';
import styles from './styles';
import {useOrientation} from '../../../hooks';

export default function CardNews({name, date, author, img_link, src_link}) {
  const orientation = useOrientation();
  const handlerDetailNews = () => {
    RootNavigation.navigate('NewsDetailScreen', {src_link: src_link});
  };

  moment.locale('id', {
    months: 'Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agu_Sep_Okt_Nov_Des'.split('_'),
    weekdaysShort: 'Senin_Selasa_Rabu_Kamis_Jumat_Sabtu_Minggu'.split('_'),
  });
  moment.locale('id');
  moment.updateLocale('id');
  const dateMoment = moment(date).format('ddd, DD MMM YYYY');

  return (
    <TouchableOpacity
      style={styles.container(orientation)}
      onPress={handlerDetailNews}>
      <View style={styles.descriptionNews}>
        <Text
          numberOfLines={2}
          style={[styles.fontTitle(orientation), {fontWeight: 'bold'}]}>
          {name}
        </Text>
        <View>
          <Text style={[styles.font(orientation), {color: '#282cc4'}]}>
            {author}
          </Text>
          <Text style={[styles.font(orientation), {color: 'grey'}]}>
            {dateMoment ? dateMoment : '-'}
          </Text>
        </View>
      </View>
      <Image
        source={img_link ? {uri: img_link} : ILBRI}
        style={styles.imgNews(orientation)}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
}
