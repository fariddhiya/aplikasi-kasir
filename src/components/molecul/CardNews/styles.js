import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.75
      : orientation.width * 0.65,
    height: orientation.isPotrait
      ? orientation.height * 0.15
      : orientation.height * 0.28,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    margin: orientation.isPotrait
      ? orientation.height * 0.02
      : orientation.height * 0.02,
    paddingHorizontal: orientation.isPotrait
      ? orientation.width * 0.04
      : orientation.width * 0.05,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  }),

  imgNews: orientation => ({
    alignItems: 'center',
    alignSelf: 'center',
    width: orientation.isPotrait
      ? orientation.width * 0.25
      : orientation.width * 0.15,
    height: orientation.isPotrait
      ? orientation.height * 0.1
      : orientation.height * 0.2,
    borderRadius: 10,
  }),
  descriptionNews: {
    justifyContent: 'space-evenly',
  },
  fontTitle: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.3
      : orientation.width * 0.3,
    fontSize: (orientation.width + orientation.height) / 95,
    color: 'black',
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 115,
  }),
});

export default styles;
