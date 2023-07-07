import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getRoomAction} from '../../redux';
import {SettingStyle} from './css/settingStyle';
import {CustomModal} from '../../components';

export const SettingScreen = ({navigation, route}) => {
  const {roomId} = route?.params;

  const array = [
    {
      image: require('../../assets/bell.png'),
      title: 'Mute notifications',
      title2: 'Encryption',
      subTitle: 'Always',
    },
    {
      image: require('../../assets/music.png'),
      title: 'Custom notifications',
      title2: 'Disappearing messages',
      subTitle: null,
    },
    {
      image: require('../../assets/gallery.png'),
      title: 'Media visibility',
      title2: 'Group settings',
      subTitle: null,
    },
  ];

  const getRoomData = useSelector(state => state?.getRoom?.getRoom);
  const findArray = getRoomData?.find(data => data?._id === roomId);

  const image = findArray?.image;
  const roomname = findArray?.name;

  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(getRoomAction());
  }, []);

  return (
    <View style={SettingStyle.container}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('chats', {roomId});
          }}>
          <Image
            source={require('../../assets/backIcon.png')}
            style={SettingStyle.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('subChange', {roomId})}>
          <Image
            source={require('../../assets/option.png')}
            style={SettingStyle.icon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
      // style={SettingStyle.container}
      >
        <View style={SettingStyle.tabBar}>
          {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate('chats', {username, roomname, roomId, image})
            }>
            <Image
              source={require('../../assets/backIcon.png')}
              style={SettingStyle.icon}
            />
          </TouchableOpacity> */}

          <TouchableOpacity>
            {findArray?.image ? (
              <Image
                source={{uri: findArray?.image}}
                style={SettingStyle.roomImage}
              />
            ) : (
              <Image
                source={require('../../assets/group.png')}
                style={SettingStyle.roomImage}
              />
            )}
          </TouchableOpacity>
          {/* <TouchableOpacity
            onPress={() =>
              navigation.navigate('subChange', {roomId, roomname})
            }>
            <Image
              source={require('../../assets/option.png')}
              style={SettingStyle.icon}
            />
          </TouchableOpacity> */}
        </View>

        <View style={SettingStyle.roomInfoContainer}>
          <Text style={SettingStyle.roomName}>{findArray?.name}</Text>

          <View style={SettingStyle.menuIcon}>
            <TouchableOpacity style={SettingStyle.menuItem}>
              <Image
                source={require('../../assets/call.png')}
                style={SettingStyle.menuImage}
              />
              <Text style={SettingStyle.menuText}>Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SettingStyle.menuItem}>
              <Image
                source={require('../../assets/videoCem.png')}
                style={SettingStyle.menuImage}
              />
              <Text style={SettingStyle.menuText}>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SettingStyle.menuItem}>
              <Image
                source={require('../../assets/search.png')}
                style={SettingStyle.menuImage}
              />
              <Text style={SettingStyle.menuText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={SettingStyle.section}>
          <Text style={SettingStyle.sectionTitle}>Add room description</Text>
          <Text style={SettingStyle.sectionSubtitle}>
            Created on 03/07/2023
          </Text>
        </View>

        <View style={SettingStyle.section}>
          {array?.map((item, ind) => {
            const {image, title, subTitle} = item;
            return (
              <View key={ind} style={SettingStyle.row}>
                <Image source={image} style={SettingStyle.rowImage} />
                <View style={SettingStyle.rowContent}>
                  <Text style={SettingStyle.rowTitle}>{title}</Text>
                  {/* {subTitle && (
                  <Text style={SettingStyle.rowSubtitle}>{subTitle}</Text>
                )} */}
                </View>
              </View>
            );
          })}
        </View>

        <View style={SettingStyle.section}>
          {array?.map((item, ind) => {
            const {image, title2} = item;
            return (
              <View key={ind} style={SettingStyle.row}>
                <Image source={image} style={SettingStyle.rowImage} />
                <Text style={[{marginLeft: '6%'}, SettingStyle.rowTitle]}>
                  {title2}
                </Text>
              </View>
            );
          })}
        </View>
        <View style={SettingStyle.section}>
          {array?.map((item, ind) => {
            const {image, title2} = item;
            return (
              <View key={ind} style={SettingStyle.row}>
                <Image source={image} style={SettingStyle.rowImage} />
                <Text style={[{marginLeft: '6%'}, SettingStyle.rowTitle]}>
                  {title2}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};
