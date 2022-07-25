import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: (height, orientation) => ({
    backgroundColor: 'white',
    width: orientation.width * 0.8,
    height: orientation.isPotrait
      ? orientation.height * 0.45 + orientation.height * height * 0.058
      : orientation.height * 0.55 + orientation.height * height * 0.12,
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
  }),
  header: orientation => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: orientation.isPotrait ? 'space-evenly' : 'flex-start',
    width: '100%',
  }),
  logoApp: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.2
      : orientation.width * 0.1,
    height: orientation.isPotrait
      ? orientation.height * 0.1
      : orientation.height * 0.15,
  }),
  numberTrx: orientation => ({
    borderTopWidth: (orientation.height + orientation.width) / 600,
    borderBottomWidth: (orientation.height + orientation.width) / 600,
    borderColor: '#e8e4e4',
    borderStyle: 'dashed',
    width: orientation.isPotrait
      ? orientation.width * 0.74
      : orientation.width * 0.76,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: orientation.isPotrait
      ? orientation.height * 0.015
      : orientation.height * 0.02,
    marginVertical: orientation.isPotrait
      ? orientation.height * 0.015
      : orientation.height * 0.02,
  }),
  fullPayment: orientation => ({
    backgroundColor: '#b0f4d4',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
  }),
  descriptionSales: orientation => ({
    width: '100%',
  }),
  itemSale: orientation => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: orientation.height * 0.015,
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
      ? orientation.width * 0.28
      : orientation.width * 0.45,
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 95,
    color: 'black',
  }),
  fontTitle: orientation => ({
    fontSize: (orientation.width + orientation.height) / 80,
    color: 'black',
  }),
  statusPayment: orientation => ({
    letterSpacing: 4,
    color: '#08943c',
    backgroundColor: '#b0f4d4',
    padding: (orientation.width + orientation.height) / 120,
    borderRadius: 200,
    fontWeight: 'bold',
  }),
  pages: {
    flex: 1,
    alignItems: 'center',
  },
  saveButton: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.4
      : orientation.width * 0.4,
    height: orientation.isPotrait
      ? orientation.height * 0.06
      : orientation.height * 0.1,
    backgroundColor: '#282cc4',
    alignItems: 'center',
    borderRadius: (orientation.width + orientation.height) / 150,
    justifyContent: 'center',
    marginBottom: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.015,
  }),
});

export default styles;
