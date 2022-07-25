import {Dimensions} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// const fonts = {
//   android: {
//     200: 'Roboto-Thin',
//     300: 'Roboto-Light',
//     400: 'Roboto-Regular',
//     500: 'Roboto-Medium',
//     600: 'Roboto-Bold',
//     700: 'Roboto-Black',
//     italic: 'Roboto-Italic',
//   },
// };

const responsiveFont = size => {
  let width = Dimensions.get('window').width;

  if (width >= 1200) {
    return wp(size * 0.65);
  } else if (width >= 800) {
    return wp(size * 0.85);
  } else {
    return wp(size);
  }
  return true;
};

export {responsiveFont};
