import React from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {useSelector} from 'react-redux';
export const StatusShow = ({navigation, route}) => {
  const {status} = route?.params;
  //   const status = useSelector(state => state?.statusUpload?.statusUpload);
  return (
    <View
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#128c7e',
        paddingHorizontal: 10,
      }}>
      <Text style={{color: '#ffffff', fontSize: 25}}>{status?.text}</Text>
    </View>
  );
};
