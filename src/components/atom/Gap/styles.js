import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: (height, width) => ({
    height: height ? height : 0,
    width: width ? width : 0,
  }),
});

export default styles;
