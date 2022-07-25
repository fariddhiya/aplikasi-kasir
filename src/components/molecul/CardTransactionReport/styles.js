import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  historyTrx: orientation => ({
    backgroundColor: '#f8f4fc',
    height: orientation.isPotrait
      ? orientation.height * 0.1
      : orientation.height * 0.15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'grey',
    borderBottomWidth: orientation.width * 0.001,
  }),
  rightSide: orientation => ({
    flexDirection: 'row',
    alignItems: 'center',
  }),
  statusPurchases: orientation => ({
    backgroundColor: '#68d58e',
    borderRadius: 100,
    width: orientation.isPotrait
      ? orientation.width * 0.18
      : orientation.width * 0.1,
    height: orientation.isPotrait
      ? orientation.height * 0.034
      : orientation.height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: orientation.width * 0.01,
    maxHeight: 50,
  }),
  date: {color: '#6e6d6e', fontSize: 9},
  statusSales: orientation => ({
    backgroundColor: '#eeb6ba',
    borderRadius: 100,
    width: orientation.isPotrait
      ? orientation.width * 0.18
      : orientation.width * 0.1,
    height: orientation.isPotrait
      ? orientation.height * 0.034
      : orientation.height * 0.07,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: orientation.width * 0.01,
    maxHeight: 50,
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 90,
    color: 'black',
    maxWidth: orientation.isPotrait
      ? orientation.width * 0.6
      : orientation.width * 0.8,
  }),
});

export default styles;
