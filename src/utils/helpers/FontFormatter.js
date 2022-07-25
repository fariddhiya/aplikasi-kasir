import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const normalize = size => {
  let scale;
  if (SCREEN_WIDTH >= 1200) {
    scale = (SCREEN_WIDTH / 1200) * 3;
  } else if (SCREEN_WIDTH >= 800) {
    scale = (SCREEN_WIDTH / 800) * 2;
  } else {
    scale = SCREEN_WIDTH / 400;
  }
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export {normalize};
