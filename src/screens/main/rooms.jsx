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
import io from 'socket.io-client';
import {CustomModal, HeaderComponent} from '../../components';
import {useDispatch, useSelector} from 'react-redux';

export const RoomsScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {rooms} = useSelector(state => state?.addRoom);

  // let userArray = [
  //   {id: '1', name: 'Room 1'},
  //   {id: '1', name: 'Room 2'},
  //   {id: '3', name: 'Room 3'},
  // ];

  const [room, setRoom] = useState('');

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('userjoinroom')}>
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
    <>
      <HeaderComponent userName={'Rooms'} />
      <View style={styles.join}>
        <View style={styles.card}>
          <FlatList
            data={rooms}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{position: 'absolute', top: '90%'}}>
          <Button
            title="Create Room"
            onPress={() => {
              setModalVisible(true);
            }}
          />
        </View>
        <CustomModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          room={room}
          setRoom={setRoom}
        />
      </View>
    </>
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
    // marginTop: '3%',
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
