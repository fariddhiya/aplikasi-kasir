import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pages: {backgroundColor: '#f8f4fc', flex: 1},
  skeletonCard: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.75
      : orientation.width * 0.65,
    height: orientation.isPotrait
      ? orientation.height * 0.15
      : orientation.height * 0.28,
    borderRadius: 7,
    margin: orientation.isPotrait
      ? orientation.height * 0.02
      : orientation.height * 0.02,
  }),
  skeletonContainer: orientation => ({
    flexDirection: 'row',
    alignSelf: 'center',
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 95,
    textAlign: 'center',
    color: 'black',
  }),
});

export default styles;
