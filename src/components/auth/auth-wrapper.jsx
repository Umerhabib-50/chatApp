import React from 'react';
import {View, ScrollView, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// import AuthBackgroundImage from '../../../assets/image/background/auth-background.png';
// import AuthGreenIcon from '../../../assets/logo/login-svgs/authIcon_green.svg';

import {CustomImageBg} from '../backgroundImage';

// styles
import styles from './auth-styles';

export const AuthWrapper = ({children}) => {
  const height = Dimensions.get('screen');

  return (
    <SafeAreaView style={styles.container}>
      {/* <CustomImageBg source={AuthBackgroundImage}> */}
      <View style={styles.cardView}>
        {/* <View style={styles.authGreenIcon}>
            <AuthGreenIcon />
          </View> */}
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}>
          {children}
        </ScrollView>
      </View>
      {/* </CustomImageBg> */}
    </SafeAreaView>
  );
};
