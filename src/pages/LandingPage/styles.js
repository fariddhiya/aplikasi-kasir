import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#282cc4',
    flex: 1,
  },
  topContainer: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.7
      : orientation.width * 0.3,
    height: orientation.isPotrait
      ? orientation.height * 0.35
      : orientation.height * 0.75,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  bottomContainer: orientation => ({
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: orientation.isPotrait
      ? orientation.height * 0.45
      : orientation.height * 0.7,
    width: orientation.isPotrait
      ? orientation.width * 0.9
      : orientation.width * 0.5,
  }),
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
      ? orientation.width * 0.67
      : orientation.width * 0.4,
    height: orientation.isPotrait
      ? orientation.height * 0.065
      : orientation.height * 0.1,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: orientation.isPotrait
      ? orientation.width * 0.022
      : orientation.width * 0.012,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 60,
    marginBottom: orientation.height * 0.015,
  }),
  container: orientation => ({
    flexDirection: orientation.isPotrait ? 'column' : 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }),
  fontButton: orientation => ({
    fontSize: (orientation.width + orientation.height) / 87,
    textAlign: 'center',
    color: 'white',
  }),
  fontTitle: orientation => ({
    fontSize: orientation.isPotrait
      ? orientation.width * 0.055
      : orientation.width * 0.025,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginBottom: orientation.height * 0.015,
  }),
  container: orientation => ({
    flexDirection: orientation.isPotrait ? 'column' : 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 87,
    color: 'white',
    maxWidth: '75%',
    textAlign: 'center',
  }),
});

export default styles;
