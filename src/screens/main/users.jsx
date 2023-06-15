import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button, Text} from 'react-native';
import io from 'socket.io-client';

export const UsersScreen = ({navigation}) => {
  const socket = io('http://192.168.1.59:8000');
  const [name, setName] = useState('');

  const sendMessage = () => {
    setName('');
    navigation.navigate('single', {name});
  };

  return (
    <View style={styles.join}>
      <View style={{marginBottom: 10}}>
        <Text style={{fontSize: 30}}>Join The Room</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter Your Name..."
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
    justifyContent: 'center',
    height: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
  },
  input: {
    flex: 1,
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
  },
});
