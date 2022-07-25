import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {TopBar} from '../../components';
import styles from './styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function SkeletonPlaceholder({orientation}) {
  return (
    <>
      <View
        style={{
          height: orientation.isPotrait
            ? orientation.height * 0.3
            : orientation.height * 0.6,
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <ShimmerPlaceholder
          style={{width: '80%', height: '100%', borderRadius: 10}}
          autoRun={true}
        />
      </View>
      <View
        style={{
          height: orientation.isPotrait
            ? orientation.height * 0.1
            : orientation.height * 0.3,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <ShimmerPlaceholder
          style={{width: '28%', height: '100%', borderRadius: 10}}
          autoRun={true}
        />
        <ShimmerPlaceholder
          style={{width: '28%', height: '100%', borderRadius: 10}}
          autoRun={true}
        />
        <ShimmerPlaceholder
          style={{width: '28%', height: '100%', borderRadius: 10}}
          autoRun={true}
        />
      </View>
      <View
        style={{
          height: orientation.isPotrait
            ? orientation.height * 0.1
            : orientation.height * 0.4,
          alignItems: 'center',
        }}>
        <ShimmerPlaceholder
          style={{
            width: '90%',
            height: '100%',
            borderRadius: 10,
            marginVertical: 10,
            marginTop: 30,
          }}
          autoRun={true}
        />
        <ShimmerPlaceholder
          style={{
            width: '90%',
            height: '100%',
            borderRadius: 10,
            marginVertical: 10,
          }}
          autoRun={true}
        />
      </View>
    </>
  );
}
