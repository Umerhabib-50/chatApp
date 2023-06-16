import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import io from 'socket.io-client';
import {HeaderComponent} from '../../components';
import axios from 'axios';

export const ChatScreen = ({navigation, route}) => {
  const {username, roomname} = route?.params;
  const socket = io('http://192.168.1.215:5000');
  const [messages, setMessages] = useState([]);
  console.log('messages', messages);
  messages;

  const flatListRef = useRef(null);
  const [message, setMessage] = useState();
  const [room, setRoom] = useState(roomname);
  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  };
  useEffect(() => {
    socket.on('connect', () => {
      // console.log('Connected to server');
      socket.emit('join', room);
    });

    socket.on('receive', newMessage => {
      // console.log(newMessage);
      setMessages(prevMessages => [...prevMessages, {message: newMessage}]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const getMessages = async () => {
      const {data} = await axios.get(
        `http://192.168.1.215:5000/room/singleroom/${room}`,
      );
      setMessages(data.messages);
    };

    getMessages();
  }, []);

  useEffect(() => {
    return async () => {
      await axios.post('http://192.168.1.215:5000/room/messages', {
        room,
        messages,
      });
    };
  }, [messages]);

  const sendMessage = () => {
    socket.emit('send', {room, message, username});
    setMessage('');
  };

  const renderItem = ({item}) => {
    const {message} = item?.message;
    return (
      <View
        style={[
          styles.messageContainer,
          username == item?.message?.username
            ? styles.sentMessage
            : styles.receivedMessage,
        ]}>
        <Text
          style={{
            fontWeight: 'bold',
          }}>{`from ${item?.message?.username}`}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>
    );
  };

  return (
    <>
      <HeaderComponent
        userName={roomname}
        navigation={() => navigation.navigate('rooms')}
        imageSource={require('../../assets/backIcon.png')}
      />
      <View style={styles.container}>
        <FlatList
          onContentSizeChange={scrollToBottom}
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
        />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Type a message..."
            onChangeText={text => setMessage(text)}
            value={message}
            style={styles.input}
          />
          <Button title="Send" onPress={sendMessage} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  messagesContainer: {
    flexGrow: 1,
  },
  messageContainer: {
    marginBottom: 8,
    alignSelf: 'flex-start',
    maxWidth: '60%',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
    borderRightColor: 'green',
    borderRightWidth: 3,
  },
  receivedMessage: {
    backgroundColor: '#FFFFFF',
    borderLeftColor: 'red',
    borderLeftWidth: 3,
  },
  inputContainer: {
    flexDirection: 'row',
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
