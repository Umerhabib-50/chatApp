import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {createRoomAction, getRoomAction} from '../../redux';
import axios from 'axios';
import {CustomButton} from '../button/custom-button';
export const CustomModal = ({modalVisible, setModalVisible, setData}) => {
  const [roomName, setRoomName] = useState('');
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
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
            setRoomName('');
          }}>
          <Pressable style={styles.modalView} onPress={() => {}}>
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
                setShowError(false);
              }}
              value={roomName}
            />
            {showError && (
              <View>
                <Text style={{color: '#FFFF00'}}>Please Enter UserName</Text>
              </View>
            )}

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                if (roomName) {
                  dispatch(createRoomAction(roomName));
                  setModalVisible(!modalVisible);
                  setRoomName('');
                } else {
                  setShowError(true);
                }
              }}>
              <CustomButton title={'Create Room'} />
            </Pressable>
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
    borderColor: 'white',
    borderWidth: 2,
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
