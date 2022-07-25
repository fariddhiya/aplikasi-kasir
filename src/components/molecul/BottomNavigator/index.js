import React from 'react';
import {View} from 'react-native';
import {BottomTabItems} from '../../atom';
import styles from './styles';
import {useOrientation} from '../../../hooks';

export default function ({state, descriptors, navigation}) {
  const orientation = useOrientation();
  return (
    <View style={styles.container(orientation)}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <BottomTabItems
            title={label}
            active={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
          />
        );
      })}
    </View>
  );
}
