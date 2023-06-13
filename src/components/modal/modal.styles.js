import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant/colors';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  modalView: {
    flex: 0.44,
    borderWidth: 3,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    width: '90%',

    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
