import {Dimensions} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;

const responsive = size => {
  if (width >= 600 && height >= 600) {
    return wp(size * 0.7);
  } else {
    return wp(size);
  }
};

const responsiveWidth = size => {
  return (size * width) / 360;
  // if (width >= 600 && height >= 600) {
  //   console.log((size * width * 0.6) / 360);
  //   return (size * width * 0.6) / 360;
  // } else if (width >= 600) {
  //   console.log((size * width * 0.7) / 360);
  //   return (size * width * 0.7) / 360;
  // } else {
  //   console.log((size * width) / 360);
  //   return (size * width) / 360;
  // }
};

const responsiveHeight = size => {
  return (size * height) / 720;
  // if (width >= 600 && height >= 600) {
  //   return (size * height * 0.8) / 720;
  // } else {
  //   return (size * height) / 720;
  // }
};

export {responsive, responsiveHeight, responsiveWidth};
