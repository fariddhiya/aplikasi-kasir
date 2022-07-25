import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import styles from './styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function SkeletonPlaceholder({orientation}) {
  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <ShimmerPlaceholder
          style={styles.preloader(orientation)}
          autoRun={true}
        />
        <ShimmerPlaceholder
          style={styles.preloader(orientation)}
          autoRun={true}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <ShimmerPlaceholder
          style={styles.preloader(orientation)}
          autoRun={true}
        />
        <ShimmerPlaceholder
          style={styles.preloader(orientation)}
          autoRun={true}
        />
      </View>
    </>
  );
}
