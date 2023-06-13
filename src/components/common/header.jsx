import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

// import BackIcon from '../../../assets/logo/left-vector.svg';
import {CustomButton} from '../button/custom-button';
import {Text} from '../text/text';
import {COLORS, ImagesPath} from '../../constant';
import {Appbar, TextInput} from 'react-native-paper';
import {Icon} from './icon';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {CrossIcon} from '../../constant/icons';

export const Header = ({
  icon_bg_clr,
  title,
  title2,
  righticon,
  right_icon_size,
  lefticon,
  left_icon_size,
  navigation,
  header_text,
  onRighticonpress,
  onleftIconpress,
  drawer,
  image,
  // myRoute,
  // startRunHandler,
  // liveTrack,
}) => {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {image == 'undefined'
            ? image && (
                <Image
                  style={{height: 50, width: 50, borderRadius: 50}}
                  source={ImagesPath.placeHolder}
                />
              )
            : image && (
                <Image
                  style={{width: 40, height: 40, borderRadius: 50}}
                  source={{
                    uri: `http://192.168.1.89:8000/uploads/images/resized-${image}`,
                  }}
                />
              )}
          {lefticon && (
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 7,
                padding: 5,
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (lefticon === 'MenuIcon') {
                    onleftIconpress();
                  } else if (lefticon === 'BackIcon') {
                    navigation.goBack();
                  }
                }}>
                <Icon size={left_icon_size} name={lefticon} />
              </TouchableOpacity>
            </View>
          )}
          {title && title2 ? (
            <>
              <View
                style={{
                  width: 200,
                  marginLeft: '5%',
                  paddingRight: '3%',
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18}}
                  color={COLORS.white}>
                  {title}
                </Text>
                <Text variant="bodyLarge" color={COLORS.white}>
                  {title2}
                </Text>
              </View>
            </>
          ) : (
            <>
              <View
                style={{
                  width: 200,
                  marginLeft: '5%',
                  paddingRight: '3%',
                }}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 18}}
                  color={COLORS.white}>
                  {title}
                </Text>
              </View>
            </>
          )}
        </View>

        {righticon && (
          <View
            style={{
              // backgroundColor: icon_bg_clr,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 7,
              padding: 5,
            }}>
            <TouchableOpacity
              onPress={() => {
                if (righticon == 'CrossIcon') {
                  navigation.goBack();
                }
                // if (righticon == 'SearchIcon') {
                //   setShowInput(true);
                // }

                // if (righticon == 'EditIcon') {
                //   onRighticonpress();
                //   return;
                // }
                navigation.goBack();
              }}>
              <Icon size={right_icon_size} name={righticon} />
            </TouchableOpacity>
          </View>
        )}
      </View>

      {header_text && (
        <Text style={{marginTop: 10}} color="white">
          {header_text}
        </Text>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  input: {
    // width: '100%',
    height: 30,
  },
  inputIcon: {
    display: 'flex',
    flexDirection: 'row',
  },
});
