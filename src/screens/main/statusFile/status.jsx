import React, {useContext, useEffect, useState, useCallback} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {deleteStatusAction, getstatusAction} from '../../../redux';
import {TabContext} from '../topTabNavigation';
import {launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';

export const StatusScreen = ({navigation}) => {
  const tab = useContext(TabContext);
  const dispatch = useDispatch();

  const userName = useSelector(state => state?.userLogin?.userInfo);
  const getUser = userName?.user?.username;
  const getUserId = userName?.user?._id;
  const getStatus = useSelector(state => state?.statusGet?.statusGet);
  const deleteStatus = useSelector(state => state?.statusDelete?.statusDelete);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalStatuses, setModalStatuses] = useState([]);
  // let findUser = getStatus?.allStatuses.find(item => item?.user == getUser);
  // const singleUserLength = findUser?.statuses?.length;
  const renderItem = ({item}) => {
    const {user, image, statuses} = item;

    const lastStatus = statuses[statuses.length - 1];
    // const {mediaUrl, text} = lastStatus;
    const statusMedia = lastStatus?.mediaUrl;
    const statusText = lastStatus?.text;
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
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginTop: '1%',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {statusMedia && statusText ? (
                <Image
                  style={{
                    height: 55,
                    width: 55,
                    borderRadius: 50,
                    backgroundColor: 'red',
                  }}
                  source={{uri: statusMedia}}
                />
              ) : (
                <View
                  style={{
                    width: 55,
                    height: 55,
                    borderRadius: 50,
                    backgroundColor: 'red',
                  }}>
                  <Text
                    style={{
                      fontSize: statusText?.length >= 30 ? 10 : 15,
                      textAlign: 'center',
                      padding: 5,
                      width: 55,
                      height: 55,
                      borderRadius: 50,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: statusText?.length >= 30 ? '25%' : '4%',
                    }}
                    numberOfLines={statusText?.length >= 30 ? 1 : null}>
                    {statusText}
                  </Text>
                </View>
              )}
              <Text style={{marginLeft: '8%', fontSize: 20}}>{user}</Text>
            </View>
            {/* <TouchableOpacity onPress={() => handleLongPress(statuses)}>
              <Image
                style={{width: 25, height: 25}}
                source={require('../../../assets/optionH.png')}
              /> */}
            {/* <Text style={{ fontWeight: '300', color: '#128c7e' }}>{length}</Text> */}
            {/* </TouchableOpacity> */}
          </View>
        </TouchableOpacity>
      )
    );
  };

  const deleteStatusById = statusId => {
    const obj = {
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
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 10,
          marginTop: '1%',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
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
        <TouchableOpacity onPress={() => deleteStatusById(statusId)}>
          {getUser === username && (
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

  const handleLongPress = useCallback(statuses => {
    setModalStatuses(statuses);
    setIsModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  const onRefresh = useCallback(() => {
    dispatch(getstatusAction());
    wait(2000).then(() => {});
  }, []);

  useEffect(() => {
    dispatch(getstatusAction());
  }, []);

  useEffect(() => {
    if (deleteStatus?.message) {
      closeModal();
      dispatch(getstatusAction());
    }
  }, [deleteStatus]);

  useEffect(() => {
    if (selectedImage) {
      navigation.navigate('statusText', {data: selectedImage});
    }
  }, [selectedImage]);

  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          data={getStatus?.allStatuses}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          refreshing={false}
          onRefresh={onRefresh}
        />
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
        <View
          style={{
            height: '40%',
            backgroundColor: '#000000',
            padding: 16,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}>
          <FlatList
            data={modalStatuses}
            renderItem={modelRender}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Modal>
    </>
  );
};
