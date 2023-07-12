import React, {useCallback, useEffect, useState} from 'react';
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
import {IconButton} from 'react-native-paper';

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
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    dispatch(getRoomAction());
    wait(2000).then(() => setIsRefreshing(false));
  }, []);
  return (
    <>
      <View style={styles.join}>
        <View style={styles.card}>
          <FlatList
            data={getRoom}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
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
