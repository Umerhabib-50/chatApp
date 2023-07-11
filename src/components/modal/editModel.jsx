import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export const EditModel = ({
  visible,
  setVisible,
  defaultMsg,
  setDefaultMsg,
  msgDetails,
  setmsgDetails,
  socket,
}) => {
  const {_id, date, message, time, username, room} = defaultMsg;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(!visible)}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Image
              source={require('../../assets/backIcon.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>

          <Text style={styles.text}>Edit message</Text>
        </View>
        <View>
          <View style={styles.sentMessage}>
            <Text style={{marginLeft: 6}}>{msgDetails.message}</Text>
            <Text style={{fontWeight: '500', fontSize: 11, marginTop: '8%'}}>
              {time}
            </Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={text =>
                setDefaultMsg({...defaultMsg, message: text})
              }
              value={message}
            />
            <TouchableOpacity
              style={styles.sendButton}
              onPress={() => {
                socket.emit('editMsgReq', {msgid: _id, message, room});
                setVisible(!visible);
              }}>
              <Image
                style={{height: 22, width: 22}}
                source={require('../../assets/check.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  header: {
    height: '9%',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: '6%',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 5,
    paddingHorizontal: '4%',
  },
  input: {
    color: '#ffffff',
    flex: 1,
    backgroundColor: '#000000',
    padding: 0,
    borderRadius: 40,

    height: 40,
    paddingHorizontal: 16,
    // paddingVertical: '6%',
    marginRight: 12,
  },
  sendButton: {
    backgroundColor: '#128c7e',
    borderRadius: 50,
    // paddingHorizontal: 16,
    // paddingVertical: 10,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sentMessage: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: '10%',
    marginRight: '5%',
    maxWidth: '50%',
    minWidth: '40%',

    paddingVertical: 5,
  },
});
