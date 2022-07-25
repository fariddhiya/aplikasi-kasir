import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#202cc4',
    flex: 1,
    alignItems: 'center',
  },
  descriptionProfile: orientation => ({
    backgroundColor: 'white',
    padding: 20,
    height: orientation.isPotrait ? '60%' : '75%',
    width: orientation.isPotrait ? orientation.width * 0.7 : '100%',
    borderRadius: 20,
    maxWidth: 600,
    marginVertical: orientation.isPotrait
      ? orientation.height * 0.03
      : orientation.height * 0.01,
  }),
  inputData: orientation => ({
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#eaeaea',

    marginBottom: 10,
  }),
  saveButton: orientation => ({
    backgroundColor: '#080c64',
    width: orientation.isPotrait
      ? orientation.width * 0.6
      : orientation.width * 0.4,
    height: orientation.isPotrait
      ? orientation.height * 0.06
      : orientation.height * 0.07,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 100,
    minHeight: 35,
    marginVertical: orientation.height * 0.05,
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 95,
  }),
  topContainer: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.4
      : orientation.width * 0.3,
    height: orientation.isPotrait
      ? orientation.height * 0.25
      : orientation.height * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  container: orientation => ({
    flexDirection: orientation.isPotrait ? 'column' : 'row',
    width: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
  }),
});

export default styles;
