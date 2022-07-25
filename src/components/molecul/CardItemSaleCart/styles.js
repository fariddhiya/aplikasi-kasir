import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 110,
    color: 'black',
  }),
  container: orientation => ({
    width: '85%',
    height: orientation.isPotrait
      ? orientation.height * 0.07
      : orientation.height * 0.15,
    alignSelf: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    justifyContent: 'space-between',
  }),
  qtyBox: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.02,
    height: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.04,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: (orientation.width + orientation.height) / 90,
    color: 'black',
  }),
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEditAmount: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.1
      : orientation.width * 0.04,
    height: orientation.isPotrait
      ? orientation.width * 0.07
      : orientation.width * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  image: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.08
      : orientation.width * 0.06,
    height: orientation.isPotrait
      ? orientation.width * 0.08
      : orientation.width * 0.06,
    alignSelf: 'center',
    borderRadius: 2,
  }),
});

export default styles;
