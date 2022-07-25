import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  photoModal: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.45
      : orientation.width * 0.5,
    height: orientation.isPotrait
      ? orientation.height * 0.3
      : orientation.height * 0.55,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-evenly',
  }),
  photoButton: orientation => ({
    backgroundColor: '#004096',
    width: orientation.isPotrait
      ? orientation.width * 0.3
      : orientation.width * 0.2,
    height: orientation.isPotrait
      ? orientation.width * 0.1
      : orientation.width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 60,
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 95,
    color: 'white',
  }),
  fontTitle: orientation => ({
    fontSize: (orientation.width + orientation.height) / 80,
    color: 'black',
  }),
});

export default styles;
