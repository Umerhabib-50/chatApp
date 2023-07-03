import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  TextInput,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from 'react-native';

import axios from 'axios';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import {ActivityIndicator, TouchableRipple} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {deleteMsgAction} from '../../redux';
import {chatStyles} from './css/chatStyles';
import {config} from '../../config';
import useSocket from '../../utils/socket';

const Separator = () => <View style={chatStyles.itemSeparator} />;

const LeftSwipeActions = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={chatStyles.swipeActionText}></Text>
    </View>
  );
};

const RightSwipeActions = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
      <Text style={chatStyles.swipeActionText}></Text>
    </View>
  );
};

export const ChatScreen = ({navigation, route}) => {
  const {username, roomname, roomId, image} = route?.params;
  const socket = useSocket();
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null);
  const swipeableRefs = useRef([]);
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState(roomname);
  const [showReply, setShowReply] = useState(false);
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
    if (socket) {
      socket.on('connect', () => {
        socket.emit('join', room);
      });

      socket.on('receive', newMessage => {
        setMessages(prevMessages => [...prevMessages, newMessage]);
      });

      return () => {
        socket.off('receive');
      };
    }
  }, [socket]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const {data} = await axios.get(`${config}/room/singleroom/${room}`);
        setMessages(data.messages);
      } catch (error) {
        console.log('getMessages error:', error);
      }
    };

    getMessages();
  }, []);

  const sendMessage = () => {
    if (message && message.trim().length > 0) {
      const repliedTo = showReply ? replyTo : undefined;
      socket.emit('send', {room, message, username, repliedTo});
      setMessage('');
      setShowReply(false);
    }
  };

  const handleSwipeableWillOpen = index => {
    setShowReply(true);
    setReplyTo(messages[index]);
    if (swipeableRefs.current[index]) {
      swipeableRefs.current[index].close();
    }
  };

  const handleLongPress = (id, name) => {
    Alert.alert(
      name === username ? 'Delete Message' : 'Oops ',
      name === username
        ? 'Are you sure you want to delete this Message?'
        : "You Can't Delete This Message",
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        name === username && {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const deleteObj = {
                data: {
                  roomId: roomId,
                  messageId: id,
                },
              };

              await axios.delete(`${config}/room/deletemessage`, deleteObj);

              setMessages(prevMessages =>
                prevMessages.filter(obj => obj._id !== id),
              );
            } catch (error) {
              console.log('delete msg error', error);
            }
          },
        },
      ],
    );
  };
  const mainHandler = () => {
    Alert.alert('', 'Under Development.', [
      {
        text: 'OK',
        onPress: () => console.log(''),
      },
    ]);
  };
  const renderItem = ({item, index}) => {
    const {username: name} = item;
    return (
      <GestureHandlerRootView>
        <Swipeable
          ref={ref => (swipeableRefs.current[index] = ref)}
          useNativeDriver={true}
          renderLeftActions={LeftSwipeActions}
          renderRightActions={RightSwipeActions}
          onSwipeableWillOpen={() => handleSwipeableWillOpen(index)}
          overshootRight={false}
          overshootLeft={false}
          overshootFriction={8}
          rightThreshold={40}
          leftThreshold={40}>
          <TouchableRipple
            style={{marginBottom: 8}}
            onLongPress={() => handleLongPress(item?._id, name)}>
            <View
              style={[
                chatStyles.messageContainer,
                username == item?.username
                  ? chatStyles.sentMessage
                  : chatStyles.receivedMessage,
              ]}>
              {username == item?.username ? null : (
                <Text style={{fontWeight: 'bold'}}>{item?.username}</Text>
              )}
              {item?.repliedTo && (
                <View
                  style={[
                    chatStyles.reply,
                    username == item?.username
                      ? chatStyles.sentReply
                      : chatStyles.receivedReply,
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
          </TouchableRipple>
        </Swipeable>
      </GestureHandlerRootView>
    );
  };

  return (
    <View style={{display: 'flex', height: '100%'}}>
      <View style={chatStyles.header}>
        <View style={chatStyles.topView}>
          <View>
            <TouchableOpacity
              style={{width: 30}}
              onPress={() => navigation.navigate('rooms')}>
              <Image
                source={require('../../assets/backIcon.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
          <View>
            {image ? (
              <Image
                source={{uri: image}}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                }}
              />
            ) : (
              <Image
                source={require('../../assets/group.png')}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 50,
                }}
              />
            )}
          </View>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('setting', {
                  image,
                  roomname,
                  username,
                  roomId,
                  image,
                })
              }>
              <Text style={chatStyles.roomText}>{roomname}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            flexDirection: 'row',
            width: '45%',
          }}>
          <TouchableOpacity onPress={() => mainHandler()}>
            <Image
              source={require('../../assets/videoCem.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => mainHandler()}>
            <Image
              source={require('../../assets/call.png')}
              style={{width: 25, height: 25}}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => mainHandler()}>
            <Image
              source={require('../../assets/option.png')}
              style={{width: 25, height: 30}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ImageBackground
        source={require('../../assets/backgroundImage.png')}
        style={chatStyles.imageContainer}>
        <View style={chatStyles.container}>
          <FlatList
            onContentSizeChange={scrollToBottom}
            ref={flatListRef}
            data={messages}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={chatStyles.messagesContainer}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={Separator}
          />

          {showReply && (
            <View style={chatStyles.replymainView}>
              <View style={chatStyles.replyView}>
                <TouchableOpacity
                  style={chatStyles.closeReply}
                  onPress={() => {
                    setShowReply(false);
                  }}>
                  <Image
                    style={{height: 25, width: 25}}
                    source={require('../../assets/cross.png')}
                  />
                </TouchableOpacity>
                <Text style={{margin: 1, fontWeight: 'bold'}}>
                  {replyTo.username}
                </Text>
                <Text style={{margin: 1, maxWidth: 250}}>
                  {replyTo.message}
                </Text>
              </View>
            </View>
          )}
          <View style={chatStyles.inputContainer}>
            <TextInput
              style={chatStyles.input}
              onChangeText={text => setMessage(text)}
              value={message}
              placeholder="Message"
            />
            <TouchableOpacity
              style={chatStyles.sendButton}
              onPress={sendMessage}>
              <Image
                style={{height: 22, width: 22}}
                source={require('../../assets/send.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ChatScreen;
