import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {IconProfileBlack} from '../../assets';
import styles from './styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export default function SkeletonPlaceholder({orientation}) {
  return (
    <View style={styles.container(orientation)}>
      <View style={styles.topContainer(orientation)}>
        <IconProfileBlack
          width={
            orientation.isPotrait
              ? orientation.width * 0.3
              : orientation.width * 0.2
          }
          height={
            orientation.isPotrait
              ? orientation.height * 0.2
              : orientation.height * 0.35
          }
        />
        <Text style={styles.fontTitle(orientation)}></Text>
      </View>

      <ShimmerPlaceholder
        style={[
          styles.descriptionProfile(orientation),
          {backgroundColor: null, padding: 0},
        ]}
        autoRun={true}
      />
    </View>
  );
}
