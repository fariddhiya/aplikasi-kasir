import React, {useContext, useRef, useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {IconProfileBlack} from '../../assets';
import {TopBar} from '../../components';
import {AuthContext} from '../../context';
import {useOrientation} from '../../hooks';
import styles from './styles';

export default function EditProfile() {
  const orientation = useOrientation();
  const {
    editProfile,
    state: {profile},
  } = useContext(AuthContext);

  const handlerSave = () => {
    editProfile({name, merchant_name, email, address});
  };

  const dataRef = useRef(true);

  const [dataProfile, setDataProfile] = useState({
    merchant_name: profile.merchant_name,
    name: profile.name,
    email: profile.email,
    address: profile.address,
  });

  const {name, merchant_name, email, address} = dataProfile;

  const handleData = (input, fieldInput) => {
    setDataProfile({...dataProfile, [fieldInput]: input});
  };

  return (
    <SafeAreaView style={styles.pages}>
      <TopBar
        label="Edit Profile"
        condition="backButton"
        onPress={handlerSave}
        orientation={orientation}
      />

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
          <View
            style={{
              height: orientation.isPotrait
                ? orientation.height * 0.01
                : orientation.height * 0.05,
              width: 100,
              marginVertical: orientation.isPotrait
                ? orientation.height * 0.01
                : orientation.height * 0.02,
            }}
          />
        </View>
        <View>
          <View style={styles.descriptionProfile(orientation)}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              ListHeaderComponent={
                <>
                  <Text style={[styles.font(orientation), {color: '#adadad'}]}>
                    Merchant Name
                  </Text>
                  <TextInput
                    style={[
                      styles.inputData(orientation),
                      styles.font(orientation),
                    ]}
                    onChangeText={value => handleData(value, 'merchant_name')}
                    value={merchant_name}
                  />

                  <Text style={[styles.font(orientation), {color: '#adadad'}]}>
                    Business Owner
                  </Text>
                  <TextInput
                    style={[
                      styles.inputData(orientation),
                      styles.font(orientation),
                    ]}
                    onChangeText={value => handleData(value, 'name')}
                    value={name}
                  />

                  <Text style={[styles.font(orientation), {color: '#adadad'}]}>
                    E-Mail
                  </Text>
                  <TextInput
                    style={[
                      styles.inputData(orientation),
                      styles.font(orientation),
                    ]}
                    onChangeText={value => handleData(value, 'email')}
                    value={email}
                  />

                  <Text style={[styles.font(orientation), {color: '#adadad'}]}>
                    Alamat
                  </Text>
                  <TextInput
                    style={[
                      styles.inputData(orientation),
                      styles.font(orientation),
                    ]}
                    onChangeText={value => handleData(value, 'address')}
                    value={address}
                  />
                </>
              }
            />
          </View>
          <TouchableOpacity
            onPress={handlerSave}
            style={styles.saveButton(orientation)}>
            <Text style={[styles.font(orientation), {color: 'white'}]}>
              Simpan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
