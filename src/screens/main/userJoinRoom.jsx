import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export const UserJoinRoomScreen = ({navigation, route}) => {
  const {userType} = route.params;
  const [name, setName] = useState('');
  const sendMessage = () => {
    navigation.navigate('chats');
  };
  return (
    <View style={styles.main}>
      <Text> Join Room as {userType} user</Text>
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
  main: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
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
