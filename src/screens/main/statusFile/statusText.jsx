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
      <View style={{backgroundColor: '#2b2b2b'}}>
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
          justifyContent: 'space-between',
          alignItems: 'center',
          flex: 1,
          width: '100%',
          // backgroundColor: 'rgba(0, 0, 0, 1)',
          backgroundColor: '#2b2b2b',
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
                color: '#ffffff',

                textAlign: 'center',
              }}
              placeholderTextColor="#ffffff"
              autoFocus={true}
              placeholder="Type a status"
              multiline={true}
              onChangeText={value => setText(value)}
              value={text}
              selectionColor="#ffffff"
            />
          </View>
        ) : (
          <Image
            style={{height: '65%', width: '100%', marginTop: '20%'}}
            source={data}
          />
        )}
        {type == 'object' && (
          <View
            style={{
              flexDirection: 'row',
            }}>
            <TextInput
              // ref={replyInputRef}
              style={{
                flex: 1,
                backgroundColor: '#FFF',
                padding: 0,
                borderRadius: 40,
                borderColor: 'gray',
                height: 40,
                paddingHorizontal: 16,
                // paddingVertical: '6%',
                marginRight: 12,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
              onChangeText={text => setText(text)}
              value={text}
              placeholder="Message"
              multiline={true}
            />
            {loading ? (
              <View style={{marginRight: '2%', marginTop: '2%'}}>
                <ActivityIndicator animating={true} color={'#000000'} />
              </View>
            ) : (
              <TouchableOpacity
                style={{
                  backgroundColor: '#128c7e',
                  borderRadius: 50,
                  // paddingHorizontal: 16,
                  // paddingVertical: 10,
                  padding: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={onSubmit}>
                <Image
                  style={{height: 22, width: 22}}
                  source={require('../../../assets/send.png')}
                />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>

      {type == 'string' && (
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
      )}
    </View>
  );
};
