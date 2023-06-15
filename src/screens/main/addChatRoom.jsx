import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import io from 'socket.io-client';
export const AddChatRoomScreen = ({navigation}) => {
  const socket = io('http://192.168.1.59:8000');
  const [name, setName] = useState('');
  const [room, setRoom] = useState('default');
  const sendMessage = () => {
    if (socket) {
      socket.emit('new-user-joined', name);
      socket.emit('join', room);
    }
    setName('');
    navigation.navigate('single', {name});
  };

  return (
    <View style={styles.join}>
      <View>
        <Text style={{fontSize: 30}}>Join The Room </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Join Room..."
          onChangeText={text => setName(text)}
          value={name}
          style={styles.input}
        />
        <Button title="Join" onPress={sendMessage} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  join: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'space-between',
    width: '80%',
  },
  input: {
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    width: '80%',
  },
});
