import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {TopBar} from '../../components';
import styles from './styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function SkeletonPlaceholder({orientation}) {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        paddingTop: orientation.isPotrait
          ? orientation.height * 0.04
          : orientation.height * 0.1,
      }}>
      <ShimmerPlaceholder
        style={{
          width: orientation.isPotrait ? '72%' : '80%',
          height: orientation.isPotrait ? '72%' : '80%',
          borderRadius: 10,
        }}
        autoRun={true}
      />
    </View>
  );
}
