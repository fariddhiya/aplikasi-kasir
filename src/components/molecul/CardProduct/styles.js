import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.35
      : orientation.width * 0.4,
    height: orientation.isPotrait
      ? orientation.height * 0.2
      : orientation.height * 0.4,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: orientation.isPotrait
      ? (orientation.width + orientation.height) / 90
      : (orientation.width + orientation.height) / 100,
    padding: -10,
    justifyContent: 'space-between',
    maxWidth: '40%',
    minHeight: 100,
  }),
  addButton: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.085
      : orientation.width * 0.05,
    height: orientation.isPotrait
      ? orientation.height * 0.04
      : orientation.height * 0.09,
    borderTopLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  }),
  reductionButton: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.085
      : orientation.width * 0.05,
    height: orientation.isPotrait
      ? orientation.height * 0.04
      : orientation.height * 0.09,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderBottomRightRadius: 15,
  }),
  amountButton: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.085
      : orientation.width * 0.05,
    height: orientation.isPotrait
      ? orientation.height * 0.04
      : orientation.height * 0.09,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 50,
    maxHeight: 60,
  }),
  footer: orientation => ({
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: orientation.isPotrait
      ? orientation.height * 0.04
      : orientation.height * 0.09,
  }),
  image: orientation => ({
    width: orientation.isPotrait
      ? orientation.height * 0.1
      : orientation.height * 0.2,
    height: orientation.isPotrait
      ? orientation.height * 0.09
      : orientation.height * 0.2,
    alignSelf: 'center',
    backgroundColor: 'grey',
  }),
  header: orientation => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: orientation.isPotrait
      ? orientation.height * 0.035
      : orientation.height * 0.04,
    alignItems: 'center',
    paddingHorizontal: orientation.isPotrait
      ? orientation.width * 0.035
      : orientation.width * 0.02,
    marginTop: orientation.isPotrait
      ? orientation.width * 0.015
      : orientation.width * 0.02,
  }),

  optionModal: {
    flexDirection: 'row',
  },
  buttonMenuItem: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.075
      : orientation.width * 0.045,
    height: orientation.isPotrait
      ? orientation.height * 0.065
      : orientation.height * 0.45,
    maxHeight: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 95,
    color: 'black',
  }),
  fontTitle: orientation => ({
    fontSize: orientation.isPotrait
      ? (orientation.width + orientation.height) / 65
      : (orientation.width + orientation.height) / 85,
    color: 'black',
  }),
  fontMenu: orientation => ({
    fontSize: (orientation.width + orientation.height) / 85,
    color: 'black',
    paddingStart: orientation.width * 0.01,
  }),
});

export default styles;
