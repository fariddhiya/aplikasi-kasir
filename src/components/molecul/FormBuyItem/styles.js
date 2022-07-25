import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  closeButton: {
    width: 25,
    height: 25,
    backgroundColor: 'red',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 30,
    position: 'absolute',
    top: -10,
    right: -10,
  },
  fieldForm: {
    width: 300,
    backgroundColor: '#d8d4d4',
    height: 45,
    borderRadius: 5,
    marginVertical: 5,
    paddingStart: 20,
  },
  form: {
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    width: 350,
    height: 220,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonDelete: {
    backgroundColor: '#E93242',
    width: 27,
    height: 27,
    position: 'absolute',
    bottom: 100,
    left: 100,
    right: 100,
  },
});

export default styles;
