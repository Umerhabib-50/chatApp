import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';
const MessageBubble = ({content, isReceived}) => {
  const bubbleStyle = isReceived
    ? styles.receivedMessageBubble
    : styles.sentMessageBubble;

  return (
    <View style={[styles.messageBubble, bubbleStyle]}>
      <Text style={styles.messageText}>{content}</Text>
      <Text style={styles.messageTimestamp}>10:00 AM</Text>
    </View>
  );
};
export const UserJoinRoomScreen = ({navigation, route}) => {
  // const {roomname} = route.params;
  // const [name, setName] = useState('');
  // const sendMessage = () => {
  //   navigation.navigate('chats', {username: name, roomname});
  // };
  const [data, setData] = useState([
    {id: '1', text: 'Item 1'},
    {id: '2', text: 'Item 2'},
    {id: '3', text: 'Item 3'},
    {id: '4', text: 'Item 4'},
  ]);

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
          const updatedData = data.filter(item => item.id !== id);
          setData(updatedData);
        },
      },
    ]);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onLongPress={() => handleLongPress(item.id)}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        {/* Received Message */}
        <MessageBubble content="Hello!" isReceived />

        {/* Sent Message */}
        <MessageBubble content="Hi there!" />
      </View>

      {/* Input Box */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Type a message" />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View>
    //   <FlatList
    //     data={data}
    //     renderItem={renderItem}
    //     keyExtractor={item => item.id}
    //   />
    // </View>
    // <View style={styles.main}>
    //   {/* <Text> Join Room as {userType} user</Text> */}
    //   <Text> Join Room </Text>
    //   <View style={styles.inputContainer}>
    //     <TextInput
    //       placeholder="Join Room..."
    //       onChangeText={text => setName(text)}
    //       value={name}
    //       style={styles.input}
    //     />
    //     <Button title="Join" onPress={sendMessage} />
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  // main: {
  //   display: 'flex',
  //   flex: 1,
  //   alignItems: 'center',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  // },
  // inputContainer: {
  //   display: 'flex',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#FFFFFF',
  //   borderRadius: 8,
  //   padding: 8,
  //   justifyContent: 'space-between',
  //   width: '80%',
  // },
  // input: {
  //   marginRight: 8,
  //   paddingVertical: 8,
  //   paddingHorizontal: 16,
  //   backgroundColor: '#F0F0F0',
  //   borderRadius: 4,
  //   width: '80%',
  // },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  messageContainer: {
    flex: 1,
    marginBottom: 16,
  },
  messageBubble: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    maxWidth: '70%',
    marginBottom: 8,
  },
  receivedMessageBubble: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-start',
  },
  sentMessageBubble: {
    backgroundColor: '#DCF8C6',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  messageTimestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
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
});
