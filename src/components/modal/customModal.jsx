import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
} from 'react-native';
import {IconButton, TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {createRoomAction, getRoomAction, roomImageAction} from '../../redux';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import useSocket from '../../utils/socket';
import {CustomButton} from '../button/custom-button';
import {config} from '../../config';

export const CustomModal = ({
  modalVisible,
  setModalVisible,
  setData,
  setting,
  data,
}) => {
  const socket = useSocket();
  const [selectedImage, setSelectedImage] = useState(null);
  const [roomName, setRoomName] = useState('');
  const [imageShow, setImageShow] = useState(false);
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

  const handleCreateRoom = async () => {
    if (roomName) {
      const formData = new FormData();
      formData.append('name', roomName);
      {
        selectedImage && formData.append('image', selectedImage);
      }

      try {
        const response = await axios.post(
          `${config}/room/createroom`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        dispatch(getRoomAction());
        setModalVisible(false);
        setRoomName('');
        setSelectedImage(null);
        socket.emit('createRoomRequest');
      } catch (error) {
        console.log('Error:', error.message);
      }
    } else {
      setShowError(true);
    }
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalView}>
        <View
          style={{
            height: '8%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#128c7e',
          }}>
          <View>
            {/* <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
                setSelectedImage('');
                setRoomName('');
              }}>
              <Image
                source={require('../../assets/backIcon.png')}
                style={{width: 40, height: 40}}
              />
            </Pressable> */}
          </View>
          <View style={{marginLeft: '6%'}}>
            <Text style={styles.modalText}>
              {setting == true ? 'Enter new subject' : 'Enter new Room'}
            </Text>
            {setting == false && (
              <Text style={{color: '#e3dac9'}}>Add Subject</Text>
            )}
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
                placeholder={'Enter Room Name'}
                mode="flat"
                activeOutlineColor="white"
                textColor="#000000"
                placeholderTextColor="#e3dac9"
                activeUnderlineColor="white"
                style={{backgroundColor: '#ffffff'}}
                onChangeText={text => {
                  setRoomName(text);
                  setShowError(false);
                }}
                value={roomName}
              />
              {showError && (
                <View style={{marginTop: '8%'}}>
                  <Text style={{color: 'red'}}>Please Enter Room Name</Text>
                </View>
              )}
            </View>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: '7%',
            }}>
            <CustomButton
              onPress={() => {
                setModalVisible(!modalVisible);
                setSelectedImage('');
                setRoomName('');
                setShowError(false);
              }}
              title={'Cancel'}
            />
            <CustomButton onPress={handleCreateRoom} title={'Ok'} />
            {/* <IconButton
              icon={() => (
                <Image
                  source={require('../../assets/check.png')}
                  style={{height: 30, width: 30}}
                />
              )}
              containerColor={'#128c7e'}
              size={50}
              onPress={handleCreateRoom}
            /> */}
          </View>
        </View>

        <Pressable
          onPress={() => {
            if (roomName) {
              dispatch(createRoomAction(roomName));
              setModalVisible(!modalVisible);
              setRoomName('');
            } else {
              setShowError(true);
            }
          }}></Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#ffffff',
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
    fontSize: 22,
  },
});
