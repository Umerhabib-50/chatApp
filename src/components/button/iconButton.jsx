import React from 'react';
import {IconButton} from 'react-native-paper';
import {Icon} from '../common';

export const IconBtn = ({name = '', size = '20', onPress, color}) => {
  return (
    <>
      <IconButton
        icon={() => <Icon name={name} size={size} />}
        iconColor={color}
        onPress={onPress}
      />
    </>
  );
};
