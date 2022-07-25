import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  deleteModal: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.55
      : orientation.width * 0.4,
    height: orientation.isPotrait
      ? orientation.height * 0.2
      : orientation.height * 0.35,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  }),
  confirmationRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: '#282c9c',
  },
  button: orientation => ({
    width: '50%',
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 92,
    color: 'black',
  }),
});

export default styles;
