import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useSelector} from 'react-redux';
export const StatusScreen = ({navigation}) => {
  const status = useSelector(state => state?.statusUpload?.statusUpload);
  return (
    <View
      style={{
        flex: 1,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Image
          style={{height: 60, width: 60}}
          source={require('../../../assets/group.png')}
        />
        <Text style={{marginLeft: '4%'}}>My status</Text>
      </View>

      <View style={{position: 'absolute', top: '73%', right: '3%'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('mainStack', {screen: 'statusText'})
          }>
          <IconButton
            icon={() => (
              <Image
                source={require('../../../assets/pencil.png')}
                style={{height: 20, width: 20}}
              />
            )}
            containerColor={'#3b3c36'}
            size={28}
          />
        </TouchableOpacity>

        <IconButton
          icon={() => (
            <Image
              source={require('../../../assets/chatCam.png')}
              style={{height: 25, width: 25}}
            />
          )}
          containerColor={'#128c7e'}
          size={40}
          //   onPress={() => {
          //     setModalVisible(true);
          //   }}
        />
      </View>
    </View>
  );
};
