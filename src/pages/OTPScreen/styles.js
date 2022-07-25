import {StyleSheet} from 'react-native';
import {colors} from '../../utils';

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#2527CB',
  },
  container: orientation => ({
    padding: 10,
    borderTopEndRadius: 50,
    borderTopLeftRadius: 50,
    height: orientation.height * 0.833,
    flex: 10,
    backgroundColor: 'white',
    flexDirection: orientation.isPotrait ? 'column' : 'row',
    justifyContent: orientation.isPotrait ? null : 'center',
    alignItems: orientation.isPotrait ? 'center' : null,
  }),
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellView: orientation => ({
    paddingVertical: orientation.isPotrait
      ? orientation.height * 0.01
      : orientation.height * 0.025,
    width: orientation.isPotrait
      ? orientation.width * 0.09
      : orientation.width * 0.06,
    margin: orientation.isPotrait
      ? orientation.width * 0.013
      : orientation.width * 0.008,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 7,
  }),
  cellText: orientation => ({
    textAlign: 'center',
    fontSize: (orientation.width + orientation.height) / 87,
    // backgroundColor: 'orange',
  }),
  bottomView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 50,
    alignItems: 'center',
  },
  logoName: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.35
      : orientation.width * 0.15,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.07,
    resizeMode: 'contain',
  }),
  logoImage: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.3
      : orientation.width * 0.1,
    height: orientation.isPotrait
      ? orientation.height * 0.15
      : orientation.height * 0.17,
    resizeMode: 'contain',
  }),
  button: orientation => ({
    backgroundColor: '#0844bc',
    width: orientation.isPotrait
      ? orientation.width * 0.685
      : orientation.width * 0.45,
    height: orientation.isPotrait
      ? orientation.height * 0.05
      : orientation.height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'silver',
    maxHeight: 60,
  }),
  resend: orientation => ({
    flexDirection: 'row',
    paddingBottom: orientation.height * 0.03,
  }),
  topContainer: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.55
      : orientation.width * 0.25,
    height: orientation.isPotrait
      ? orientation.height * 0.25
      : orientation.height * 0.65,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  bottomContainer: orientation => ({
    alignItems: 'center',
    justifyContent: 'center',
    height: orientation.isPotrait
      ? orientation.height * 0.35
      : orientation.height * 0.65,
    width: orientation.isPotrait
      ? orientation.width * 0.9
      : orientation.width * 0.5,
  }),
  text: orientation => ({
    fontSize: (orientation.width + orientation.height) / 95,
    color: 'black',
  }),
  textTitle: orientation => ({
    fontSize: (orientation.width + orientation.height) / 85,
    color: 'black',
  }),
  countdownFont: orientation => ({
    fontSize: (orientation.width + orientation.height) / 50,
    color: colors.background.secondary,
  }),
  countdownLabelFont: orientation => ({
    fontSize: (orientation.width + orientation.height) / 90,
    color: colors.background.secondary,
  }),
});

export default styles;
