import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, TextInput} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {emptyState, statusUplaodAction} from '../../../redux';

export const StatusText = ({navigation}) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const userName = useSelector(state => state?.userLogin?.userInfo);
  const status = useSelector(state => state?.statusUpload?.statusUpload);
  const {success} = useSelector(state => state?.statusUpload);

  const {
    username,
    user: {_id},
  } = userName;
  const onSubmit = data => {
    const formData = new FormData();
    formData.append('text', data);
    formData.append('image', '');
    dispatch(statusUplaodAction(_id, formData));
    setText('');
  };
  useEffect(() => {
    if (status?.message) {
      navigation.navigate('mainStack', {
        screen: 'statusShow',
        params: {
          status: status?.status,
        },
      });
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
          backgroundColor: '#D2B48C',
          paddingHorizontal: 8,
        }}>
        <TextInput
          style={{
            fontSize: 20,
            fontWeight: '600',
            width: '60%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          autoFocus={true}
          placeholder="Type a status"
          multiline={true}
          onChangeText={value => setText(value)}
          value={text}
        />
      </View>
      {text && (
        <View style={{position: 'absolute', top: '86%', right: '3%'}}>
          <TouchableOpacity onPress={() => onSubmit(text)}>
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
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
