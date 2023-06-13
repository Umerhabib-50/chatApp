import React from 'react';
import {ImageBackground} from 'react-native';

export const CustomImageBg = ({source, children, style}) => {
  return (
    <>
      <ImageBackground
        source={source}
        style={[style, {flex: 1, justifyContent: 'center'}]}>
        {children}
      </ImageBackground>
    </>
  );
};
