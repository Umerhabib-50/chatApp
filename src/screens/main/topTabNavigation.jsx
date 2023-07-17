import React, {createContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {RoomsScreen} from './rooms';
import {BusinessScreen} from './business';
import {LogOutScreen} from './logOut';
import {StatusScreen} from './statusFile/status';
export const TabContext = createContext();
const mainHandler = () => {
  Alert.alert('', 'Under Development.', [
    {
      text: 'OK',
      onPress: () => console.log(''),
    },
  ]);
};

export const TabNavigationScreen = () => {
  const [activeTab, setActiveTab] = useState('Rooms');
  const Tab = createMaterialTopTabNavigator();
  const handleTabPress = tab => {
    setActiveTab(tab);
  };
  return (
    <TabContext.Provider value={{activeTab, setActiveTab}}>
      <View style={{flex: 1}}>
        <View style={styles.header}>
          <View
            style={{
              paddingHorizontal: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 19}}>
                ChatApp
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '50%',
              }}>
              <TouchableOpacity onPress={() => mainHandler()}>
                <Image
                  source={require('../../assets/chatCam.png')}
                  style={{width: 23, height: 23, marginTop: '15%'}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => mainHandler()}>
                <Image
                  source={require('../../assets/search.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => mainHandler()}>
                <Image
                  source={require('../../assets/option.png')}
                  style={{width: 34, height: 34}}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={styles.bottomBar}>
            <View>
              <Text style={styles.bottomText}>Rooms</Text>
            </View>
            <TouchableOpacity onPress={() => mainHandler()}>
              <Text style={styles.bottomText}>Status</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                onPress={() => dispatch(logOutAction(navigation))}>
                <Text style={styles.bottomText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View> */}
        </View>

        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {color: 'white', fontWeight: 'bold'},
            tabBarStyle: {backgroundColor: '#128c7e'},
            tabBarIndicatorStyle: {
              borderBottomColor: 'white',
              borderBottomWidth: 2,
            },
            tabBarPressColor: 'transparent', // Remove ripple effect
          }}>
          <Tab.Screen
            name="Rooms"
            component={RoomsScreen}
            listeners={{
              tabPress: () => handleTabPress('Rooms'),
            }}
          />
          <Tab.Screen
            name="Status"
            component={StatusScreen}
            listeners={{
              tabPress: () => handleTabPress('Status'),
            }}
          />
          <Tab.Screen
            name="LogOut"
            component={LogOutScreen}
            listeners={{
              tabPress: () => handleTabPress('LogOut'),
            }}
          />
        </Tab.Navigator>
      </View>
    </TabContext.Provider>
  );
};

const styles = StyleSheet.create({
  chatScreen: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    //   height: '15%',
    paddingVertical: 15,
    backgroundColor: '#128c7e',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  join: {
    height: '85%',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: '1%',
  },
  bottomText: {
    color: 'white',

    // fontWeight: 'bold',
    fontSize: 14,
    // marginTop: '20%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8,
  },
  input: {
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
  },

  card: {
    // backgroundColor: '#FFFFFF',
    width: '100%',
  },
  text: {
    fontSize: 15,
    marginLeft: 8,
    color: '#000000',
    fontWeight: '500',
  },
  subTitle: {
    marginLeft: 15,
  },
  singleCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: '2%',
  },
});
