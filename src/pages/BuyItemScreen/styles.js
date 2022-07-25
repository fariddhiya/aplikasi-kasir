import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#f8f4fc',
    flex: 1,
  },
  container: orientation => ({
    backgroundColor: 'white',
    position: 'absolute',
    height:
      orientation.isPotrait && orientation.tablet
        ? orientation.height * 0.17
        : !orientation.isPotrait && orientation.tablet
        ? orientation.height * 0.22
        : orientation.isPotrait
        ? orientation.height * 0.2
        : orientation.height * 0.27,
    bottom:
      orientation.isPotrait && orientation.tablet
        ? orientation.height * 0.065
        : !orientation.isPotrait && orientation.tablet
        ? orientation.height * 0.08
        : orientation.isPotrait
        ? orientation.height * 0.07
        : orientation.height * 0.13,
    right: 0,
    left: 0,
    justifyContent: 'space-around',
    paddingVertical: 10,
  }),
  row: orientation => ({
    flexDirection: 'row',
    justifyContent: 'center',
  }),
  saveButton: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.7
      : orientation.width * 0.5,
    height: orientation.isPotrait
      ? orientation.height * 0.045
      : orientation.height * 0.075,
    backgroundColor: '#282cc4',
    justifyContent: 'center',
    borderRadius: 4,
    alignItems: 'center',
  }),
  addButton: orientation => ({
    backgroundColor: '#08cc44',
    width: orientation.isPotrait
      ? orientation.width * 0.09
      : orientation.width * 0.04,
    height: orientation.isPotrait
      ? orientation.height * 0.045
      : orientation.height * 0.075,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginStart: orientation.isPotrait
      ? orientation.width * 0.06
      : orientation.width * 0.03,
  }),
  priceInput: orientation => ({
    backgroundColor: '#fff4fc',
    width: orientation.isPotrait
      ? orientation.width * 0.87
      : orientation.width * 0.57,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.1,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    paddingStart: 15,
    justifyContent: 'center',
    fontSize: (orientation.width + orientation.height) / 92,
    maxHeight: 55,
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 92,
    color: 'black',
  }),
});

export default styles;
