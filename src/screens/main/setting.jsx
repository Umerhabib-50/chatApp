import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {SettingStyle} from './css/settingStyle';

export const SettingScreen = ({navigation, route}) => {
  const {roomname, username, roomId, image} = route?.params;
  return (
    <View style={{backgroundColor: '#006257', flex: 1}}>
      <View style={SettingStyle.tabBar}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('chats', {
              image,
              roomname,
              username,
              roomId,
              image,
            })
          }>
          <Image
            source={require('../../assets/backIcon.png')}
            style={{width: 30, height: 30}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={{uri: image}} style={SettingStyle.roomImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('subChange')}>
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
          <Text style={SettingStyle.roomName}>{roomname}</Text>
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
    </View>
  );
};
