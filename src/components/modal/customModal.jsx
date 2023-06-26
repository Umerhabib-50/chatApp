import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
import {IconButton, TextInput} from 'react-native-paper';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {getRoomAction} from '../../redux';

export const CustomModal = ({modalVisible, setModalVisible}) => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [roomName, setRoomName] = useState('');
  const [showError, setShowError] = useState(false);

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
    if (roomName && selectedImage) {
      const formData = new FormData();
      formData.append('name', roomName);
      formData.append('image', selectedImage);

      try {
        const response = await axios.post(
          'http://192.168.1.215:5000/room/createroom',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        console.log('Response from backend:', response.data);
        dispatch(getRoomAction());
        setModalVisible(false);
        setRoomName('');
        setSelectedImage(null);
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
        setModalVisible(false);
      }}>
      <View style={styles.modalView}>
        <View style={styles.modalHeader}>
          <Pressable
            onPress={() => {
              setModalVisible(false);
              setRoomName('');
            }}>
            <Image
              source={require('../../assets/backIcon.png')}
              style={styles.backIcon}
            />
          </Pressable>
          <View style={styles.headerTextContainer}>
            <Text style={styles.modalText}>New Room</Text>
            <Text style={styles.subjectText}>Add Subject</Text>
          </View>
        </View>
        <View style={styles.modalContent}>
          <View style={styles.imageContainer}>
            <Pressable onPress={selectImage}>
              <Image
                source={require('../../assets/camera.png')}
                style={styles.cameraIcon}
              />
            </Pressable>
            {selectedImage && (
              <Image
                source={{uri: selectedImage.uri}}
                style={styles.selectedImage}
              />
            )}
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Room Name"
              mode="flat"
              activeOutlineColor="white"
              textColor="white"
              placeholderTextColor="#e3dac9"
              activeUnderlineColor="white"
              style={styles.textInput}
              onChangeText={text => {
                setRoomName(text);
                setShowError(false);
              }}
              value={roomName}
            />
          </View>
        </View>
        <View style={styles.modalFooter}>
          <IconButton
            icon={() => (
              <Image
                source={require('../../assets/check.png')}
                style={styles.checkIcon}
              />
            )}
            containerStyle={styles.checkButtonContainer}
            onPress={handleCreateRoom}
          />
        </View>
        {showError && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              Please enter a room name and select an image
            </Text>
          </View>
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    backgroundColor: '#128C7E',
    paddingTop: 30,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#075E54',
    height: '9%',
    paddingHorizontal: 10,
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  headerTextContainer: {
    marginLeft: 20,
  },
  modalText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subjectText: {
    color: '#e3dac9',
  },
  modalContent: {
    flex: 1,
    paddingHorizontal: 20,
  },
  imageContainer: {
    backgroundColor: '#e3dac9',
    width: '15%',
    height: '9%',
    alignItems: 'center',
    marginTop: '5%',
    borderRadius: 50,
  },
  cameraIcon: {
    width: 40,
    height: 40,
    marginTop: '7%',
  },
  selectedImage: {
    width: 40,
    height: 40,
    marginTop: '7%',
  },
  inputContainer: {
    width: '70%',
    marginLeft: '5%',
  },
  textInput: {
    backgroundColor: '#128C7E',
  },
  modalFooter: {
    flexDirection: 'row-reverse',
  },
  checkIcon: {
    height: 30,
    width: 30,
  },
  checkButtonContainer: {
    backgroundColor: '#075E54',
    padding: 5,
    borderRadius: 50,
    margin: 10,
  },
  errorContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  errorText: {
    color: '#FFFF00',
  },
});
