import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: orientation => ({
    height: orientation.isPotrait
      ? orientation.height * 0.08
      : orientation.height * 0.1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282cc4',
  }),
  backButton: orientation => ({
    width: orientation.isPotrait
      ? orientation.height * 0.04
      : orientation.height * 0.05,
    height: orientation.isPotrait
      ? orientation.height * 0.035
      : orientation.height * 0.045,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 999999,
    left: orientation.isPotrait
      ? orientation.height * 0.04
      : orientation.height * 0.1,
  }),
  profileButton: orientation => ({
    position: 'absolute',
    right: orientation.isPotrait
      ? orientation.height * 0.035
      : orientation.height * 0.1,
    zIndex: 999999,
    borderRadius: 1500,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: orientation.isPotrait
      ? orientation.height * 0.035
      : orientation.height * 0.045,
    height: orientation.isPotrait
      ? orientation.height * 0.035
      : orientation.height * 0.045,
  }),
  font: orientation => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: orientation.isPotrait
      ? orientation.height * 0.025
      : orientation.height * 0.035,
    color: 'white',
    width: orientation.isPotrait
      ? orientation.height * 0.3
      : orientation.height * 0.7,
    maxWidth: 600,
  }),
});

export default styles;
