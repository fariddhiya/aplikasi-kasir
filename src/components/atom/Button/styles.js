import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loginButton: (resize, color, opacity) => ({
    backgroundColor: color ? color : null,
    justifyContent: 'center',
    width: resize ? 150 * resize : 150,
    height: 40,
    alignItems: 'center',
    borderRadius: 4,
    alignSelf: 'center',
    alignContent: 'center',
    opacity: opacity ? opacity : null,
  }),
  textButton: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default styles;
