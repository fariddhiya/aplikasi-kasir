import React, {useContext, useEffect} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {IconProfileBlack} from '../../assets';
import {TopBar} from '../../components';
import {AuthContext} from '../../context';
import {useOrientation} from '../../hooks';
import * as RootNavigation from '../../RootNavigation';
import SkeletonPlaceholder from './SkeletonPlaceholder';
import styles from './styles';

export default function ProfileScreen() {
  const orientation = useOrientation();
  const {
    getSettingProfile,
    logout,
    state: {profile},
  } = useContext(AuthContext);

  useEffect(() => {
    getSettingProfile();
  }, []);

  const handlerSignOut = () => {
    RootNavigation.navigate('LandingPage');
  };

  const handlerEditProfile = () => {
    RootNavigation.navigate('EditProfile');
  };

  if (profile) {
    return (
      <SafeAreaView style={styles.pages}>
        <TopBar
          label="Halaman Profile"
          condition="backButton"
          orientation={orientation}
        />
        {Object.keys(profile).length > 0 ? (
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
              <Text style={styles.fontTitle(orientation)}>
                {profile.merchant_name}
              </Text>
            </View>

            <View style={styles.descriptionProfile(orientation)}>
              <View style={styles.rowDescription(orientation)}>
                <Text style={[styles.font(orientation), {color: '#adadad'}]}>
                  Business Owner
                </Text>
                <Text style={styles.font(orientation)}>{profile.name}</Text>
              </View>

              <View style={styles.rowDescription(orientation)}>
                <Text style={[styles.font(orientation), {color: '#adadad'}]}>
                  Email
                </Text>
                <Text style={styles.font(orientation)}>
                  {profile.email ? profile.email : '---'}
                </Text>
              </View>
              <View style={styles.rowDescription(orientation)}>
                <Text style={[styles.font(orientation), {color: '#adadad'}]}>
                  Phone
                </Text>
                <Text style={styles.font(orientation)}>
                  {profile.phone_number ? profile.phone_number : '---'}
                </Text>
              </View>
              <View style={styles.rowDescription(orientation)}>
                <Text style={[styles.font(orientation), {color: '#adadad'}]}>
                  Alamat
                </Text>
                <Text style={styles.font(orientation)}>
                  {profile.address ? profile.address : '---'}
                </Text>
              </View>
              <TouchableOpacity
                style={styles.signOutButton(orientation)}
                onPress={logout}>
                <Text style={[styles.font(orientation), {color: 'white'}]}>
                  Keluar akun
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.editButton(orientation)}
                onPress={handlerEditProfile}>
                <Text style={[styles.font(orientation), {color: 'white'}]}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <SkeletonPlaceholder orientation={orientation} />
        )}
      </SafeAreaView>
    );
  }
  return true;
}
