import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: '#F2F6FC',
    alignItems: 'center',
  },
  imgProduct: orientation => ({
    resizeMode: 'cover',
    width: orientation.isPotrait
      ? orientation.width * 0.25
      : orientation.width * 0.15,
    height: orientation.isPotrait
      ? orientation.width * 0.25
      : orientation.width * 0.15,
    borderRadius: 5,
  }),
  boxProduct: orientation => ({
    backgroundColor: 'white',
    width: orientation.isPotrait
      ? orientation.width * 0.35
      : orientation.width * 0.2,
    height: orientation.isPotrait
      ? orientation.width * 0.35
      : orientation.width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: (orientation.width + orientation.height) / 55,
    borderRadius: 10,
    elevation: 1,
  }),
  fieldForm: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.75
      : orientation.width * 0.6,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.12,
    maxWidth: 600,
    maxHeight: 60,
    backgroundColor: '#d8d4d4',
    borderRadius: 5,
    marginVertical: 5,
    paddingStart: 20,
    fontSize: (orientation.width + orientation.height) / 90,
  }),
  form: orientation => ({
    marginVertical: orientation.height * 0.01,
    height: orientation.isPotrait
      ? orientation.height * 0.08
      : orientation.height * 0.2,
    maxHeight: 120,
  }),
  buttonContainer: orientation => ({
    alignItems: 'center',
    paddingVertical: 20,
  }),
  buttonSave: orientation => ({
    backgroundColor: '#3034a4',
    width: orientation.isPotrait
      ? orientation.width * 0.75
      : orientation.width * 0.3,
    maxWidth: 450,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.09,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  buttonCancel: orientation => ({
    width: 300,
    height: orientation.isPotrait
      ? orientation.height * 0.04
      : orientation.height * 0.06,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: orientation.height * 0.02,
    minHeight: 40,
  }),
  text: orientation => ({
    color: 'black',
    fontSize: (orientation.width + orientation.height) / 80,
  }),
  btnAddImage: orientation => ({
    backgroundColor: '#3034a4',
    width: orientation.isPotrait
      ? orientation.width * 0.1
      : orientation.width * 0.05,
    height: orientation.isPotrait
      ? orientation.width * 0.1
      : orientation.width * 0.05,
    borderRadius: 50,
    justifyContent: 'center',
    position: 'absolute',
    bottom: -20,
    right: -20,
    borderRadius: 50,
    maxHeight: 70,
    maxWidth: 70,
  }),
  imgAddImage: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.03,
    height: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.03,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignContent: 'center',
  }),
});

export default styles;
