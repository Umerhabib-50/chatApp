import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const Logo = ({style}) => {
  return (
    <View style={style}>
      <ActivityIndicator size="small" color="#00A77A" />
    </View>
  );
};
