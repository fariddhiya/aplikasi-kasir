import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import {FlatList, RefreshControl, View, Text, SafeAreaView} from 'react-native';
import {CardNews, Texting} from '../../components';
import {AuthContext} from '../../context';
import SkeletonPlaceholder from './SkeletonPlaceholder';
import styles from './styles';
import {useOrientation} from '../../hooks';

export default function TipsScreen() {
  const orientation = useOrientation();
  const loadingRef = useRef(true);
  const dataRef = useRef(true);
  const [loading, isLoading] = useState(false);
  const {
    getNews,
    clearNews,
    state: {errorMsg, tipsData, msg},
  } = useContext(AuthContext);

  const type = 'tips';

  useEffect(() => {
    isLoading(true);
    getNews({type});
  }, []);

  useEffect(() => {
    isLoading(false);
  }, [msg || errorMsg]);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    clearNews({type});
    setRefreshing(true);
    getNews({type});
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={styles.pages}>
      {!loading && tipsData ? (
        <>
          {!loading && tipsData.length > 0 ? (
            <FlatList
              maxToRenderPerBatch={2}
              updateCellsBatchingPeriod={2}
              initialNumToRender={2}
              data={tipsData}
              showsVerticalScrollIndicator={false}
              removeClippedSubviews={true}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <CardNews
                    name={item.name}
                    date={item.date}
                    author={item.source_article}
                    img_link={item.image_url}
                    src_link={item.source_url}
                  />
                );
              }}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              ListHeaderComponent={
                <Text style={[styles.font(orientation), {color: 'grey'}]}>
                  Tarik untuk memperbarui
                </Text>
              }
            />
          ) : (
            <FlatList
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                  size={
                    orientation.height > 600 && orientation.width > 600
                      ? 'large'
                      : 'default'
                  }
                />
              }
              ListFooterComponent={
                <>
                  <Text style={styles.font(orientation)}>Berita Kosong</Text>
                  <Text style={[styles.font(orientation), {color: 'grey'}]}>
                    Tarik untuk memperbarui
                  </Text>
                </>
              }
            />
          )}
        </>
      ) : (
        <SkeletonPlaceholder orientation={orientation} />
      )}
    </SafeAreaView>
  );
}
