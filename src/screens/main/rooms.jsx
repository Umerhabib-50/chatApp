import React, {useEffect, useState} from 'react';
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
import {getRoomAction} from '../../redux';
import {IconButton} from 'react-native-paper';
import {plus} from '../../assets/icon/plus.svg';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
export const RoomsScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {getRoom, error} = useSelector(state => state?.getRoom);
  console.log('error', error);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getRoomAction());
  }, []);

  useEffect(() => {
    setData(getRoom);
  }, [getRoom]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('userjoinroom', {roomname: item.name})
        }>
        <View style={styles.singleCard}>
          <View>
            <Image
              source={require('../../assets/pic3.png')}
              style={{width: 45, height: 45, borderRadius: 50}}
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
      {/* <HeaderComponent userName={'Rooms'} /> */}
      <View style={styles.chatScreen}>
        <View style={styles.header}>
          <View style={{paddingHorizontal: 20}}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 19}}>
              WhatsApp
            </Text>
          </View>
          <View style={styles.bottomBar}>
            <View>
              <Text style={styles.bottomText}>Chats</Text>
            </View>
            <View>
              <Text style={styles.bottomText}>Status</Text>
            </View>
            <View>
              <Text style={styles.bottomText}>Calls</Text>
            </View>
          </View>
        </View>
        <View style={styles.join}>
          <View style={styles.card}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
          <View style={{position: 'absolute', top: '90%'}}>
            <IconButton
              iconColor={'white'}
              icon={() => <MaterialIcon name={plus} size={20} color="white" />}
              color="#2196F3"
              containerColor={'#2196F3'}
              size={40}
              onPress={() => console.log('Pressed')}
            />
            {/* <Button
              title="Create Room"
              onPress={() => {
                setModalVisible(true);
              }}
            /> */}
          </View>
          <CustomModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            data={data}
            setData={setData}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  chatScreen: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    height: '15%',
    backgroundColor: '#006257',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  join: {
    height: '85%',
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: '1%',
  },
  bottomText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8,
  },
  input: {
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
  },

  card: {
    // backgroundColor: '#FFFFFF',
    width: '100%',
  },
  text: {
    fontSize: 19,
    marginLeft: 8,
    color: '#000000',
  },
  singleCard: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    marginLeft: 9,
    // borderBottomWidth: 1,
    // borderBottomWidth: 1,
  },
});
