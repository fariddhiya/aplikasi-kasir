import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#282cc4',
    flex: 1,
  },
  topBar: orientation => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: orientation.isPotrait
      ? orientation.height * 0.03
      : orientation.height * 0.05,
    marginHorizontal: orientation.isPotrait
      ? orientation.width * 0.1
      : orientation.width * 0.075,
    alignItems: 'center',
  }),
  saveButton: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.4
      : orientation.width * 0.4,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.085,
    marginVertical: orientation.height * 0.04,
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  }),

  printButton: orientation => ({
    backgroundColor: '#08246c',
    width: orientation.isPotrait
      ? orientation.width * 0.24
      : orientation.width * 0.15,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.06,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingHorizontal: 5,
  }),
  circleOrange: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.03
      : orientation.width * 0.02,
    height: orientation.isPotrait
      ? orientation.width * 0.03
      : orientation.width * 0.02,
    backgroundColor: '#ff642c',
    borderRadius: 100,
  }),
  fontTitle: orientation => ({
    fontSize: (orientation.width + orientation.height) / 85,
    color: 'white',
    fontWeight: 'bold',
  }),
});

export default styles;
