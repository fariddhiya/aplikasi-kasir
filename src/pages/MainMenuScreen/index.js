import {useIsFocused} from '@react-navigation/native';
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  FlatList,
  RefreshControl,
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import {IconProfileGrey} from '../../assets';
import {Gap, Texting} from '../../components';
import {AuthContext} from '../../context';
import {useOrientation} from '../../hooks';
import * as RootNavigation from '../../RootNavigation';
import {colors} from '../../utils';
import BoxHeader from './BoxHeader';
import Highlight from './Highlight';
import Menu from './Menu';
import SkeletonPlaceholder from './SkeletonPlaceholder';
import styles from './styles';

export default function MainMenuScreen() {
  const orientation = useOrientation();
  const isFocused = useIsFocused();
  const dataRef = useRef(true);
  const loadingRef = useRef(true);
  const [loading, isLoading] = useState(null);
  const {
    getHomeProfile,
    clearData,
    state: {dataHome, msg, errorMsg},
  } = useContext(AuthContext);

  useEffect(() => {
    if (dataRef.current && isFocused) {
      dataRef.current = false;
    }
    if (!dataRef.current && isFocused) {
      getHomeProfile();
      isLoading(true);
    }
  }, [msg]);

  useEffect(() => {
    isLoading(false);
    setRefreshing(false);
  }, [dataHome || errorMsg || msg]);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    getHomeProfile();
    setRefreshing(true);
    isLoading(true);
  }, []);
  const handlerProfile = () => {
    RootNavigation.navigate('ProfileScreen');
  };

  return (
    <SafeAreaView style={{backgroundColor: '#f8f4fc', flex: 1}}>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          !loading && Object.keys(dataHome).length !== 0 ? (
            <View
              style={{
                flex: 1,
                // backgroundColor: 'red',
                height: orientation.isPotrait
                  ? orientation.height * 1.1
                  : orientation.height * 2.1,
              }}>
              <View style={styles.headerMain(orientation)}>
                <View style={styles.welcomeContainer(orientation)}>
                  <Text
                    style={[
                      styles.font(orientation),
                      {color: colors.text.secondary, fontWeight: 'bold'},
                    ]}>
                    Selamat Datang,
                  </Text>
                  <Text
                    style={[
                      styles.font(orientation),
                      {color: colors.text.secondary},
                    ]}>
                    Saatnya mengatur keuangan Anda
                  </Text>
                </View>

                <TouchableOpacity
                  style={styles.profileButton(orientation)}
                  onPress={handlerProfile}>
                  <IconProfileGrey width={'105%'} height={'105%'} />
                </TouchableOpacity>
              </View>
              <BoxHeader orientation={orientation} />
              <Menu orientation={orientation} />
              <Highlight orientation={orientation} />
            </View>
          ) : (
            <SkeletonPlaceholder orientation={orientation} />
          )
        }
      />
    </SafeAreaView>
  );
}
