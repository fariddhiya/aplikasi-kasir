import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {Gap} from '../../components';
import styles from './styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function SkeletonPlaceholder({orientation}) {
  return (
    <>
      <View style={styles.skeletonContainer}>
        <Gap height={50} />
        <View style={styles.skeletonHeader}>
          <ShimmerPlaceholder style={styles.skeletonBoxHeader} autoRun={true} />
        </View>
      </View>
      <Gap height={220} />
      <View style={styles.skeletonMenu}>
        <ShimmerPlaceholder style={styles.skeletonBoxMenu} autoRun={true} />
        <ShimmerPlaceholder style={styles.skeletonBoxMenu} autoRun={true} />
        <ShimmerPlaceholder style={styles.skeletonBoxMenu} autoRun={true} />
        <ShimmerPlaceholder style={styles.skeletonBoxMenu} autoRun={true} />
      </View>
      <Gap height={20} />
      <View style={styles.skeletonMenu}>
        <ShimmerPlaceholder style={styles.skeletonHighlight} autoRun={true} />
      </View>
    </>
  );
}
