import React from 'react';
import WebView from 'react-native-webview';
import {TopBar} from '../../components';
import {useOrientation} from '../../hooks';

export default function NewsDetailScreen({route}) {
  const orientation = useOrientation();
  const {src_link} = route.params;
  return (
    <>
      <TopBar label="Berita" condition="backButton" orientation={orientation} />
      <WebView
        source={{
          uri: src_link,
        }}
      />
    </>
  );
}
