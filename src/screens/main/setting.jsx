import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SettingStyle} from './css/settingStyle';
import {CustomModal} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {getRoomAction} from '../../redux';

export const SettingScreen = ({navigation, route}) => {
  const {username, roomId} = route?.params;
  // const [modalVisible, setModalVisible] = useState(false);

  const getRoomData = useSelector(state => state?.getRoom?.getRoom);
  const findArray = getRoomData?.find(data => data?._id == roomId);
  const image = findArray?.image;
  const roomname = findArray?.name;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRoomAction());
  }, []);

  return (
    <View style={{backgroundColor: '#006257', flex: 1}}>
      <View style={SettingStyle.tabBar}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('chats', {username, roomname, roomId, image})
          }>
          <Image
            source={require('../../assets/backIcon.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
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
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('subChange', {
              roomId,
              roomname,
            });
          }}>
          <Image
            source={require('../../assets/option.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: '30%',
          justifyContent: 'center',
        }}>
        <View>
          <Text style={SettingStyle.roomName}>{findArray?.name}</Text>
        </View>
        <View style={SettingStyle.menuIcon}>
          <TouchableOpacity>
            <Image
              source={require('../../assets/call.png')}
              style={SettingStyle.menuImage}
            />
            <Text style={SettingStyle.menuText}>Audio</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/videoCem.png')}
              style={SettingStyle.menuImage}
            />
            <Text style={SettingStyle.menuText}>Video</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../assets/search.png')}
              style={SettingStyle.menuImage}
            />
            <Text style={SettingStyle.menuText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{backgroundColor: '#004940', padding: 15}}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>
          Add room discription
        </Text>
        <Text style={{color: '#dddddd', marginTop: '2%'}}>
          Created on 03/07/2023
        </Text>
      </View>
      {/* <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={data}
        setData={setData}
        setting={true}
        roomId={roomId}
      /> */}
    </View>
  );
};
