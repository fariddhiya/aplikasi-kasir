import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#202cc4',
    flex: 1,
    alignItems: 'center',
  },
  container: orientation => ({
    flexDirection: orientation.isPotrait ? 'column' : 'row',
    width: '100%',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-evenly',
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
  descriptionProfile: orientation => ({
    backgroundColor: 'white',
    padding: 20,
    height: orientation.isPotrait ? '60%' : '75%',
    width: orientation.isPotrait ? '85%' : '55%',
    borderRadius: 20,
    maxWidth: 600,
    marginVertical: orientation.isPotrait
      ? orientation.height * 0.03
      : orientation.height * 0.07,
  }),
  rowDescription: orientation => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: orientation.isPotrait
      ? orientation.height * 0.06
      : orientation.height * 0.067,
    alignItems: 'center',
    borderColor: 'grey',
    borderBottomWidth: 1,
  }),
  signOutButton: orientation => ({
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#0844bc',
    width: orientation.isPotrait
      ? orientation.width * 0.6
      : orientation.width * 0.4,
    height: orientation.isPotrait
      ? orientation.height * 0.06
      : orientation.height * 0.07,
    borderRadius: 100,
    position: 'absolute',
    bottom: orientation.isPotrait
      ? orientation.height * 0.02
      : orientation.height * 0.05,
    borderColor: 'white',
    borderWidth: 1,
    minHeight: 35,
  }),
  editButton: orientation => ({
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
    position: 'absolute',
    minHeight: 35,
    bottom: orientation.isPotrait
      ? orientation.height * 0.12
      : orientation.height * 0.18,
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 89,
    color: 'black',
  }),
  fontTitle: orientation => ({
    fontSize: (orientation.width + orientation.height) / 60,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    marginVertical: orientation.isPotrait
      ? orientation.height * 0.01
      : orientation.height * 0.02,
  }),
});

export default styles;
