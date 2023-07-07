import {StyleSheet} from 'react-native';

export const SettingStyle = StyleSheet.create({
  container: {
    backgroundColor: '#128c7e',
    flex: 1,
  },
  tabBar: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // paddingHorizontal: 15,
    // paddingTop: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    width: 30,
    height: 30,
  },
  roomImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
  },
  roomInfoContainer: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
  },
  roomName: {
    color: '#ffffff',
    fontSize: 25,
    textAlign: 'center',
  },
  menuIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    alignSelf: 'center',
    marginTop: 20,
  },
  menuItem: {
    alignItems: 'center',
  },
  menuImage: {
    height: 30,
    width: 30,
  },
  menuText: {
    color: '#ffffff',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#004940',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: '500',
    marginBottom: 5,
  },
  sectionSubtitle: {
    color: '#dddddd',
  },
  row: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingVertical: 8,
    alignItems: 'center',
  },
  rowImage: {
    width: 25,
    height: 25,
  },
  rowContent: {
    flexDirection: 'row',
    marginLeft: 19,
  },
  rowTitle: {
    color: '#fff',
    fontWeight: '500',
  },
  rowSubtitle: {
    color: '#dddddd',
    marginLeft: 5,
  },
});
