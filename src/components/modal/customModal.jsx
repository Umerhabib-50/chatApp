import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {addRoomAction} from '../../redux';

export const CustomModal = ({modalVisible, setModalVisible, room, setRoom}) => {
  const dispatch = useDispatch();
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
          {/* <View style={styles.centeredView}> */}
          <Pressable style={styles.modalView} onPress={() => {}}>
            {/* <View style={styles.modalView}> */}
            <Text style={styles.modalText}>Type Room Name</Text>

            <TextInput
              style={{
                borderWidth: 0.5,
                width: '80%',
                backgroundColor: 'white',
              }}
              placeholder="room"
              onChangeText={text => {
                setRoom(text);
              }}
              value={room}
            />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                dispatch(addRoomAction(room));
                setModalVisible(!modalVisible);
                setRoom('');
              }}>
              <Text style={styles.textStyle}>Create Room</Text>
            </Pressable>
            {/* </View> */}
            {/* </View> */}
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
    backgroundColor: 'white',
    borderRadius: 20,
    height: '40%',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: '40%',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
  },
});
