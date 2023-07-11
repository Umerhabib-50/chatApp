import React, {useState, useEffect} from 'react';
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
import {CustomButton} from '../../components';
import {config} from '../../config';

export const ChangeSubjectScreen = ({navigation, route}) => {
  const {roomId, str} = route?.params;
  const getRoomData = useSelector(state => state?.getRoom?.getRoom);

  const findArray = getRoomData?.find(data => data?._id === roomId);

  // const image = findArray?.image;
  const roomname = findArray?.name;

  const [roomName, setRoomName] = useState(roomname);
  const [description, setDesciption] = useState(str);

  const [imageShow, setImageShow] = useState(false);

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
    formData.append('description', description);
    {
      selectedImage && formData.append('image', selectedImage);
    }

    try {
      const response = await axios.put(
        `${config}/room/rooms/${roomId}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      dispatch(getRoomAction());
      setTimeout(() => {
        navigation.navigate('setting', {roomId});
        setRoomName('');
        setSelectedImage(null);
      }, 1000);
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
            backgroundColor: '#128c7e',
          }}>
          <View>
            <Pressable
              onPress={() => {
                setSelectedImage('');
                setRoomName('');
                navigation.navigate('setting', {roomId});
              }}>
              <Image
                source={require('../../assets/backIcon.png')}
                style={{width: 40, height: 40}}
              />
            </Pressable>
          </View>
          <View style={{marginLeft: '6%'}}>
            <Text style={styles.modalText}>Change RoomName/Description</Text>
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
                mode="flat"
                activeOutlineColor="white"
                textColor="#000000"
                placeholderTextColor="#e3dac9"
                activeUnderlineColor="#e3dac9"
                style={{backgroundColor: '#ffffff'}}
                onChangeText={text => {
                  setRoomName(text);
                  setShowError(false);
                }}
                value={roomName}
                selectionColor={'#000000'}
              />
              <TextInput
                mode="flat"
                activeOutlineColor="white"
                textColor="#000000"
                multiline={true}
                placeholderTextColor="#e3dac9"
                activeUnderlineColor="#e3dac9"
                style={{backgroundColor: '#ffffff'}}
                selectionColor={'#000000'}
                onChangeText={text => {
                  setDesciption(text);
                  setShowError(false);
                }}
                value={description}
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
                setSelectedImage('');
                setRoomName('');
                navigation.navigate('setting', {roomId});
              }}
              title={'Cancel'}
            />
            <CustomButton onPress={updateRoomHandler} title={'Ok'} />
            {/* <IconButton
              icon={() => (
                <Image
                  source={require('../../assets/check.png')}
                  style={{height: 30, width: 30}}
                />
              )}
              containerColor={'#075E54'}
              size={50}
              onPress={updateRoomHandler}
            /> */}
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
    fontSize: 18,
  },
});
