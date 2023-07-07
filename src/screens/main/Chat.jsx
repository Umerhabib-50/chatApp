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
  StyleSheet,
} from 'react-native';

import axios from 'axios';
import {ActivityIndicator, TouchableRipple} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {deleteMsgAction} from '../../redux';
import {chatStyles} from './css/chatStyles';
import {config} from '../../config';
// import useSocket from '../../utils/socket';
import {SwipeableMessage} from '../../components/swippable/swippable';
import io from 'socket.io-client';
import {useIsFocused} from '@react-navigation/native';
const Separator = () => <View style={chatStyles.itemSeparator} />;

export const ChatScreen = ({navigation, route}) => {
  // const {roomname, roomId, image} = route?.params;
  const socket = io(config);

  const {roomId} = route?.params;

  const userName = useSelector(state => state?.userLogin?.userInfo);
  const username = userName?.user?.username;

  const getRoomData = useSelector(state => state?.getRoom?.getRoom);
  const findArray = getRoomData?.find(data => data?._id === roomId);

  const room = findArray?.name;
  const image = findArray?.image;

  // const socket = useSocket();
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef(null);
  const [message, setMessage] = useState('');
  // const [room, setRoom] = useState(roomname);

  const [showReply, setShowReply] = useState(false);
  const dispatch = useDispatch();
  const {deleteMsg, loading} = useSelector(state => state?.deleteMsg);
  const [replyTo, setReplyTo] = useState({
    message: '',
    username: '',
  });

  const scrollToBottom = () => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({animated: false});
    }
  };

  // useEffect(() => {
  //   if (socket) {
  //     socket.on('connect', () => {
  //       socket.emit('join', room);
  //       console.log('connection');
  //     });

  //     socket.on('receive', newMessage => {
  //       console.log('receive');
  //       setMessages(prevMessages => [...prevMessages, newMessage]);
  //     });

  //     return () => {
  //       // console.log('receive');
  //       // socket.off('receive');
  //     };
  //   }
  // }, [socket]);

  const isFocused = useIsFocused();

  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('join', room);
      console.log('connection');
    });

    socket.on('receive', newMessage => {
      console.log('receive');
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });
  }, [isFocused]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isFocused]);

  const getMessages = async () => {
    try {
      const {data} = await axios.get(`${config}/room/singleroom/${room}`);
      setMessages(data.messages);
    } catch (error) {
      console.log('getMessages error:', error);
    }
  };

  useEffect(() => {
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
              setMessages(() => messages.filter(obj => obj._id !== id));
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
  // <View style={styles.messageContainer}>
  //   <Text style={styles.messageText}>{'hello'}</Text>
  // </View>
  // const colorMapping = {};
  const renderItem = ({item, index}) => {
    const {username: name} = item;
    // let color = colorMapping[name];

    // if (!color) {
    //   // Generate a random color if it's a new username
    //   color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    //   colorMapping[name] = color;
    // }

    return (
      <SwipeableMessage
        message={item}
        setShowReply={setShowReply}
        setReplyTo={setReplyTo}
        scrollToBottom={scrollToBottom}>
        <TouchableRipple
          style={{marginBottom: 8}}
          onLongPress={() => handleLongPress(item?._id, name)}>
          <View
            style={[
              chatStyles.messageContainer,
              username === item?.username
                ? chatStyles.sentMessage
                : chatStyles.receivedMessage,
            ]}>
            {username === item?.username ? null : (
              <Text style={{fontWeight: 'bold'}}>{item?.username}</Text>
            )}
            {item?.repliedTo && (
              <View
                style={[
                  chatStyles.reply,
                  username === item?.username
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
      </SwipeableMessage>
    );
  };

  return (
    <View style={{display: 'flex', height: '100%'}}>
      <View style={chatStyles.header}>
        <View style={chatStyles.topView}>
          <View>
            <TouchableOpacity
              style={{width: 30}}
              onPress={() => navigation.navigate('tabNavigation')}>
              <Image
                source={require('../../assets/backIcon.png')}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
          </View>
          <View>
            {image ? (
              <Image
                source={{uri: image}}
                style={{
                  width: 35,
                  height: 35,
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
                  roomId,
                })
              }>
              <View>
                <Text style={chatStyles.roomText}>{room}</Text>
                <Text style={chatStyles.roominfo}>Tap here for group info</Text>
              </View>
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

// const styles = StyleSheet.create({
//   messageContainer: {
//     backgroundColor: '#DCF8C6',
//     borderRadius: 16,
//     padding: 8,
//     marginBottom: 8,
//     alignSelf: 'flex-start',
//     maxWidth: '80%',
//   },
//   messageText: {
//     fontSize: 16,
//   },
// });
