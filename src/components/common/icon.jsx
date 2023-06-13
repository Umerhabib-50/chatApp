import React from 'react';
import {TouchableRipple} from 'react-native-paper';

import * as Svg from '../../constant/icons';

export const Icon = ({
  name,
  size,
  onPress,
  //  color,
  // style,
}) => {
  const SvgIcon = Svg[name];
  return (
    <SvgIcon
      onPress={onPress}
      // style={style}
      // color={color}
      width={size}
      height={size}
    />
  );
};
