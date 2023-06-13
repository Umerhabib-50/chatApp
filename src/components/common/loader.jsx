import React from 'react';

import {Logo} from './logo';

export const LoadingWrapper = ({loading, children}) => {
  return (
    <>{loading ? <Logo style={{marginVertical: '50%'}} /> : <>{children}</>}</>
  );
};
