import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant';

export const CustomDetailsStyle = StyleSheet.create({
  card_head: {
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 12,
    marginTop: '5%',
  },
  join_card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: COLORS.disable,
    width: '100%',
  },

  total: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '3%',
  },
  text: {
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 2,
  },
});
