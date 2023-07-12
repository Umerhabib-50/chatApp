import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getRoomAction} from '../../redux';
import {SettingStyle} from './css/settingStyle';
import {CustomModal, ImageModal} from '../../components';

export const SettingScreen = ({navigation, route}) => {
  const {roomId} = route?.params;
  const [showFullText, setShowFullText] = useState(false);

  const array = [
    {
      image: require('../../assets/bell.png'),
      title: 'Mute notifications',
      title2: 'notifications tone',
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
  const str = findArray?.description;

  const dispatch = useDispatch();
  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };
  useEffect(() => {
    dispatch(getRoomAction());
  }, []);
  const [visible, setVisible] = useState(false);
  return (
    <>
      <ScrollView style={SettingStyle.container}>
        <View style={SettingStyle.tabBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate('chats', {roomId})}>
            <Image
              source={require('../../assets/backIconB.png')}
              style={SettingStyle.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(true)}>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('subChange', {roomId, str})}>
            <Image
              source={require('../../assets/OptionB.png')}
              style={{width: 20, height: 20}}
            />
          </TouchableOpacity>
        </View>

        <View style={SettingStyle.roomInfoContainer}>
          <Text style={SettingStyle.roomName}>{findArray?.name}</Text>

          <View style={SettingStyle.menuIcon}>
            <TouchableOpacity style={SettingStyle.menuItem}>
              <Image
                source={require('../../assets/callB.png')}
                style={SettingStyle.menuImage}
              />
              <Text style={SettingStyle.menuText}>Audio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SettingStyle.menuItem}>
              <Image
                source={require('../../assets/videoB.png')}
                style={SettingStyle.menuImage}
              />
              <Text style={SettingStyle.menuText}>Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={SettingStyle.menuItem}>
              <Image
                source={require('../../assets/searchB.png')}
                style={SettingStyle.menuImage}
              />
              <Text style={SettingStyle.menuText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={SettingStyle.section}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('subChange', {roomId, str});
            }}>
            {!str && <Text style={{color: '#000000'}}>Add description</Text>}
            {showFullText ? (
              <Text style={{color: '#000000'}}>{str}</Text>
            ) : (
              <Text style={{color: '#000000'}}>{str?.slice(0, 100)}</Text>
            )}
          </TouchableOpacity>
          {str?.length >= 70 && (
            <TouchableOpacity onPress={() => handleToggleText()}>
              <Text style={{color: '#128c7e'}}>
                {showFullText ? 'Hide' : '...Read More'}
              </Text>
            </TouchableOpacity>
          )}

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
      {visible && (
        <ImageModal
          image={findArray?.image}
          visible={visible}
          setVisible={setVisible}
        />
      )}
    </>
  );
};
