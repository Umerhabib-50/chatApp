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
import io from 'socket.io-client';

import axios from 'axios';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler';
import {ActivityIndicator, TouchableRipple} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {deleteMsgAction} from '../../redux';
import {chatStyles} from './css/chatStyles';
import {config} from '../../config';

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
  const {username, roomname, roomId} = route?.params;
  const socket = io(config);
  const [messages, setMessages] = useState([]);

  const flatListRef = useRef(null);
  const swipeableRefs = useRef([]);
  const [message, setMessage] = useState();
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
      const {data} = await axios.get(`${config}/room/singleroom/${room}`);
      setMessages(data.messages);
    };

    getMessages();
  }, [deleteMsg]);

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

  const handleLongPress = id => {
    Alert.alert(
      'Delete Message',
      'Are you sure you want to delete this Message?',
      [
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
      ],
    );
  };

  const renderItem = ({item, index}) => {
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
            onLongPress={() => handleLongPress(item?._id)}>
            <View
              style={[
                chatStyles.messageContainer,
                username == item?.username
                  ? chatStyles.sentMessage
                  : chatStyles.receivedMessage,
              ]}>
              {username == item?.username ? (
                ''
              ) : (
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
      <View style={{height: '8%', backgroundColor: '#128C7E'}}>
        <View style={chatStyles.topView}>
          <View>
            <TouchableOpacity
              style={{width: 30}}
              onPress={() => navigation.navigate('rooms')}>
              <Image
                source={require('../../assets/backIcon.png')}
                style={{width: 40, height: 40}}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={chatStyles.roomText}>{roomname}</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={require('../../assets/backgroundImage.png')}
        style={chatStyles.imageContainer}>
        <View style={chatStyles.container}>
          {loading ? (
            <View style={chatStyles.loading}>
              <ActivityIndicator
                size={'large'}
                animating={true}
                color={'#128C7E'}
              />
            </View>
          ) : (
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
          )}

          {showReply && (
            <View style={chatStyles.replymainView}>
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
              <View>
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
              <Text style={chatStyles.sendButtonText}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
