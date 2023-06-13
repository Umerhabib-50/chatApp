import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant';

export default StyleSheet.create({
  textInputView: {
    marginVertical: 10,
  },
});

export const ddstyles = StyleSheet.create({
  container: {position: 'relative', backgroundColor: COLORS.white},
  dropdown: {
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: COLORS.white,
    left: 10,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 5,
    fontSize: 12,
  },
  placeholderStyle: {
    fontSize: 16,
    // color: '#000',
    color: COLORS.LightGray,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: 'black',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export const multiSelect = StyleSheet.create({
  multiSelect: {
    marginTop: 3,
    marginBottom: 5,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 5,
    paddingHorizontal: 16,
    borderWidth: 1,
  },
});
