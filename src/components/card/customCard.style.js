import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant/colors';

export const CustomCardStyle = StyleSheet.create({
  card_con: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    padding: 15,
    marginBottom: 15,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginLeft: 15,
    display: 'flex',
    justifyContent: 'center',
  },
  img_card: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  outer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  inner: {
    width: 12,
    height: 12,
    borderRadius: 10,
  },
});
