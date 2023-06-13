import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  cardView: {
    flex: 1,
    marginTop: 80,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
  },
  authGreenIcon: {
    alignSelf: 'center',
    marginTop: -64,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: 26,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: COLORS.white,
    elevation: 10,
  },
  scrollView: {
    flex: 1,
  },
});
