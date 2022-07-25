import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: orientation => ({
    flexDirection: 'row',
    backgroundColor: 'white',
    width: orientation.isPotrait
      ? orientation.width * 0.65
      : orientation.width * 0.32,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.075,
    borderRadius: 50,
    marginVertical: orientation.isPotrait
      ? orientation.height * 0.005
      : orientation.height * 0.005,
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});

export default styles;
