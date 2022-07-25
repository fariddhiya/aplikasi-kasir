import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 80,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 12,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  removeButton: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
    position: 'absolute',
    top: -7,
    right: -7,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
