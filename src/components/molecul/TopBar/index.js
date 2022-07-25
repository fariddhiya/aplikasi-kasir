import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {IconBackWhite, IconProfileGrey, IconSaveWhite} from '../../../assets';

import * as RootNavigation from '../../../RootNavigation';
import styles from './styles';

export default function TopBar({label, condition, onPress, orientation}) {
  const [state, setState] = useState({});

  const handlerBackButton = () => {
    RootNavigation.goBack('');
  };
  const handlerProfileButton = () => {
    RootNavigation.navigate('ProfileScreen');
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setState({name: 'farid'});
    }

    return () => {
      isMounted = false;
      setState({});
    };
  }, []);

  return (
    <View style={styles.container(orientation)}>
      {condition === 'backButton' || condition === 'saveButton' ? (
        <TouchableOpacity
          style={styles.backButton(orientation)}
          onPress={handlerBackButton}>
          <IconBackWhite width={'100%'} height={'100%'} />
        </TouchableOpacity>
      ) : (
        <View style={styles.backButton} />
      )}
      <Text style={styles.font(orientation)} numberOfLines={1}>
        {label}
      </Text>

      {condition === 'mainTopBar' ? (
        <TouchableOpacity
          style={styles.profileButton(orientation)}
          onPress={handlerProfileButton}>
          <IconProfileGrey width={'105%'} height={'105%'} />
        </TouchableOpacity>
      ) : condition === 'saveButton' ? (
        <TouchableOpacity
          style={[styles.profileButton(orientation), {backgroundColor: null}]}
          onPress={onPress}>
          <IconSaveWhite width={'120%'} height={'120%'} />
        </TouchableOpacity>
      ) : (
        <View
          style={[styles.profileButton(orientation), {backgroundColor: null}]}
        />
      )}
    </View>
  );
}
