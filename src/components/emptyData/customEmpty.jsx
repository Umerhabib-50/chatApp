import React from 'react';
import {Image, View} from 'react-native';
import {Icon, PlusIcon, Text, Wrapper} from '../../components';

import {CustomEmptyStyle} from './customEmp.style';
import {IconButton, MD3Colors} from 'react-native-paper';
import {COLORS, ImagesPath} from '../../constant';

export const CustomEmpty = ({title, subtitle, onPress, buttonFalse}) => {
  return (
    <>
      <View
        style={
          buttonFalse
            ? CustomEmptyStyle.main2_empty
            : CustomEmptyStyle.main_empty
        }>
        <View style={CustomEmptyStyle.text_empty}>
          <View>
            <Image source={ImagesPath.empty} />
          </View>
          <View>
            <Text
              style={{textAlign: 'center'}}
              variant="headlineMedium"
              color={COLORS.black}>
              {title}
            </Text>

            <Text
              style={{textAlign: 'center'}}
              variant="titleMedium"
              color="#908FAE">
              {subtitle}
            </Text>
          </View>
        </View>
        {!buttonFalse && <PlusIcon onPress={onPress} />}
      </View>
    </>
  );
};
