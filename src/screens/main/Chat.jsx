import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import io from 'socket.io-client';
import axios from 'axios';
import {HeaderComponent} from '../../components';

const Separator = () => <View style={styles.itemSeparator} />;

const LeftSwipeActions = () => (
  <View style={styles.swipeActionContainer}>
    <Text style={styles.swipeActionText}></Text>
  </View>
);

const RightSwipeActions = () => (
  <View style={[styles.swipeActionContainer, {alignItems: 'flex-end'}]}>
    <Text style={styles.swipeActionText}></Text>
  </View>
);

const SERVER_URL = 'http://192.168.1.215:5000';
const axiosInstance = axios.create({baseURL: SERVER_URL});

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
  repliedToContainer: {
    backgroundColor: 'lightgray',
    padding: 5,
  },
  messageAuthor: {
    marginVertical: 2,
    fontWeight: 'bold',
  },
  messageText: {
    marginVertical: 2,
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
  replyContainer: {
    padding: 10,
    width: '100%',
    backgroundColor: 'lightgray',
    marginVertical: 5,
    position: 'relative',
  },
  replyTextContainer: {
    position: 'absolute',
    left: 10,
    top: 5,
  },
  closeImage: {
    zIndex: 10000,
    height: 50,
    width: 50,
  },
  swipeActionContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  swipeActionText: {},
  itemSeparator: {
    // height: 1,
    // backgroundColor: 'gray',
  },
});

export const ChatScreen = ({navigation, route}) => {
  const {username, roomname} = route?.params;
  const socket = useRef(io(SERVER_URL)).current;
  const flatListRef = useRef(null);
  const swipeableRefs = useRef([]);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState(roomname);
  const [showReply, setShowReply] = useState(false);
  const [replyTo, setReplyTo] = useState({message: '', username: ''});

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  };

  const getMessages = useCallback(async () => {
    const {data: roomMessages} = await axiosInstance.get(
      `/room/singleroom/${room}`,
    );
    setMessages(roomMessages.messages);
  }, [room]);

  const handleSwipeableWillOpen = useCallback(
    index => {
      setShowReply(true);
      setReplyTo(messages[index]);
      closeSwipeable(index);
    },
    [messages],
  );

  const handleSwipeableOpen = useCallback(index => {
    closeSwipeable(index);
  }, []);

  const closeSwipeable = index => {
    if (swipeableRefs.current[index]) {
      swipeableRefs.current[index].close();
    }
  };

  const sendMessage = () => {
    const repliedTo = showReply ? replyTo : undefined;
    socket.emit('send', {room, message, username, repliedTo});
    setMessage('');
    setShowReply(false);
  };

  const renderItem = ({item, index}) => (
    <GestureHandlerRootView style={{maxWidth: '100%'}}>
      <Swipeable
        ref={ref => (swipeableRefs.current[index] = ref)}
        useNativeDriver={true}
        renderLeftActions={LeftSwipeActions}
        renderRightActions={RightSwipeActions}
        onSwipeableWillOpen={() => handleSwipeableWillOpen(index)}
        onSwipeableOpen={() => handleSwipeableOpen(index)}
        overshootLeft={100}
        overshootRight={100}
        friction={1.3}
        rightThreshold={20}
        leftThreshold={20}>
        <View
          style={[
            styles.messageContainer,
            username === item?.username
              ? styles.sentMessage
              : styles.receivedMessage,
          ]}>
          {item?.repliedTo && (
            <View style={styles.repliedToContainer}>
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
  }, [room]);

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  useEffect(scrollToBottom, [messages]);

  return (
    <>
      <HeaderComponent
        userName={roomname}
        navigation={() => navigation.navigate('rooms')}
        imageSource={require('../../assets/backIcon.png')}
      />
      <View style={styles.container}>
        <FlatList
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.messagesContainer}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={Separator}
          onContentSizeChange={() =>
            flatListRef.current.scrollToEnd({animated: true})
          }
        />
        {showReply && (
          <View
            style={{
              padding: 7,
              margin: 3,
              backgroundColor: 'lightgray',
              position: 'relative',
              borderRadius: 10,
            }}>
            <TouchableOpacity
              style={{position: 'absolute', top: 4, right: 5, zIndex: 10}}
              onPress={() => {
                setShowReply(false);
              }}>
              <Image
                style={{height: 25, width: 25}}
                source={require('../../assets/cross.png')}
              />
            </TouchableOpacity>
            {/* </View> */}
            <View>
              <Text style={{margin: 1, fontWeight: 'bold'}}>
                {replyTo.username}
              </Text>
              <Text style={{margin: 1, maxWidth: 250}}>{replyTo.message}</Text>
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
