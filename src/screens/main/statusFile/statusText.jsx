import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {ActivityIndicator, IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {emptyState, getstatusAction, statusUplaodAction} from '../../../redux';

export const StatusText = ({navigation, route}) => {
  const {data} = route?.params;
  const type = typeof data;
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const userName = useSelector(state => state?.userLogin?.userInfo);
  const status = useSelector(state => state?.statusUpload?.statusUpload);
  const {success, loading} = useSelector(state => state?.statusUpload);

  const {
    username,
    user: {_id},
  } = userName;
  const onSubmit = () => {
    const formData = new FormData();
    formData.append('text', text);
    formData.append('image', data);
    dispatch(statusUplaodAction(_id, formData));
    setText('');
  };
  useEffect(() => {
    if (status?.message) {
      navigation.navigate('Status');
      dispatch(getstatusAction());
      dispatch(emptyState());
    }
  }, [success]);
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#128c7e'}}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('tabNavigation', {screen: 'Status'})
          }>
          <Image
            style={{height: 40, width: 40, marginLeft: 20}}
            source={require('../../../assets/backIcon.png')}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          width: '100%',
          backgroundColor: '#9dc183',
          // paddingHorizontal: 8,
        }}>
        {type == 'string' ? (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}>
            <TextInput
              style={{
                fontSize: 20,
                fontWeight: '600',
                maxWidth: '70%',
                minWidth: '36%',
              }}
              autoFocus={true}
              placeholder="Type a status"
              multiline={true}
              onChangeText={value => setText(value)}
              value={text}
              defaultValue="umer"
            />
          </View>
        ) : (
          <Image style={{height: '55%', width: '100%'}} source={data} />
        )}
      </View>

      {/* {text && ( */}
      <View style={{position: 'absolute', top: '86%', right: '3%'}}>
        <TouchableOpacity onPress={onSubmit}>
          {loading ? (
            <View style={{marginRight: '7%', top: '80%'}}>
              <ActivityIndicator animating={true} color={'#000000'} />
            </View>
          ) : (
            <IconButton
              icon={() => (
                <Image
                  source={require('../../../assets/send.png')}
                  style={{height: 20, width: 20}}
                />
              )}
              containerColor={'#128c7e'}
              size={28}
            />
          )}
        </TouchableOpacity>
      </View>
      {/* )} */}
    </View>
  );
};
