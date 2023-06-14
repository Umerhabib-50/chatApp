// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   TextInput,
//   Button,
//   Text,
//   FlatList,
//   StyleSheet,
// } from 'react-native';
// import io from 'socket.io-client';

// export const SingleChatScreen = () => {
//   const socket_Link = io('http://192.168.1.59:8000');
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [socket, setSocket] = useState(socket_Link);

//   useEffect(() => {
//     if (socket) {
//       socket.on('recieve', receiveMessage);
//     }
//   }, [socket]);

//   const receiveMessage = newMessage => {
//     setMessages(prevMessages => [
//       ...prevMessages,
//       {message: newMessage, type: 'received'},
//     ]);
//   };

//   const sendMessage = () => {
//     if (socket) {
//       socket.emit('send', input);
//     }
//     setMessages(prevMessages => [
//       ...prevMessages,
//       {message: input, type: 'sent'},
//     ]);
//     setInput('');
//   };

//   const renderItem = ({item}) => (
//     <View
//       style={[
//         styles.messageContainer,
//         item.type === 'sent' ? styles.receivedMessage : styles.sentMessage,
//       ]}>
//       <Text style={styles.message}>{item.message}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={renderItem}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.messagesContainer}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Type a message..."
//           onChangeText={text => setInput(text)}
//           value={input}
//           style={styles.input}
//         />
//         <Button title="Send" onPress={sendMessage} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#F5F5F5',
//   },
//   messagesContainer: {
//     flexGrow: 1,
//   },
//   messageContainer: {
//     marginBottom: 8,
//   },
//   sentMessage: {
//     alignSelf: 'flex-end',
//     backgroundColor: '#DCF8C6',
//     borderRadius: 8,
//   },
//   receivedMessage: {
//     alignSelf: 'flex-start',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//   },
//   message: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 8,
//     padding: 8,
//   },
//   input: {
//     flex: 1,
//     marginRight: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     backgroundColor: '#F0F0F0',
//     borderRadius: 4,
//   },
// });

// export default SingleChatScreen;
import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import io from 'socket.io-client';

const socket = io('http://192.168.1.59:8000'); // Replace with your backend server URL

export const SingleChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [room, setRoom] = useState('default'); // Specify the default room

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
      socket.emit('join', room); // Join the default room when connected
    });

    socket.on('receive', message => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit('send', {room, message});
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({item}) => <Text style={styles.message}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messagesContainer}
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
  message: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginBottom: 8,
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
