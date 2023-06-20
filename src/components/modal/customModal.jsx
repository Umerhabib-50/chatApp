import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {createRoomAction, getRoomAction} from '../../redux';
import axios from 'axios';
import {CustomButton} from '../button/custom-button';
export const CustomModal = ({modalVisible, setModalVisible, setData}) => {
  // const dispatch = useDispatch();
  const [roomName, setRoomName] = useState('');
  const createRoom = async () => {
    const {data} = await axios.post(
      `http://192.168.1.215:5000/room/createroom`,
      {
        name: roomName,
      },
    );
    console.log('createRoom', data);
    if (data?.room) {
      const {data} = await axios.get(`http://192.168.1.215:5000/room/allroom`);
      setData(data);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          style={styles.centeredView}
          onPress={() => {
            setModalVisible(!modalVisible);
          }}>
          {/* <View style={styles.centeredView}>  */}
          <Pressable style={styles.modalView} onPress={() => {}}>
            {/* <View style={styles.modalView}>  */}
            <Text style={styles.modalText}>Type Room Name</Text>

            <TextInput
              placeholderTextColor="gray"
              mode="outlined"
              style={{
                borderColor: 'white',
                width: '80%',
              }}
              placeholder="room"
              onChangeText={text => {
                setRoomName(text);
              }}
              value={roomName}
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                // dispatch(createRoomAction(roomName));

                // dispatch(getRoomAction());
                createRoom();
                setModalVisible(!modalVisible);
                setRoomName('');
              }}>
              <CustomButton title={'Create Room'} />
              {/* <Text style={styles.textStyle}>Create Room</Text> */}
            </Pressable>
            {/* </View> 
            </View>  */}
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  modalView: {
    width: '80%',
    backgroundColor: '#006257',
    borderRadius: 20,
    height: '40%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    // borderRadius: 20,
    // padding: 10,
    // elevation: 2,
    // width: '40%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
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
