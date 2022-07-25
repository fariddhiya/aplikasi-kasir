import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  fieldSearch: orientation => ({
    width: orientation.isPotrait ? '60%' : '80%',
    alignItems: 'center',
    paddingStart: orientation.width * 0.02,
    height: '100%',
  }),
  buttonSearchContainer: {
    flexDirection: 'row',
    height: '100%',
  },
  buttonSearch: orientation => ({
    justifyContent: 'center',
    width: orientation.isPotrait
      ? orientation.width * 0.1
      : orientation.width * 0.045,
    alignItems: 'center',
  }),
  topContainer: orientation => ({
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 10,
    top: orientation.isPotrait
      ? orientation.height * 0.065
      : orientation.height * 0.082,
    height: orientation.isPotrait
      ? orientation.height * 0.055
      : orientation.height * 0.1,
    width: orientation.isPotrait
      ? orientation.width * 0.9
      : orientation.width * 1.2,
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 65,
    maxWidth: orientation.isPotrait ? '95%' : '65%',
    justifyContent: 'space-around',
  }),
  searchContainer: orientation => ({
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: orientation.isPotrait ? '70%' : '80%',
    borderRadius: orientation.isPotrait
      ? orientation.width * 0.02
      : orientation.width * 0.55,
  }),
  buttonOtherProduct: orientation => ({
    flexDirection: 'row',
    backgroundColor: '#f08c54',
    height: orientation.isPotrait
      ? orientation.height * 0.045
      : orientation.height * 0.09,
    width: orientation.isPotrait
      ? orientation.width * 0.22
      : orientation.width * 0.13,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 25,
    maxHeight: 60,
    maxWidth: 200,
    minWidth: 80,
  }),
  container: orientation => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: orientation.isPotrait
      ? orientation.width * 0.085
      : orientation.width * 0.12,
    marginTop: orientation.isPotrait
      ? orientation.height * 0.06
      : orientation.height * 0.12,
    marginBottom: orientation.isPotrait
      ? orientation.height * 0.015
      : orientation.height * 0.025,
    alignItems: 'center',
  }),
  pages: {
    flex: 1,
    backgroundColor: '#f8f4fc',
  },
  addProduct: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.1
      : orientation.width * 0.05,
    height: orientation.isPotrait
      ? orientation.width * 0.1
      : orientation.width * 0.05,
    backgroundColor: '#004096',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: 'grey',
    borderWidth: 3,
    maxHeight: 75,
    maxWidth: 75,
  }),
  modalDetailItem: orientation => ({
    backgroundColor: 'white',
    width: 300,
    height: 350,
    borderRadius: 10,
    alignSelf: 'center',
    padding: 10,
  }),
  imgItem: orientation => ({
    resizeMode: 'contain',
    width: 120,
    height: 120,
    marginVertical: 20,
    alignSelf: 'center',
  }),
  rowPrice: orientation => ({
    flexDirection: 'row',
    paddingStart: 10,
    alignItems: 'center',
  }),
  itemBtn: orientation => ({
    backgroundColor: 'red',
    borderRadius: 100,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  }),
  amountItem: orientation => ({
    width: 60,
    height: 40,
    paddingStart: 10,
    marginHorizontal: 10,
  }),
  btnSave: orientation => ({
    backgroundColor: '#004096',
    borderRadius: 10,
    width: 120,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 15,
  }),
  floatingButton: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.9
      : orientation.width * 0.5,
    height: orientation.isPotrait
      ? orientation.height * 0.06
      : orientation.height * 0.09,
    backgroundColor: '#3034a4',
    marginBottom:
      orientation.isPotrait && orientation.tablet
        ? orientation.height * 0.09
        : orientation.tablet
        ? orientation.height * 0.12
        : orientation.isPotrait
        ? orientation.height * 0.1
        : orientation.height * 0.18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: orientation.isPotrait
      ? orientation.width * 0.04
      : orientation.width * 0.03,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    position: 'absolute',
    bottom: -10,
    elevation: 1,
    zIndex: 999,
    minHeight: 45,
    maxWidth: '90%',
  }),
  buttonPayment: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.2
      : orientation.width * 0.12,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.07,
    backgroundColor: '#14ac44',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 30,
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 95,
    color: 'black',
  }),
  fontTitle: orientation => ({
    fontSize: (orientation.width + orientation.height) / 90,
    fontWeight: 'bold',
  }),
  fontMini: orientation => ({
    fontSize: (orientation.width + orientation.height) / 120,
  }),
  preloader: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.42
      : orientation.width * 0.4,
    height: orientation.isPotrait
      ? orientation.width * 0.45
      : orientation.width * 0.28,
    margin: orientation.isPotrait
      ? orientation.width * 0.04
      : orientation.width * 0.02,
    borderRadius: 20,
  }),
  modalPaymentContainer: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.8
      : orientation.width * 0.45,
    height: orientation.isPotrait
      ? orientation.height * 0.65
      : orientation.height * 0.7,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 30,
    position: 'absolute',
    bottom:
      orientation.isPotrait && orientation.tablet
        ? orientation.height * 0.05
        : orientation.tablet
        ? orientation.height * 0.04
        : orientation.isPotrait
        ? orientation.height * 0.06
        : orientation.height * 0.05,
    flexDirection: 'column',
    zIndex: 9999999,
    alignSelf: 'center',
  }),
  headerCart: orientation => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    alignItems: 'center',
    width: '85%',
    alignSelf: 'center',
    paddingTop: orientation.height * 0.01,
  }),
});

export default styles;
