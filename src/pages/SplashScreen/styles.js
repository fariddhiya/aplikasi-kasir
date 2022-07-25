import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {colors, responsive} from '../../utils';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/helpers/Responsive';

const styles = StyleSheet.create({
  pages: orientation => ({
    flex: 1,
    backgroundColor: colors.background.splash,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  image: orientation => ({
    height: orientation.isPotrait
      ? orientation.width * 0.45
      : orientation.width * 0.2,
    width: orientation.isPotrait
      ? orientation.width * 0.45
      : orientation.width * 0.2,
    resizeMode: 'contain',
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 60,
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
    bottom: orientation.isPotrait ? '5%' : '6%',
  }),
});

export default styles;
