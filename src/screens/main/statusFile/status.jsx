import React, {
  useContext,
  useEffect,
  useCallback,
  useRef,
  useState,
} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {deleteStatusAction, getstatusAction} from '../../../redux';
import {TabContext} from '../topTabNavigation';
import {launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';

export const StatusScreen = ({navigation}) => {
  const tab = useContext(TabContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const dispatch = useDispatch();
  const [modelStatus, modalStatuses] = useState('');

  const userName = useSelector(state => state?.userLogin?.userInfo);
  const getUser = userName?.user?.username;
  const getUserId = userName?.user?._id;
  const getStatus = useSelector(state => state?.statusGet?.statusGet);
  const {statusGet, success} = useSelector(state => state?.statusGet);
  const deleteStatus = useSelector(state => state?.statusdelete?.statusdelete);
  const renderItem = ({item, index}) => {
    const {user, image, statuses} = item;
    const length = statuses?.length;
    return (
      length > 0 && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('mainStack', {
              screen: 'statusShow',
              params: {user, image, statuses},
            });
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginTop: '1%',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                style={{height: 55, width: 55, borderRadius: 50}}
                source={{uri: image}}
              />
              <Text style={{marginLeft: '8%', fontSize: 20}}>{user}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                handleLongPress(statuses);
              }}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../../assets/optionH.png')}
              />
              {/* <Text style={{fontWeight: '300', color: '#128c7e'}}>
                {length}
              </Text> */}
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      )
    );
  };
  const deletestatus = statusId => {
    let obj = {
      userId: getUserId,
      statusId: statusId,
    };
    dispatch(deleteStatusAction(obj));
  };

  const modelRender = ({item}) => {
    const {mediaUrl, statusId, username, text} = item;
    return (
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginTop: '1%',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {text && (
            <View
              style={{
                backgroundColor: '#fddde6',
                width: 55,
                height: 55,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{marginLeft: '8%', fontSize: 8}}>{text}</Text>
            </View>
          )}
          {mediaUrl && (
            <Image
              style={{height: 55, width: 55, borderRadius: 50}}
              source={{uri: mediaUrl}}
            />
          )}

          {/* )} */}

          <Text
            style={{
              marginLeft: '8%',
              color: 'white',
              fontSize: 20,
              fontWeight: '500',
            }}>
            {username}
          </Text>
        </View>
        <TouchableOpacity onPress={() => deletestatus(statusId)}>
          {getUser == username && (
            <Image
              source={require('../../../assets/delete.png')}
              style={{width: 25, height: 25}}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  };
  const selectImage = () => {
    launchImageLibrary({}, response => {
      if (response.assets && response.assets.length > 0) {
        const image = {
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        };
        setSelectedImage(image);
      }
    });
  };
  useEffect(() => {
    dispatch(getstatusAction());
  }, []);
  // useEffect(() => {
  //   if (tab == 'status') {
  //     dispatch(getstatusAction());
  //   }
  // }, [tab]);
  useEffect(() => {
    if (deleteStatus?.message) {
      setIsModalVisible(false);
      dispatch(getstatusAction());
    }
  }, [deleteStatus]);

  useEffect(() => {
    if (selectedImage) {
      navigation.navigate('statusText', {data: selectedImage});
    }
  }, [selectedImage]);

  const handleLongPress = statuses => {
    modalStatuses(statuses);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const [isRefreshing, setIsRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setIsRefreshing(true);
    dispatch(getstatusAction());
    wait(2000).then(() => setIsRefreshing(false));
  }, []);
  return (
    <>
      <View style={{flex: 1}}>
        <View>
          <FlatList
            data={getStatus?.allStatuses}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            refreshing={isRefreshing}
            onRefresh={onRefresh}
          />
        </View>
        <Modal
          isVisible={isModalVisible}
          style={{
            margin: 0,
            justifyContent: 'flex-end',
          }}
          onBackdropPress={closeModal}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          backdropOpacity={0.5}
          backdropTransitionOutTiming={0}
          backdropTransitionInTiming={0}>
          {/* Your modal content */}
          <View
            style={{
              height: '40%',
              backgroundColor: '#000000',
              padding: 16,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}>
            <FlatList
              data={modelStatus}
              renderItem={modelRender}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </Modal>
      </View>
      <View style={{position: 'absolute', bottom: 16, right: 16}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('statusText', {data: 'data'})}>
          <IconButton
            icon={() => (
              <Image
                source={require('../../../assets/pencil.png')}
                style={{height: 20, width: 20}}
              />
            )}
            containerColor={'#3b3c36'}
            size={40}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={selectImage}>
          <IconButton
            icon={() => (
              <Image
                source={require('../../../assets/chatCam.png')}
                style={{height: 25, width: 25}}
              />
            )}
            containerColor={'#128c7e'}
            size={40}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
