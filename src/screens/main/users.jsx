import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addRoomAction} from '../../redux';

export const UsersScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {rooms} = useSelector(state => state?.addRoom);

  let userArray = [
    {id: '1', name: 'Room 1'},
    {id: '1', name: 'Room 2'},
    {id: '3', name: 'Room 3'},
  ];

  const [room, setRoom] = useState('');
  console.log(room);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('addRoom')}>
        <View style={styles.singleCard}>
          <View>
            <Image
              source={require('../../assets/pic3.png')}
              style={{width: 30, height: 30}}
            />
          </View>
          <View>
            <Text style={styles.text}> {item?.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.join}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'flex-end',
          width: '100%',
        }}>
        <View>
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>Chat</Text>
        </View>

        <View style={styles.inputContainer}></View>
      </View>
      <View style={styles.card}>
        <FlatList
          data={rooms}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          top: '80%',
          // right: '10%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          width: '100%',
        }}>
        <TextInput
          style={{borderWidth: 1}}
          placeholder="enter room name"
          value={room}
          onChangeText={text => {
            setRoom(text);
          }}
        />
        <Button
          title="Create New Room"
          onPress={() => {
            if (room) {
              dispatch(addRoomAction(room));
            }
            setRoom('');
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  join: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
    // marginTop: '2%',
  },
  input: {
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
  },

  card: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    marginTop: '3%',
  },
  text: {
    fontSize: 20,
    marginLeft: 17,
    fontWeight: 'bold',
  },
  singleCard: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
});
