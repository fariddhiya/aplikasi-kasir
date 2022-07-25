import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  deleteModal: {
    width: 200,
    height: 170,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  confirmationRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  noButton: {
    width: 100,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderColor: '#282c9c',
    borderWidth: 1,
  },
  yesButton: {
    backgroundColor: '#282c9c',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 10,
  },
});

export default styles;
