import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
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
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
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
  main: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'space-between',
    width: '80%',
  },
  input: {
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    width: '80%',
  },
});
