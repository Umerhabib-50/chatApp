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
          'http://192.168.1.215:5000/room/createroom',
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
            // backgroundColor: '#075E54',
            backgroundColor: '#006257',
          }}>
          <View>
            <Pressable
              onPress={() => {
                setModalVisible(!modalVisible);
                setSelectedImage('');
                setRoomName('');
              }}>
              <Image
                source={require('../../assets/backIcon.png')}
                style={{width: 40, height: 40}}
              />
            </Pressable>
          </View>
          <View style={{marginLeft: '6%'}}>
            <Text style={styles.modalText}>
              {setting == true ? 'Enter new subject' : 'New Room'}
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
            {data ? (
              <View style={{width: '70%', marginLeft: '5%'}}>
                <TextInput
                  // placeholder={'Enter Room Name'}
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
                  defaultValue={data}
                  value={roomName}
                />
                {showError && (
                  <View style={{marginTop: '8%'}}>
                    <Text style={{color: '#FFFF00'}}>
                      Please Enter Room Name
                    </Text>
                  </View>
                )}
              </View>
            ) : (
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
                {showError && (
                  <View style={{marginTop: '8%'}}>
                    <Text style={{color: '#FFFF00'}}>
                      Please Enter Room Name
                    </Text>
                  </View>
                )}
              </View>
            )}
            {/* <View style={{width: '70%', marginLeft: '5%'}}>
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
              {showError && (
                <View style={{marginTop: '8%'}}>
                  <Text style={{color: '#FFFF00'}}>Please Enter Room Name</Text>
                </View>
              )}
            </View> */}
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
              // onPress={handleCreateRoom}
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

// import React, {useState} from 'react';
// import {Modal, StyleSheet, Text, Pressable, View, Image} from 'react-native';
// import {IconButton, TextInput} from 'react-native-paper';
// import {launchImageLibrary} from 'react-native-image-picker';
// import axios from 'axios';
// import {useDispatch} from 'react-redux';
// import {getRoomAction} from '../../redux';

// export const CustomModal = ({modalVisible, setModalVisible}) => {
//   const dispatch = useDispatch();
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [roomName, setRoomName] = useState('');
//   const [showError, setShowError] = useState(false);

//   const selectImage = () => {
//     launchImageLibrary({}, response => {
//       if (response.assets && response.assets.length > 0) {
//         const image = {
//           uri: response.assets[0].uri,
//           type: response.assets[0].type,
//           name: response.assets[0].fileName,
//         };
//         setSelectedImage(image);
//       }
//     });
//   };

//   const handleCreateRoom = async () => {
//     if (roomName && selectedImage) {
//       const formData = new FormData();
//       formData.append('name', roomName);
//       formData.append('image', selectedImage);

//       try {
//         const response = await axios.post(
//           'http://192.168.1.215:5000/room/createroom',
//           formData,
//           {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//             },
//           },
//         );
//         console.log('Response from backend:', response.data);
//         dispatch(getRoomAction());
//         setModalVisible(false);
//         setRoomName('');
//         setSelectedImage(null);
//       } catch (error) {
//         console.log('Error:', error.message);
//       }
//     } else {
//       setShowError(true);
//     }
//   };

//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={() => {
//         setModalVisible(false);
//       }}>
//       <View style={styles.modalView}>
//         <View style={styles.modalHeader}>
//           <Pressable
//             onPress={() => {
//               setModalVisible(false);
//               setRoomName('');
//             }}>
//             <Image
//               source={require('../../assets/backIcon.png')}
//               style={styles.backIcon}
//             />
//           </Pressable>
//           <View style={styles.headerTextContainer}>
//             <Text style={styles.modalText}>New Room</Text>
//             <Text style={styles.subjectText}>Add Subject</Text>
//           </View>
//         </View>
//         <View style={styles.modalContent}>
//           <View style={styles.imageContainer}>
//             <Pressable onPress={selectImage}>
//               <Image
//                 source={require('../../assets/camera.png')}
//                 style={styles.cameraIcon}
//               />
//             </Pressable>
//             {selectedImage && (
//               <Image
//                 source={{uri: selectedImage.uri}}
//                 style={styles.selectedImage}
//               />
//             )}
//           </View>
//           <View style={styles.inputContainer}>
//             <TextInput
//               placeholder="Enter Room Name"
//               mode="flat"
//               activeOutlineColor="white"
//               textColor="white"
//               placeholderTextColor="#e3dac9"
//               activeUnderlineColor="white"
//               style={styles.textInput}
//               onChangeText={text => {
//                 setRoomName(text);
//                 setShowError(false);
//               }}
//               value={roomName}
//             />
//           </View>
//         </View>
//         <View style={styles.modalFooter}>
//           <IconButton
//             size="23"
//             icon={() => (
//               <Image
//                 source={require('../../assets/check.png')}
//                 style={styles.checkIcon}
//               />
//             )}
//             containerStyle={styles.checkButtonContainer}
//             onPress={handleCreateRoom}
//           />
//         </View>
//         {showError && (
//           <View style={styles.errorContainer}>
//             <Text style={styles.errorText}>
//               Please enter a room name and select an image
//             </Text>
//           </View>
//         )}
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalView: {
//     backgroundColor: '#128C7E',
//     height: '100%',
//   },
//   modalHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#075E54',
//     height: '9%',
//     paddingHorizontal: 10,
//   },
//   backIcon: {
//     width: 40,
//     height: 40,
//   },
//   headerTextContainer: {
//     marginLeft: 20,
//   },
//   modalText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 18,
//   },
//   subjectText: {
//     color: '#e3dac9',
//   },
//   modalContent: {
//     paddingHorizontal: 20,
//     height: '77%',
//   },
//   imageContainer: {
//     backgroundColor: '#e3dac9',
//     width: '15%',
//     height: '9%',
//     alignItems: 'center',
//     marginTop: '5%',
//     borderRadius: 50,
//   },
//   cameraIcon: {
//     width: 40,
//     height: 40,
//     marginTop: '7%',
//   },
//   selectedImage: {
//     width: 40,
//     height: 40,
//     marginTop: '7%',
//   },
//   inputContainer: {
//     width: '70%',
//     marginLeft: '5%',
//   },
//   textInput: {
//     backgroundColor: '#128C7E',
//   },
//   modalFooter: {
//     flexDirection: 'row-reverse',
//   },
//   checkIcon: {
//     backgroundColor: '#075E54',
//   },
//   checkButtonContainer: {
//     backgroundColor: '#075E54',
//     padding: 5,
//     borderRadius: 50,
//     margin: 10,
//   },
//   errorContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   errorText: {
//     color: '#FFFF00',
//   },
// });
