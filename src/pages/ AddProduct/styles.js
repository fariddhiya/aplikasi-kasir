import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pages: {
    backgroundColor: 'white',
    flex: 1,
  },
  form: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.7
      : orientation.width * 0.5,
    marginVertical: orientation.isPotrait
      ? orientation.height * 0.01
      : orientation.height * 0.015,
  }),
  fieldForm: orientation => ({
    fontSize: (orientation.height + orientation.width) / 100,
    height: 50,
    backgroundColor: '#e0dcdc',
    borderRadius: 5,
    paddingStart: 10,
    marginTop: 5,
  }),
  fieldError: {
    height: 53,
    backgroundColor: '#e0dcdc',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 2.5,
    borderBottomColor: '#ff5c54',
    alignItems: 'center',
    marginTop: 5,
  },
  fieldErrorForm: {
    paddingStart: 15,
    width: '100%',
    height: 50,
    alignItems: 'center',
  },
  warningIcon: {
    position: 'absolute',
    right: 10,
  },
  content: orientation => ({
    justifyContent: 'center',
    alignItems: 'center',
  }),
  imageForm: orientation => ({
    height: orientation.isPotrait
      ? orientation.height * 0.17
      : orientation.width * 0.135,
    width: orientation.isPotrait
      ? orientation.height * 0.17
      : orientation.width * 0.135,
    backgroundColor: '#e0dcdc',
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  buttonSave: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.4
      : orientation.width * 0.3,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.065,
    backgroundColor: '#004096',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 80,
    minHeight: 35,
  }),
  buttonCancel: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  photoItem: orientation => ({
    width: orientation.isPotrait
      ? orientation.height * 0.12
      : orientation.width * 0.1,
    height: orientation.isPotrait
      ? orientation.height * 0.12
      : orientation.width * 0.1,
    borderRadius: 5,
    borderColor: '#d8d4d4',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  editPhoto: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.1
      : orientation.width * 0.05,
    height: orientation.isPotrait
      ? orientation.width * 0.1
      : orientation.width * 0.05,
    backgroundColor: '#282c9c',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#e0dcdc',
    borderWidth: 2,
    position: 'absolute',
    bottom: orientation.height * 0,
    right: orientation.width * 0,
    maxHeight: 50,
    maxWidth: 50,
  }),
  container: orientation => ({
    marginVertical: orientation.isPotrait
      ? orientation.height * 0.07
      : orientation.height * 0.05,
  }),
  font: orientation => ({
    fontSize: (orientation.height + orientation.width) / 92,
    color: 'black',
  }),
});

export default styles;
