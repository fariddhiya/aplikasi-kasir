import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 355,
    height: 95,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 15,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  contentHistorySale: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameItem: {
    fontWeight: 'bold',
    color: 'black',
    width: 190,
  },
  iconStatus: {
    backgroundColor: '#b0f4d4',
    width: 60,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
});

export default styles;
