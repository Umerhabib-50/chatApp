import * as React from 'react';
import {Text as ReactNativeText} from 'react-native-paper';

export const Text = ({title, children, style, variant, color, ...rest}) => {
  // figure out which content to use
  const content = title || children;

  return (
    <ReactNativeText
      {...rest}
      style={[style, {color: color ? color : 'black'}]}
      variant={variant}>
      {content}
    </ReactNativeText>
  );
};
