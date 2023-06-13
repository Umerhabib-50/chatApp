import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  CustomDrawer,
  EditScreen,
  HomeScreen,
  LogoutScreen,
  PrivacyPolicyScreen,
  SettingsScreen,
  TOSScreen,
} from '../screens';
import {Icon} from '../components';
import {HolidayNavigator} from './holidayNavigator';

// import all screens here

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: 'white'},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        options={{
          drawerItemStyle: {height: 0},
        }}
        name="home"
        component={HomeScreen}
      />
      {/* <Drawer.Screen
        options={{
          drawerItemStyle: {height: 0},
        }}
        name="edit"
        component={EditScreen}
      /> */}
      <Drawer.Screen
        options={{
          drawerIcon: () => {
            return <Icon name="SettingIcon" size={25} />;
          },
          drawerLabel: 'Settings',
          drawerLabelStyle: {marginLeft: -15, fontSize: 16},
        }}
        name="settings"
        component={SettingsScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => {
            return <Icon name="CupIcon" size={25} />;
          },
          drawerLabel: 'Holiday',
          drawerLabelStyle: {marginLeft: -15, fontSize: 16},
        }}
        name="holidayNavigator"
        component={HolidayNavigator}
      />
      {/* <Drawer.Screen
        options={{
          drawerItemStyle: {height: 0},
        }}
        name="addholiday"
        component={AddHolidayScreen}
      />
      <Drawer.Screen
        options={{
          drawerItemStyle: {height: 0},
        }}
        name="holidaylistdetail"
        component={HolidayListDetailScreen}
      />
      <Drawer.Screen
        options={{
          drawerItemStyle: {height: 0},
        }}
        name="holidaydetails"
        component={HolidayDetailsScreen}
      />

      <Drawer.Screen
        options={{
          drawerItemStyle: {height: 0},
        }}
        name="editholiday"
        component={EditHolidayScreen}
      /> */}
      <Drawer.Screen
        options={{
          drawerIcon: () => {
            return <Icon name="TosIcon" size={25} />;
          },
          drawerLabel: 'Terms of Services',
          drawerLabelStyle: {marginLeft: -15, fontSize: 16},
        }}
        name="tos"
        component={TOSScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: () => {
            return <Icon name="PrivacyIcon" size={25} />;
          },
          drawerLabel: 'Privacy Policy',
          drawerLabelStyle: {marginLeft: -15, fontSize: 16},
        }}
        name="privacy"
        component={PrivacyPolicyScreen}
      />
      {/* <Drawer.Screen
        options={{
          // drawerItemStyle: {height: 0},
          drawerIcon: () => {
            return <Icon name="LogOutIcon" size={25} />;
          },
          drawerLabel: 'Logout',
          drawerLabelStyle: {marginLeft: -15, fontSize: 16},
        }}
        name="logout"
        component={LogoutScreen}
      /> */}
    </Drawer.Navigator>
  );
};
