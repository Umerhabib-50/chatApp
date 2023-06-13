import React from 'react';
import {Button} from 'react-native-paper';
import {COLORS} from '../../constant';
import {Icon} from '../common';
import {Text} from '../text/text';

export const CustomButton = ({
  style,
  iconName,
  iconSize,
  mode = 'contained',
  color = COLORS.primary,
  textColor = COLORS.white,
  onPress,
  loading,
  title,
  variant = 'titleMedium',
}) => {
  return (
    <>
      <Button
        style={[style, {borderRadius: 5}]}
        icon={iconName && (() => <Icon name={iconName} size={iconSize} />)}
        mode={mode}
        buttonColor={color}
        onPress={onPress}
        loading={loading}
        disabled={loading}>
        <Text variant={variant} color={textColor}>
          {title}
        </Text>
      </Button>
    </>
  );
};
