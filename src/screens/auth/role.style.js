import {StyleSheet} from 'react-native';

export const RoleStyle = StyleSheet.create({
  //...........|| ROLE SCREEN  COMPONENT ||............
  backGround: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-evenly',
    // alignItems: 'center',
  },
  //..........|| LOGO VIEW ||...........
  logo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_image: {
    width: 50,
    height: 50,
  },

  //.........|| IMAGE VIEW ||...........
  images: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center_image: {
    width: 250,
    height: 170,
  },
  //.............|| ROLE VIEW ||..............


  role_text: {
    paddingBottom: 30,
    textAlign: 'center',
  },
  card_image: {
    width: 30,
    height: 30,
  },
});
