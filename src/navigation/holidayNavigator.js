import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddHolidayScreen,
  EditHolidayScreen,
  HolidayDetailsScreen,
  HolidayScreen,
} from '../screens';

const HolidayStack = createNativeStackNavigator();
export const HolidayNavigator = () => {
  return (
    <HolidayStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HolidayStack.Screen name="holiday" component={HolidayScreen} />
      <HolidayStack.Screen name="addHoliday" component={AddHolidayScreen} />

      <HolidayStack.Screen
        name="holidaydetails"
        component={HolidayDetailsScreen}
      />
      <HolidayStack.Screen name="editHoliday" component={EditHolidayScreen} />
    </HolidayStack.Navigator>
  );
};
