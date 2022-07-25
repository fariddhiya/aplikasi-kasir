import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 92,
    color: 'black',
  }),
  fontTitle: orientation => ({
    fontSize: (orientation.width + orientation.height) / 85,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
  }),
  container: orientation => ({
    backgroundColor: 'white',
    width: orientation.isPotrait
      ? orientation.width * 0.8
      : orientation.width * 0.43,
    height: orientation.isPotrait
      ? orientation.height * 0.45
      : orientation.height * 0.8,
    borderRadius: 10,
    justifyContent: 'space-around',
    alignSelf: 'center',
    alignItems: 'center',
    maxHeight: 600,
  }),
  textInput: orientation => ({
    backgroundColor: '#e8e4e4',
    borderRadius: 10,
    paddingStart: 20,
    marginHorizontal: orientation.isPotrait
      ? orientation.width * 0.01
      : orientation.width * 0.01,
    marginVertical: orientation.isPotrait
      ? orientation.height * 0.01
      : orientation.height * 0.01,
    fontSize: (orientation.width + orientation.height) / 100,
    width: orientation.isPotrait
      ? orientation.width * 0.5
      : orientation.width * 0.3,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.09,
    maxHeight: 65,
  }),
  addButton: orientation => ({
    backgroundColor: '#08943c',
    height: orientation.isPotrait
      ? orientation.height * 0.2
      : orientation.height * 0.07,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    maxHeight: 50,
    width: orientation.isPotrait
      ? orientation.width * 0.5
      : orientation.width * 0.3,
  }),
  cancelButton: {
    alignItems: 'center',
    paddingTop: 5,
  },
});

export default styles;
