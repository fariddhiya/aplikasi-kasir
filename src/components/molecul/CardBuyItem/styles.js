import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.6
      : orientation.width * 0.5,
    height: orientation.isPotrait
      ? orientation.height * 0.1
      : orientation.height * 0.17,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.05,
    maxHeight: 150,
  }),
  removeButton: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.03,
    height: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.03,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    position: 'absolute',
    top: -5,
    right: -5,
  }),
  font: orientation => ({
    fontSize: (orientation.height + orientation.width) / 80,
    color: 'black',
  }),
});

export default styles;
