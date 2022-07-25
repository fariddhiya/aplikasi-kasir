import {StyleSheet} from 'react-native';
import {normalize, responsive} from '../../utils';
import {responsiveFont} from '../../utils';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#282cc4',
    flex: 1,
  },
  logoName: orientation => ({
    height: orientation.isPotrait
      ? orientation.height * 0.1
      : orientation.width * 0.07,
    width: orientation.isPotrait
      ? orientation.width * 0.4
      : orientation.width * 0.2,
    resizeMode: 'contain',
  }),
  logoImage: orientation => ({
    height: orientation.isPotrait
      ? orientation.height * 0.2
      : orientation.width * 0.2,
    width: orientation.isPotrait
      ? orientation.width * 0.25
      : orientation.width * 0.15,
    resizeMode: 'contain',
  }),
  button: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.67
      : orientation.width * 0.4,
    height: orientation.isPotrait
      ? orientation.height * 0.045
      : orientation.height * 0.06,
    borderRadius: orientation.isPotrait
      ? orientation.width * 0.013
      : orientation.width * 0.007,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 65,
    minHeight: 35,
    marginBottom: orientation.height * 0.015,
    backgroundColor: 'white',
  }),
  fieldForm: orientation => ({
    backgroundColor: '#f2f6fc',
    borderRadius: orientation.isPotrait
      ? orientation.width * 0.013
      : orientation.width * 0.007,
    paddingStart: 20,
    width: orientation.isPotrait
      ? orientation.width * 0.67
      : orientation.width * 0.4,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.1,
    maxHeight: 60,
    maxWidth: 600,
  }),
  form: orientation => ({
    height: orientation.isPotrait
      ? orientation.height * 0.1
      : orientation.height * 0.15,
    // backgroundColor: 'orange',
    marginVertical: '1%',
  }),
  container: orientation => ({
    flexDirection: orientation.isPotrait ? 'column' : 'row',
    justifyContent: 'space-evenly',
    // backgroundColor: 'aqua',
    alignItems: 'center',
  }),
  formContainer: orientation => ({
    alignItems: 'center',
    justifyContent: 'space-evenly',
    height: orientation.isPotrait
      ? orientation.height * 0.52
      : orientation.height * 0.75,
    width: orientation.isPotrait
      ? orientation.width * 0.9
      : orientation.width * 0.5,
    // backgroundColor: 'black',
    marginTop: orientation.isPotrait ? -35 : 0,
  }),
  logoContainer: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.7
      : orientation.width * 0.3,
    height: orientation.isPotrait
      ? orientation.height * 0.35
      : orientation.height * 0.75,
    justifyContent: 'center',
    // backgroundColor: 'grey',
    alignItems: 'center',
  }),
  font: orientation => ({
    fontSize: (orientation.height + orientation.width) / 95,
    color: 'white',
  }),
  textInputFont: orientation => ({
    fontSize: (orientation.height + orientation.width) / 105,
    color: 'black',
  }),
  loginButton: orientation => ({
    flexDirection: 'row',
    width: orientation.isPotrait ? wp(54) : wp(47),
    paddingVertical: hp(1),
    justifyContent: 'center',
  }),
});

export default styles;
