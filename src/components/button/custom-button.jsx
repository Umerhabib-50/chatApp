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
          borderRadius: 4,
        }}
        onPress={onPress}>
        <Text variant={'titleMedium'} style={{color: '#128C7E'}}>
          {title}
        </Text>
      </Button>
    </>
  );
};
