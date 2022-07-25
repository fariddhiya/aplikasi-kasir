import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {Texting} from '../../atom';

export default function EmptyFlatList({
  numColumns,
  label,
  refreshing,
  onRefresh,
}) {
  return (
    <FlatList
      numColumns={2}
      style={{height: '100%'}}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      ListFooterComponent={
        <>
          <Texting label={`${label} Kosong`} align="center" />
          <Texting
            label="Tarik untuk menyegarkan"
            align="center"
            size={12}
            color="grey"
          />
        </>
      }
    />
  );
}
