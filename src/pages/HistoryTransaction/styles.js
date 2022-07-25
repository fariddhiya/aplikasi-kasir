import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  pages: {
    backgroundColor: '#f8f4fc',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    backgroundColor: '#f8f4fc',
  },
  summaryTrx: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  boxSummaryTrx: orientation => ({
    alignItems: 'center',
    width: orientation.isPotrait
      ? orientation.width * 0.28
      : orientation.width * 0.2,
  }),
  lines: {
    height: '100%',
    width: 2,
    backgroundColor: '#e4e4e4',
  },
  historyTitle: orientation => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: orientation.width * 0.1,
    paddingVertical: orientation.height * 0.02,
  }),
  iconFilter: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  listCardTransaction: {
    backgroundColor: '#f8f4fc',
    flex: 1,
    height: '100%',
  },
  chartMenu: orientation => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: orientation.isPotrait
      ? orientation.height * 0.08
      : orientation.height * 0.12,
    backgroundColor: '#f8f4fc',
    zIndex: 99999999999,
    alignItems: 'center',
  }),
  chartBox: orientation => ({
    backgroundColor: '#D6CFC7',
    width: '32%',
    margin: 3,
    height: orientation.isPotrait
      ? orientation.height * 0.06
      : orientation.height * 0.085,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  }),
  activeChartBox: orientation => ({
    backgroundColor: '#2423b2',
    width: '32%',
    margin: 3,
    height: orientation.isPotrait
      ? orientation.height * 0.06
      : orientation.height * 0.085,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  }),
  descriptionChart: orientation => ({
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: orientation.height * 0.02,
  }),
  buyBox: {
    width: 15,
    height: 15,
    backgroundColor: '#d87ce4',
    borderRadius: 2,
    marginRight: 5,
  },
  saleBox: {
    width: 15,
    height: 15,
    backgroundColor: '#807cfc',
    borderRadius: 2,
    marginRight: 5,
  },
  descBox: orientation => ({
    width: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.02,
    height: orientation.isPotrait
      ? orientation.width * 0.05
      : orientation.width * 0.02,
    backgroundColor: '#807cfc',
    borderRadius: 100,
    marginRight: 5,
  }),
  containerFlatlist: {
    flexGrow: 0,
    flex: 0,
    backgroundColor: '#f8f4fc',
    height: '100%',
  },
  filterButton: orientation => ({
    backgroundColor: '#f88c54',
    width: orientation.isPotrait
      ? orientation.width * 0.27
      : orientation.width * 0.17,
    height: orientation.isPotrait
      ? orientation.width * 0.07
      : orientation.width * 0.05,
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    alignItems: 'center',
    minHeight: 35,
  }),
  font: orientation => ({
    fontSize: (orientation.width + orientation.height) / 85,
    color: 'black',
  }),
  rowDesc: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
});

export default styles;
