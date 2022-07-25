import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: active => ({
    color: active ? '#FFFFFF' : '#5293FA',
    fontSize: active ? (height + width) / 90 : (height + width) / 100,
    marginTop: 5,
  }),
});

export default styles;
