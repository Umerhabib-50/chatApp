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

export const UsersScreen = ({navigation}) => {
  let userArray = [
    {id: '1', name: 'Room 1'},
    {id: '1', name: 'Room 2'},
    {id: '3', name: 'Room 3'},
  ];
  const socket = io('http://192.168.1.59:8000');
  const [name, setName] = useState('');
  const [room, setRoom] = useState('default');
  const sendMessage = () => {
    if (socket) {
      socket.emit('new-user-joined', name);
      socket.emit('join', room);
    }
    setName('');
    // navigation.navigate('single', {name});
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('addRoom')}>
        <View style={styles.singleCard}>
          <View>
            <Image
              source={require('../../assets/pic3.png')}
              style={{width: 30, height: 30}}
            />
          </View>
          <View>
            <Text style={styles.text}> {item?.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.join}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-end',
          width: '100%',
        }}>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Chat</Text>
        </View>
        {/* <View>
            <Text style={{fontSize: 30}}>Join The Room </Text>
          </View> */}
        <View style={styles.inputContainer}>
          {/* <TextInput
            placeholder="Join Room..."
            onChangeText={text => setName(text)}
            value={name}
            style={styles.input}
          />
          <Button title="Join" onPress={sendMessage} /> */}
        </View>
      </View>
      <View style={styles.card}>
        <FlatList
          data={userArray}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  join: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
    // marginTop: '2%',
  },
  input: {
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
  },

  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginTop: '3%',
  },
  text: {
    fontSize: 20,
    marginLeft: 17,
    fontWeight: 'bold',
  },
  singleCard: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
