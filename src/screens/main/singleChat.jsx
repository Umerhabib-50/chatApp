// import React, {useEffect, useState} from 'react';
// import {
//   View,
//   TextInput,
//   Button,
//   Text,
//   FlatList,
//   StyleSheet,
// } from 'react-native';

// export const SingleChatScreen = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState('');

//   const receiveMessage = newMessage => {
//     setMessages([...messages, newMessage]);
//   };

//   const sendMessage = () => {
//     setMessages([...messages, message]);
//     setMessage('');
//   };
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={messages}
//         renderItem={({item}) => <Text style={styles.message}>{item}</Text>}
//         keyExtractor={(item, index) => index.toString()}
//         contentContainerStyle={styles.messagesContainer}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Type a message..."
//           onChangeText={text => setMessage(text)}
//           value={message}
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
//     backgroundColor: 'pink',
//   },
//   // messagesContainer: {
//   //   // flexGrow: 1,
//   //   width: 'auto',
//   // },
//   message: {
//     paddingVertical: 10,
//     paddingHorizontal: 16,
//     backgroundColor: 'red',
//     borderRadius: 8,
//     marginBottom: 8,
//     width: '60%',
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

export const SingleChatScreen = () => {
  const socket_Link = io('http://192.168.1.59:8000');
  const [messages, setMessages] = useState([]);
  console.log('data from socket', messages);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(socket_Link);

  // useEffect(() => {
  //   const newSocket = io('YOUR_BACKEND_SERVER_URL');
  //   setSocket(newSocket);
  //   return () => {
  //     newSocket.disconnect();
  //   };
  // }, []);

  useEffect(() => {
    if (socket) {
      socket.on('user-joined', receiveMessage);
    }
  }, [socket]);

  const receiveMessage = newMessage => {
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  const sendMessage = () => {
    if (socket) {
      socket.emit('chat message', input);
    }
    setInput('');
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
          onChangeText={text => setInput(text)}
          value={input}
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
