import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#282cc4',
    flex: 1,
  },
  logoName: orientation => ({
    height: orientation.isPotrait
      ? orientation.height * 0.1
      : orientation.width * 0.07,
    width: orientation.isPotrait
      ? orientation.width * 0.4
      : orientation.width * 0.2,
    resizeMode: 'contain',
  }),
  logoImage: orientation => ({
    height: orientation.isPotrait
      ? orientation.height * 0.2
      : orientation.width * 0.2,
    width: orientation.isPotrait
      ? orientation.width * 0.25
      : orientation.width * 0.15,
    resizeMode: 'contain',
  }),
  button: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.65
      : orientation.width * 0.35,
    height: orientation.isPotrait
      ? orientation.height * 0.045
      : orientation.height * 0.1,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: orientation.isPotrait
      ? orientation.width * 0.015
      : orientation.width * 0.012,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 60,
  }),
  fieldForm: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 7,
    paddingStart: 20,
  },
  container: orientation => ({
    flexDirection: orientation.isPotrait ? 'column' : 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#282cc4',
  }),
  topContainer: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.7
      : orientation.width * 0.3,
    height: orientation.isPotrait
      ? orientation.height * 0.35
      : orientation.height * 0.75,
    justifyContent: 'center',
    // backgroundColor: 'grey',
    alignItems: 'center',
  }),
  bottomContainer: orientation => ({
    alignItems: 'center',
    justifyContent: 'center',
    height: orientation.isPotrait
      ? orientation.height * 0.45
      : orientation.height * 0.55,
    width: orientation.isPotrait
      ? orientation.width * 0.9
      : orientation.width * 0.5,
    // backgroundColor: 'green',
  }),
  titleText: orientation => ({
    fontSize: (orientation.width + orientation.height) / 55,
    fontWeight: 'bold',
    color: 'white',
  }),
  text: orientation => ({
    color: 'white',
    fontWeight: 'bold',
    fontSize: (orientation.width + orientation.height) / 90,
  }),
  textInput: orientation => ({
    backgroundColor: 'white',
    width: orientation.isPotrait
      ? orientation.width * 0.65
      : orientation.width * 0.35,
    height: orientation.isPotrait
      ? orientation.height * 0.047
      : orientation.height * 0.06,
    borderRadius: (orientation.width + orientation.height) / 170,
    fontSize: orientation.isPotrait
      ? orientation.width * 0.025
      : orientation.width * 0.015,
    paddingStart: orientation.isPotrait
      ? orientation.width * 0.02
      : orientation.width * 0.015,
    minHeight: 40,
    marginVertical: '3%',
    fontSize: (orientation.width + orientation.height) / 95,
  }),
});

export default styles;
