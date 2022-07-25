import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: (height, orientation) => ({
    backgroundColor: 'white',
    width: orientation.width * 0.8,
    height: orientation.isPotrait
      ? orientation.height * 0.62 + orientation.height * height * 0.035
      : orientation.height * 1.12 + orientation.height * height * 0.075,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: orientation.isPotrait
      ? orientation.width * 0.03
      : orientation.width * 0.02,
    marginVertical: orientation.isPotrait
      ? orientation.height * 0.03
      : orientation.height * 0.02,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignSelf: 'center',
  }),
  header: orientation => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.0,
  }),
  logoApp: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.15
      : orientation.width * 0.1,
    height: orientation.isPotrait
      ? orientation.height * 0.1
      : orientation.height * 0.1,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignContent: 'center',
  }),
  date: {
    alignItems: 'flex-end',
  },
  numberTrx: orientation => ({
    borderTopWidth: (orientation.height + orientation.width) / 600,
    borderBottomWidth: (orientation.height + orientation.width) / 600,
    borderColor: '#e8e4e4',
    borderStyle: 'dashed',
    padding: 10,
    width: '100%',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  descriptionSales: orientation => ({
    width: '100%',
  }),
  itemSale: orientation => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: orientation.height * 0.005,
    paddingStart: orientation.width * 0.02,
  }),

  totalPayment: orientation => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: (orientation.height + orientation.width) / 600,
    borderColor: '#e8e4e4',
    borderStyle: 'dashed',
    paddingVertical: orientation.height * 0.02,
    marginTop: orientation.height * 0.09,
    paddingStart: orientation.isPotrait
      ? orientation.width * 0.2
      : orientation.width * 0.45,
  }),
  qrCode: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.3
      : orientation.width * 0.2,
    height: orientation.isPotrait
      ? orientation.width * 0.3
      : orientation.width * 0.2,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignContent: 'center',
    backgroundColor: 'yellow',
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 90,
    color: 'black',
  }),
  fontTitle: orientation => ({
    fontSize: (orientation.width + orientation.height) / 65,
    fontWeight: 'bold',
    color: 'black',
  }),
});

export default styles;
