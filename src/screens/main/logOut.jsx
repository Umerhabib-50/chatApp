import React from 'react';
import {View, Text} from 'react-native';
import {CustomButton} from '../../components';
import {useDispatch} from 'react-redux';
import {logOutAction} from '../../redux';
export const LogOutScreen = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: '5%',
      }}>
      <CustomButton
        title={'LogOut'}
        onPress={() => dispatch(logOutAction(navigation))}
      />
    </View>
  );
};
