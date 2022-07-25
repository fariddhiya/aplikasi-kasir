import {StyleSheet} from 'react-native';
import {colors} from '../../utils/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  boxHeader: orientation => ({
    backgroundColor: 'white',
    width: orientation.isPotrait
      ? orientation.width * 0.9
      : orientation.width * 0.88,
    height: orientation.isPotrait
      ? orientation.height * 0.55
      : orientation.height * 1,
    paddingVertical: orientation.isPotrait
      ? orientation.height * 0.01
      : orientation.height * 0.05,
    position: 'absolute',
    alignSelf: 'center',
    top: orientation.isPotrait
      ? orientation.height * 0.1
      : orientation.height * 0.15,
    borderRadius: (orientation.width + orientation.height) / 100,
    elevation: 2,
    justifyContent: 'space-around',
  }),
  percentageIncome: orientation => ({
    flexDirection: 'row',
    marginTop: 3,
    alignContent: 'center',
    alignItems: 'center',
  }),
  header: orientation => ({
    flexDirection: 'row',
    borderBottomWidth: 1.5,
    borderColor: '#eeeeee',
    justifyContent: 'space-between',
    paddingHorizontal: orientation.isPotrait
      ? orientation.width * 0.09
      : orientation.width * 0.07,
    paddingBottom: orientation.isPotrait
      ? orientation.height * 0.008
      : orientation.height * 0.05,
  }),
  welcomeContainer: orientation => ({
    height: orientation.isPotrait ? hp(10) : hp(20),
  }),
  footerBox: orientation => ({
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: orientation.isPotrait
      ? orientation.width * 0.09
      : orientation.width * 0.07,
  }),
  circle: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.011
      : orientation.width * 0.01,
    height: orientation.isPotrait
      ? orientation.width * 0.011
      : orientation.width * 0.01,
    backgroundColor: 'black',
    borderRadius: 1000,
    marginRight: orientation.width * 0.03,
  }),
  amountMoney: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 12,
  },
  pages: {
    backgroundColor: '#f8f4fc',
    flex: 1,
  },
  headerMain: orientation => ({
    backgroundColor: '#282cc4',
    height: orientation.isPotrait
      ? orientation.height * 0.25
      : orientation.height * 0.2,
    paddingTop: orientation.isPotrait
      ? orientation.height * 0.02
      : orientation.height * 0.02,
    paddingHorizontal: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.03,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }),
  row: orientation => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  menuContainer: orientation => ({
    paddingTop: orientation.isPotrait
      ? orientation.height * 0.43
      : orientation.height * 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    zIndex: -10,
  }),
  menuIcon: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.18
      : orientation.width * 0.12,
    height: orientation.isPotrait
      ? orientation.width * 0.18
      : orientation.width * 0.12,
    borderRadius: (orientation.width + orientation.height) / 150,
    backgroundColor: colors.background.tertiary,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }),
  imageMenu: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.065
      : orientation.width * 0.05,
    height: orientation.isPotrait
      ? orientation.width * 0.065
      : orientation.width * 0.05,
    resizeMode: 'contain',
  }),
  illustration: orientation => ({
    width:
      orientation.isPotrait && orientation.tablet
        ? orientation.width * 0.45
        : orientation.isPotrait && !orientation.tablet
        ? orientation.width * 0.6
        : orientation.isPotrait
        ? orientation.width * 0.6
        : orientation.width * 0.3,
    marginStart: orientation.width * 0.03,
    height: orientation.isPotrait
      ? orientation.height * 0.14
      : orientation.height * 0.3,
  }),
  profileButton: orientation => ({
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    width: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.03,
    height: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.03,
    margin: 5,
  }),
  headerTitle: orientation => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
  skeletonContainer: {backgroundColor: 'blue', height: 150},
  skeletonHeader: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginHorizontal: 10,
  },
  skeletonBoxHeader: {
    width: '93%',
    height: 300,
    borderRadius: 10,
  },
  skeletonMenu: {
    flexDirection: 'row',
    marginHorizontal: 10,
    justifyContent: 'center',
  },
  skeletonBoxMenu: {
    width: '22%',
    height: 90,
    borderRadius: 10,
    margin: 5,
  },
  skeletonHighlight: {
    width: '80%',
    height: 145,
    borderRadius: 10,
    margin: 10,
  },
  descriptionChart: orientation => ({
    marginTop: -5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:
      (orientation.tablet && orientation.isPotrait) || !orientation.tablet
        ? orientation.height * 0.045
        : 0,
  }),
  descChartBox: orientation => ({
    width: orientation.width * 0.018,
    height: orientation.width * 0.018,
    borderRadius: 200,
    marginRight: 10,
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 90,
    color: 'black',
  }),
  fontTitle: orientation => ({
    fontSize: (orientation.width + orientation.height) / 80,
    color: 'black',
  }),
  conditionTrxDesc: orientation => ({
    resizeMode: 'contain',
    width: orientation.isPotrait
      ? orientation.width * 0.03
      : orientation.width * 0.03,
    height: orientation.isPotrait
      ? orientation.width * 0.03
      : orientation.width * 0.03,
    marginRight: 5,
  }),
});

export default styles;
