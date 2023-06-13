import {StyleSheet} from 'react-native';
import {COLORS} from '../../constant';

export const AuthStyles = StyleSheet.create({
  // LOGIN SCREEN CSS--------------------------------------------

  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  sec1: {
    flex: 0.17,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  headingIcon: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: -12,
    alignItems: 'center',
  },
  sec2: {
    paddingTop: 30,
    flex: 0.83,
    paddingHorizontal: 25,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  endText: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
  },
  forgetsave: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 25,
  },

  // FORGOT PASSWORD SCREEN CSS--------------------------------------------
  forgot_container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  forgot_sec1: {
    flex: 0.17,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  forgot_headingIcon: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: -12,
    alignItems: 'center',
  },
  forgot_sec2: {
    paddingTop: 30,
    flex: 0.83,
    paddingHorizontal: 25,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  forgot_btn: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
  },
});
