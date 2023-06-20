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
  TouchableOpacity,
  Alert,
} from 'react-native';
import io from 'socket.io-client';
import {HeaderComponent} from '../../components';
import axios from 'axios';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import {ActivityIndicator, IconButton, MD3Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch, useSelector} from 'react-redux';
import {deleteMsgAction} from '../../redux';
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
        justifyContent: 'center',
        alignItems: 'flex-end',
      }}>
      <Text style={styles.swipeActionText}></Text>
    </View>
  );
};

export const ChatScreen = ({navigation, route}) => {
  const {username, roomname, roomId} = route?.params;
  const socket = io('http://192.168.1.215:5000');
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null);
  const swipeableRefs = useRef([]);
  const [message, setMessage] = useState();
  const [room, setRoom] = useState(roomname);
  const [showreply, setShowReply] = useState(false);
  const dispatch = useDispatch();
  const {deleteMsg, loading} = useSelector(state => state?.deleteMsg);
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
  }, [deleteMsg]);

  // const sendMessage = () => {
  //   const repliedTo = showreply ? replyTo : undefined;
  //   socket.emit('send', {room, message, username, repliedTo});
  //   setMessage('');
  //   setShowReply(false);
  // };
  const sendMessage = () => {
    if (message && message.trim().length > 0) {
      const repliedTo = showreply ? replyTo : undefined;
      socket.emit('send', {room, message, username, repliedTo});
      setMessage('');
      setShowReply(false);
    }
  };
  const closeSwipeable = index => {
    if (swipeableRefs.current[index]) {
      swipeableRefs.current[index].close();
    }
  };
  const handleLongPress = id => {
    Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          dispatch(deleteMsgAction(roomId, id));
        },
      },
    ]);
  };
  const renderItem = ({item, index}) => {
    return (
      <GestureHandlerRootView>
        <Swipeable
          ref={ref => (swipeableRefs.current[index] = ref)}
          renderLeftActions={LeftSwipeActions}
          renderRightActions={RightSwipeActions}
          onSwipeableOpen={() => {
            setShowReply(true);
            setReplyTo(item);
            closeSwipeable(index);
          }}>
          <TouchableOpacity onLongPress={() => handleLongPress(item?._id)}>
            <>
              <View
                style={[
                  styles.messageContainer,
                  username == item?.username
                    ? styles.sentMessage
                    : styles.receivedMessage,
                ]}>
                {username == item?.username ? (
                  ''
                ) : (
                  <Text style={{fontWeight: 'bold'}}>{item?.username}</Text>
                )}
                {item?.repliedTo && (
                  <View
                    style={[
                      styles.reply,
                      username == item?.username
                        ? styles.sentReply
                        : styles.receivedReply,
                    ]}>
                    <Text style={{fontWeight: 'bold'}}>
                      {item.repliedTo.username}
                    </Text>
                    <Text>{item.repliedTo.message}</Text>
                  </View>
                )}
                <Text>{item?.message}</Text>
                <Text style={{textAlign: 'right'}}>
                  {item?.createdAt?.substr(0, 10)}
                </Text>
              </View>
            </>
          </TouchableOpacity>
        </Swipeable>
      </GestureHandlerRootView>
    );
  };
  return (
    <>
      <View style={{display: 'flex', height: '100%'}}>
        <View style={{height: '8%', backgroundColor: '#006257'}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              // backgroundColor: 'red',
              height: '100%',
            }}>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('rooms')}>
                <Image
                  source={require('../../assets/backIcon.png')}
                  style={{width: 40, height: 40}}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 25,
                  marginLeft: '4%',
                }}>
                {roomname}
              </Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'red', height: '92%'}}>
          <View style={styles.container}>
            {loading ? (
              <View
                style={{
                  height: '92%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ActivityIndicator
                  size={'large'}
                  animating={true}
                  color={'#006257'}
                />
              </View>
            ) : (
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
            )}

            {showreply && (
              <View
                style={{
                  padding: 10,
                  width: '100%',
                  backgroundColor: 'lightgray',
                  marginVertical: 5,
                  position: 'relative',
                }}>
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
                <View style={{position: 'absolute', left: 10, top: 5}}>
                  <Text style={{margin: 1}}>{replyTo.username}</Text>
                  <Text style={{margin: 1}}>{replyTo.message}</Text>
                </View>
              </View>
            )}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                onChangeText={text => setMessage(text)}
                value={message}
                placeholder="Type a message"
              />
              <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    minWidth: '40%',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  receivedMessage: {
    backgroundColor: '#FFFFFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 12,
  },
  sendButton: {
    backgroundColor: '#0084FF',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sendButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  reply: {
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 5,
    marginVertical: 5,
  },
  sentReply: {
    borderRightColor: 'green',
    borderRightWidth: 3,
    backgroundColor: '#c7f7ab',
  },
  receivedReply: {
    borderLeftColor: 'red',
    borderLeftWidth: 3,
    backgroundColor: '#f2f2f2',
  },
});
