import React, {useState} from 'react';
import {StyleSheet, Text, Pressable, View, Image} from 'react-native';
import {IconButton, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  createRoomAction,
  getRoomAction,
  roomImageAction,
  updateImageRoomAction,
} from '../../redux';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import useSocket from '../../utils/socket';

export const ChangeSubjectScreen = ({navigation, route}) => {
  const {roomname, username, roomId} = route?.params;
  const [roomName, setRoomName] = useState(roomname);
  console.log('roonName', roomName);
  const [imageShow, setImageShow] = useState(false);
  const socket = useSocket();
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  //============= PROFILE IMAGE ============

  const selectImage = () => {
    launchImageLibrary({}, response => {
      if (response.assets && response.assets.length > 0) {
        const image = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        setSelectedImage(image);
      }
    });
  };
  const updateRoomHandler = async () => {
    const formData = new FormData();
    formData.append('name', roomName);
    {
      selectedImage && formData.append('image', selectedImage);
    }

    try {
      const response = await axios.put(
        `http://192.168.1.215:5000/room/rooms/${roomId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      dispatch(getRoomAction());
      navigation.navigate('setting', {roomname, username, roomId});
      setRoomName('');
      setSelectedImage(null);
      socket.emit('createRoomRequest');
    } catch (error) {
      console.log('Error:', error.message);
    }
  };
  return (
    <>
      <View style={styles.modalView}>
        <View
          style={{
            height: '9%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#006257',
          }}>
          <View>
            <Pressable
              onPress={() => {
                setSelectedImage('');
                setRoomName('');
                navigation.navigate('setting', {roomname, username, roomId});
              }}>
              <Image
                source={require('../../assets/backIcon.png')}
                style={{width: 40, height: 40}}
              />
            </Pressable>
          </View>
          <View style={{marginLeft: '6%'}}>
            <Text style={styles.modalText}>Enter new subject</Text>
          </View>
        </View>
        <View
          style={{
            height: '91%',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              height: '85%',
            }}>
            <View
              style={{
                backgroundColor: '#e3dac9',
                width: 40,
                height: 40,
                alignItems: 'center',
                marginTop: '5%',
                borderRadius: 50,
              }}>
              {!selectedImage && (
                <Pressable onPress={selectImage}>
                  <Image
                    style={{width: 35, height: 35, marginTop: '4%'}}
                    source={require('../../assets/camera.png')}
                  />
                </Pressable>
              )}

              {selectedImage && (
                <Pressable onPress={selectImage}>
                  <Image
                    source={selectedImage}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 50,
                    }}
                  />
                </Pressable>
              )}
            </View>

            <View style={{width: '70%', marginLeft: '5%'}}>
              <TextInput
                // placeholder={roomname}
                mode="flat"
                activeOutlineColor="white"
                textColor="white"
                placeholderTextColor="#e3dac9"
                activeUnderlineColor="white"
                style={{backgroundColor: '#128C7E'}}
                onChangeText={text => {
                  setRoomName(text);
                  setShowError(false);
                }}
                value={roomName}
              />
              {showError && (
                <View style={{marginTop: '8%'}}>
                  <Text style={{color: '#FFFF00'}}>Please Enter Room Name</Text>
                </View>
              )}
            </View>
          </View>

          <View style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <IconButton
              icon={() => (
                <Image
                  source={require('../../assets/check.png')}
                  style={{height: 30, width: 30}}
                />
              )}
              containerColor={'#075E54'}
              size={50}
              onPress={updateRoomHandler}
            />
          </View>
        </View>

        <Pressable
          onPress={() => {
            if (roomName) {
              dispatch(createRoomAction(roomName));

              setRoomName('');
            } else {
              setShowError(true);
            }
          }}></Pressable>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#128C7E',
    height: '100%',
    display: 'flex',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
