import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: orientation => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: orientation.height * 0.01,
    backgroundColor: '#2527CB',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingHorizontal: orientation.isPotrait
      ? orientation.width * 0.1
      : orientation.width * 0.22,
  }),
});

export default styles;
