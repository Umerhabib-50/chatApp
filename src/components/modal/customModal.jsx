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
import {createRoomAction, roomImageAction} from '../../redux';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
export const CustomModal = ({modalVisible, setModalVisible, setData}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [roomName, setRoomName] = useState('');
  const [imageShow, setImageShow] = useState(false);
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  //============= PROFILE IMAGE ============

  const selectImage = () => {
    launchImageLibrary({}, response => {
      if (response.assets && response.assets.length > 0) {
        // const formData = new FormData();
        // formData.append('name', 'Rehanroom');
        // formData.append('image', {
        //   uri: response.assets[0].uri,
        //   type: response.assets[0].type,
        //   name: response.assets[0].fileName,
        // });
        setSelectedImage(response.assets[0]);
      }
    });
  };
  // try {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'multipart/form-data',
  //     },
  //   };

  // const data = await axios.post(
  //   'http://192.168.1.215:5000/room/createroom',
  //   newFormdata,
  //   config,
  // );

  // console.log('newFormdata', newFormdata._parts[0][1].response);
  // dispatch(roomImageAction(newFormdata));

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      {/* <Pressable
        style={styles.centeredView}
        onPress={() => {
          setModalVisible(!modalVisible);
          setRoomName('');
        }}> */}
      <View style={styles.modalView}>
        <View
          style={{
            height: '9%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#075E54',
          }}>
          <View>
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
                setRoomName('');
              }}>
              <Image
                source={require('../../assets/backIcon.png')}
                style={{width: 40, height: 40}}
              />
            </Pressable>
          </View>
          <View style={{marginLeft: '6%'}}>
            <Text style={styles.modalText}>New Room</Text>
            <Text style={{color: '#e3dac9'}}>Add Subject</Text>
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
                width: '15%',
                height: '9%',
                alignItems: 'center',
                marginTop: '5%',
                borderRadius: 50,
              }}>
              <Pressable onPress={selectImage}>
                <Image
                  style={{width: 40, height: 40, marginTop: '7%'}}
                  source={require('../../assets/camera.png')}
                />
              </Pressable>
              {selectedImage && (
                <Image
                  source={selectedImage}
                  style={{width: 40, height: 40, marginTop: '7%'}}
                />
              )}
            </View>
            <View style={{width: '70%', marginLeft: '5%'}}>
              <TextInput
                placeholder={'Enter Room Name'}
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
              onPress={async () => {
                if (roomName) {
                  try {
                    const formData = new FormData();
                    formData.append('name', `${roomName}`);
                    formData.append('image', selectedImage);

                    const configImage = {
                      headers: {
                        'Content-Type': 'multipart/form-data',
                      },
                    };

                    const data = await axios.post(
                      'http://192.168.1.215:5000/room/createroom',
                      formData,
                      configImage,
                    );
                    console.log('data from data', data);
                    setModalVisible(!modalVisible);
                    setRoomName('');
                  } catch (error) {
                    console.log('error', error);
                  }
                } else {
                  setShowError(true);
                }
              }}
            />
          </View>
          {/* <TextInput
            placeholderTextColor="gray"
            mode="outlined"
            style={{
              borderColor: 'white',
              width: '80%',
            }}
            placeholder="Room"
            onChangeText={text => {
              setRoomName(text);
              setShowError(false);
            }}
            value={roomName}
          /> */}
        </View>
        {showError && (
          <View>
            <Text style={{color: '#FFFF00'}}>Please Enter Room Name</Text>
          </View>
        )}

        <Pressable
          onPress={() => {
            if (roomName) {
              dispatch(createRoomAction(roomName));
              setModalVisible(!modalVisible);
              setRoomName('');
            } else {
              setShowError(true);
            }
          }}>
          {/* <CustomButton title={'Create Room'} /> */}
        </Pressable>
      </View>
      {/* </Pressable> */}
    </Modal>
  );
};

const styles = StyleSheet.create({
  // centeredView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  modalView: {
    backgroundColor: '#128C7E',
    height: '100%',
    display: 'flex',
  },
  button: {
    // borderRadius: 20,
    // padding: 10,
    // elevation: 2,
    // width: '40%',
  },
  // buttonOpen: {
  //   backgroundColor: '#F194FF',
  // },
  // buttonClose: {
  //   backgroundColor: '#2196F3',
  // },
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
