import {StyleSheet} from 'react-native';
export const SettingStyle = StyleSheet.create({
  tabBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  roomImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: '10%',
  },
  roomName: {
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
  },
  menuIcon: {
    display: 'flex',
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: '8%',
  },
  menuImage: {
    height: 30,
    width: 30,
  },
  menuText: {
    color: '#ffffff',
    marginTop: '20%',
  },
});
