import React from 'react';
import {Button, Text} from 'react-native-paper';

export const CustomButton = ({
  onPress,

  title,
}) => {
  return (
    <>
      <Button
        style={{
          backgroundColor: 'white',
          borderRadius: 0,
          borderWidth: 0.5,
          borderColor: '#e3dac9',
          width: '50%',
          paddingVertical: '2%',
        }}
        onPress={onPress}>
        <Text variant={'labelMedium'} style={{color: '#006257'}}>
          {title}
        </Text>
      </Button>
    </>
  );
};
