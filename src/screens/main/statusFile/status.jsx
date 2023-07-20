import React, {useContext, useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {deleteStatusAction, getstatusAction} from '../../../redux';
import {TabContext} from '../topTabNavigation';
import {launchImageLibrary} from 'react-native-image-picker';
import Modal from 'react-native-modal';
import CircularProgress from 'react-native-circular-progress-indicator';
export const StatusScreen = ({navigation}) => {
  const tab = useContext(TabContext);
  const dispatch = useDispatch();

  const userName = useSelector(state => state?.userLogin?.userInfo);
  const getUser = userName?.user?.username;
  const getUserId = userName?.user?._id;
  const getStatus = useSelector(state => state?.statusGet?.statusGet);
  const deleteStatus = useSelector(state => state?.statusdelete?.statusdelete);
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
              paddingHorizontal: 20,
              paddingVertical: 10,
              marginTop: '1%',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{position: 'relative'}}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                  }}>
                  <CircularProgress
                    style={{borderRadius: 50}}
                    value={10}
                    activeStrokeWidth={0}
                    inActiveStrokeWidth={3}
                    progressValueColor={'#ecf0f1'}
                    radius={32}
                    // activeStrokeColor={'#2465FD'}

                    progressValueStyle={{display: 'none'}}
                    dashedStrokeConfig={{
                      count: statuses?.length,
                      width:
                        statuses?.length >= 5
                          ? 230 / statuses?.length - 7
                          : 230 / statuses?.length - 12,
                    }}
                  />
                </View>

                <View style={{left: 4.3, top: 4.3}}>
                  {statusMedia ? (
                    <Image
                      style={{
                        height: 55,
                        width: 55,
                        borderRadius: 50,
                      }}
                      source={{uri: statusMedia}}
                    />
                  ) : (
                    <View
                      style={{
                        width: 55,
                        height: 55,
                        borderRadius: 50,
                        backgroundColor: '#2e242c',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: statusText?.length >= 60 ? 4 : 7,
                          textAlign: 'center',
                          paddingVertical: 10,
                          paddingHorizontal: 7,
                          color: '#ffffff',
                        }}
                        numberOfLines={statusText?.length >= 300 ? 9 : null}>
                        {statusText}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
              <View>
                <Text
                  style={{
                    marginLeft: getUser === user ? '15%' : '23%',
                    fontSize: 20,
                  }}>
                  {user}
                </Text>
              </View>
            </View>
            {getUser === user && (
              <TouchableOpacity onPress={() => handleLongPress(statuses)}>
                <Image
                  style={{width: 25, height: 25}}
                  source={require('../../../assets/optionH.png')}
                />
                {/* <Text style={{fontWeight: '300', color: '#128c7e'}}>
                {length}
              </Text> */}
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      )
    );
  };
  //=================|| DELETE MODEL ||===========

  const deleteStatusById = statusId => {
    Alert.alert(
      'Delete Status',
      "You Can't Delete This Status",
      [
        {
          text: 'Cancel',
          onPress: () => console.log('OK Pressed'),
          style: 'default',
        },
        {
          text: 'OK',
          onPress: () => {
            const obj = {
              userId: getUserId,
              statusId: statusId,
            };
            dispatch(deleteStatusAction(obj));
            {
              deleteStatus?.message && setIsModalVisible(!isModalVisible);
            }
          },
          style: 'default',
        },
      ],
      {cancelable: false},
    );

    // const obj = {
    //   userId: getUserId,
    //   statusId: statusId,
    // };
    // dispatch(deleteStatusAction(obj));
  };
  //================== || MODEL RENDER ||===============
  const modelRender = ({item}) => {
    const {mediaUrl, statusId, username, text} = item;
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingVertical: 10,
            marginTop: '5%',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {/* {text && (
              <View
                style={{
                  backgroundColor: '#2e242c',
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{marginLeft: '4%', fontSize: 8, color: 'white'}}>
                  {text}
                </Text>
              </View>
            )} */}
            {mediaUrl ? (
              <Image
                style={{height: 55, width: 55, borderRadius: 50}}
                source={{uri: mediaUrl}}
              />
            ) : (
              <View
                style={{
                  backgroundColor: '#2e242c',
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{marginLeft: '4%', fontSize: 8, color: 'white'}}>
                  {text}
                </Text>
              </View>
            )}
            <Text
              style={{
                marginLeft: '8%',
                color: 'white',
                fontSize: 17,
                fontWeight: '500',
              }}>
              {username}
            </Text>
          </View>
          <TouchableOpacity onPress={() => deleteStatusById(statusId)}>
            <Image
              source={require('../../../assets/option.png')}
              style={{width: 25, height: 32}}
            />
          </TouchableOpacity>
        </View>
      </>
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
        onBackdropPress={() => setIsModalVisible(!isModalVisible)}
        // onBackdropPress={closeModal}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        backdropOpacity={0.5}
        backdropTransitionOutTiming={0}
        backdropTransitionInTiming={0}>
        <View
          style={{
            height: '100%',
            backgroundColor: '#3b3c36',
            // padding: 16,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              height: '5%',
              backgroundColor: '#128e7c',
            }}>
            <TouchableOpacity onPress={() => setIsModalVisible(false)}>
              <Image
                style={{width: 25, height: 25, marginLeft: 7}}
                source={require('../../../assets/backIcon.png')}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: '#ffffff',
                marginLeft: 7,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              My Status
            </Text>
          </View>
          <View>
            <FlatList
              data={modalStatuses}
              renderItem={modelRender}
              keyExtractor={(item, index) => index.toString()}
            />
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '4%',
              }}>
              <Text
                style={{
                  color: '#666362',
                  fontSize: 13,
                  fontWeight: '700',
                }}>
                Your status updates will disappear after 01 hours.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
