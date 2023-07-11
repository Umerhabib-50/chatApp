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
  Alert,
} from 'react-native';

import {CustomModal, HeaderComponent} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {deleteRoomAction, getRoomAction, logOutAction} from '../../redux';
import {ActivityIndicator, IconButton} from 'react-native-paper';

export const RoomsScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {success: createRoomSuccess, loading: createRoomLoading} = useSelector(
    state => state?.createRoom,
  );
  const {
    getRoom,
    error,
    success: getRoomSuccess,
    loading: getRoomLoading,
  } = useSelector(state => state?.getRoom);

  const loading = createRoomLoading || getRoomLoading;
  const [data, setData] = useState(getRoom);
  // const userName = useSelector(state => state?.userLogin?.userInfo);
  // const username = userName?.user?.username;
  const {success: deleteRoomSuccess} = useSelector(state => state?.deleteRoom);
  const mainHandler = () => {
    Alert.alert('', 'Under Development.', [
      {
        text: 'OK',
        onPress: () => console.log(''),
      },
    ]);
  };
  useEffect(() => {
    dispatch(getRoomAction());
  }, []);

  useEffect(() => {
    if (createRoomSuccess || deleteRoomSuccess) {
      dispatch(getRoomAction());
    }
  }, [createRoomSuccess, deleteRoomSuccess]);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on('createRoomSuccess', () => {
  //       dispatch(getRoomAction());
  //     });
  //   }
  // }, []);
  const deleteRoomFun = id => {
    Alert.alert('Delete Room', 'Are you sure you want to delete this Room?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => dispatch(deleteRoomAction(id)),
      },
    ]);
  };
  const renderItem = ({item, index}) => {
    const {name, image, _id, description} = item;

    // const lastMsg = item?.messages[item?.messages.length - 1];
    //  lastMsg?.message

    return (
      <TouchableOpacity
        onLongPress={() => deleteRoomFun(_id)}
        onPress={() =>
          navigation.navigate('chats', {
            roomId: item._id,
            description,
          })
        }>
        <View style={[styles.singleCard]}>
          <View>
            {image ? (
              <Image
                source={{uri: image}}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
              />
            ) : (
              <Image
                source={require('../../assets/group.png')}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                }}
              />
            )}
          </View>
          <View>
            <Text style={styles.text}> {name}</Text>

            {/* <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={styles.subTitle}>
                {lastMsg?.username == undefined
                  ? 'Empty Room'
                  : `${lastMsg?.username}:`}
              </Text>
              <Text style={{marginLeft: 3}}>
                {lastMsg?.message == undefined ? '' : lastMsg?.message}
              </Text>
            </View> */}
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderBottomColor: '#DEDEDE',
            marginLeft: 30,
            marginRight: 30,
          }}></View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {/* <View style={styles.chatScreen}> */}
      {/* <View style={styles.header}>
          <View
            style={{
              paddingHorizontal: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 19}}>
                ChatApp
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: '50%',
              }}>
              <TouchableOpacity onPress={() => mainHandler()}>
                <Image
                  source={require('../../assets/chatCam.png')}
                  style={{width: 23, height: 23, marginTop: '15%'}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => mainHandler()}>
                <Image
                  source={require('../../assets/search.png')}
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => mainHandler()}>
                <Image
                  source={require('../../assets/option.png')}
                  style={{width: 34, height: 34}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bottomBar}>
            <View>
              <Text style={styles.bottomText}>Rooms</Text>
            </View>
            <TouchableOpacity onPress={() => mainHandler()}>
              <Text style={styles.bottomText}>Status</Text>
            </TouchableOpacity>
            <View>
              <TouchableOpacity
                onPress={() => dispatch(logOutAction(navigation))}>
                <Text style={styles.bottomText}>Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View> */}
      <View style={styles.join}>
        <View style={styles.card}>
          {loading ? (
            <View
              style={{
                height: '92%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ActivityIndicator
                size={'large'}
                animating={true}
                color={'#006257'}
              />
            </View>
          ) : (
            <FlatList
              data={getRoom}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          )}
        </View>
        <View style={{position: 'absolute', top: '86%', right: '3%'}}>
          <IconButton
            icon={() => (
              <Image
                source={require('../../assets/msgImage.png')}
                style={{height: 40, width: 40}}
              />
            )}
            containerColor={'#128c7e'}
            size={50}
            onPress={() => {
              setModalVisible(true);
              // navigation.navigate('setting');
            }}
          />
        </View>
        <CustomModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          data={data}
          setData={setData}
        />
      </View>
      {/* </View> */}
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
    backgroundColor: '#128c7e',
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

    // fontWeight: 'bold',
    fontSize: 14,
    // marginTop: '20%',
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
    fontSize: 15,
    marginLeft: 8,
    color: '#000000',
    fontWeight: '500',
  },
  subTitle: {
    marginLeft: 15,
  },
  singleCard: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: '2%',
  },
});
