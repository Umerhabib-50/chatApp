// import {StyleSheet} from 'react-native';
// export const SettingStyle = StyleSheet.create({
//   tabBar: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//   },
//   roomImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginTop: '10%',
//   },
//   roomName: {
//     color: '#ffffff',
//     fontSize: 25,
//     textAlign: 'center',
//   },
//   menuIcon: {
//     display: 'flex',
//     flexDirection: 'row',
//     width: '50%',
//     justifyContent: 'space-between',
//     alignSelf: 'center',
//     marginTop: '8%',
//   },
//   menuImage: {
//     height: 30,
//     width: 30,
//   },
//   menuText: {
//     color: '#ffffff',
//     marginTop: '20%',
//   },
// });
import {StyleSheet} from 'react-native';

export const SettingStyle = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 20,
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
    marginTop: '3%',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#ffffff',
  },
  roomName: {
    color: '#000000',
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
    color: '#000000',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    marginTop: 13,
    paddingVertical: 14,
  },
  sectionTitle: {
    color: '#000000',
    fontWeight: '500',
    marginBottom: 5,
  },
  sectionSubtitle: {
    color: '#666362',
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
    color: '#000000',
    fontWeight: '500',
  },
  rowSubtitle: {
    color: '#dddddd',
    marginLeft: 5,
  },
});
