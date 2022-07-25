import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/color';

const styles = StyleSheet.create({
  textStyle: (size, color, align, width, weight) => ({
    fontSize: size ? size : 14,
    color: color ? color : 'black',
    textAlign: align ? align : 'left',
    width: width ? width : null,
    fontWeight: weight ? weight : 'normal',
  }),
});

export default styles;
