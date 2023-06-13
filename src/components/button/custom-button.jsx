import React from 'react';
import {Button, Text} from 'react-native-paper';

export const CustomButton = ({
  onPress,

  title,
}) => {
  return (
    <>
      <Button style={{backgroundColor: '#87ceeb'}} onPress={onPress}>
        <Text variant={'titleMedium'}>{title}</Text>
      </Button>
    </>
  );
};
