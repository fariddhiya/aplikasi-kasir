import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import styles from './styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function SkeletonPlaceholder({orientation}) {
  return (
    <>
      <View style={styles.skeletonContainer(orientation)}>
        <ShimmerPlaceholder
          style={styles.skeletonCard(orientation)}
          autoRun={true}
        />
      </View>
      <View style={styles.skeletonContainer(orientation)}>
        <ShimmerPlaceholder
          style={styles.skeletonCard(orientation)}
          autoRun={true}
        />
      </View>
      <View style={styles.skeletonContainer(orientation)}>
        <ShimmerPlaceholder
          style={styles.skeletonCard(orientation)}
          autoRun={true}
        />
      </View>
    </>
  );
}
