import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import io from 'socket.io-client';
import {HeaderComponent} from '../../components';
import axios from 'axios';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import {IconButton, MD3Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Separator = () => <View style={styles.itemSeparator} />;

const LeftSwipeActions = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#ccffbd',
        justifyContent: 'center',
      }}>
      <Text style={styles.swipeActionText}></Text>
    </View>
  );
};

const RightSwipeActions = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#ff8303',
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
      <Text style={styles.swipeActionText}></Text>
    </View>
  );
};

export const ChatScreen = ({navigation, route}) => {
  const {username, roomname} = route?.params;
  const socket = io('http://192.168.1.215:5000');
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null);
  // const messageRefs = useRef([]);
  const swipeableRefs = useRef([]);
  const [message, setMessage] = useState();
  const [room, setRoom] = useState(roomname);
  const [showreply, setShowReply] = useState(false);
  const [replyTo, setReplyTo] = useState({
    message: '',
    username: '',
  });

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  };
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('join', room);
    });

    socket.on('receive', newMessage => {
      setMessages(prevMessages => [...prevMessages, newMessage]);
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

  const sendMessage = () => {
    const repliedTo = showreply ? replyTo : undefined;
    socket.emit('send', {room, message, username, repliedTo});
    setMessage('');
    setShowReply(false);
  };

  const closeSwipeable = index => {
    if (swipeableRefs.current[index]) {
      swipeableRefs.current[index].close();
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <GestureHandlerRootView style={{maxWidth: '100%'}}>
        <Swipeable
          ref={ref => (swipeableRefs.current[index] = ref)}
          renderLeftActions={LeftSwipeActions}
          renderRightActions={RightSwipeActions}
          onSwipeableOpen={() => {
            setShowReply(true);
            setReplyTo(item);
            closeSwipeable(index);
          }}>
          <View
            style={[
              styles.messageContainer,
              username == item?.username
                ? styles.sentMessage
                : styles.receivedMessage,
            ]}>
            {item?.repliedTo && (
              <View
                style={{
                  backgroundColor: 'lightgray',
                  padding: 5,
                }}>
                <Text>{item.repliedTo.username}</Text>
                <Text>{item.repliedTo.message}</Text>
              </View>
            )}
            <Text style={styles.messageAuthor}>{item?.username}</Text>
            <Text style={styles.messageText}>{item?.message}</Text>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
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
          ItemSeparatorComponent={() => <Separator />}
        />
        {showreply && (
          <View
            style={{
              padding: 10,
              width: '100%',
              backgroundColor: 'lightgray',
              marginVertical: 5,
              position: 'relative',
            }}>
            {/* <View style={{position: 'absolute', top: 5, right: 10}}> */}
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
              onPress={() => {
                setShowReply(false);
              }}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../../assets/cross.png')}
              />
            </Pressable>
            {/* </View> */}
            <View style={{position: 'absolute', left: 10, top: 5}}>
              <Text style={{margin: 1}}>{replyTo.username}</Text>
              <Text style={{margin: 1}}>{replyTo.message}</Text>
            </View>
          </View>
        )}

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
