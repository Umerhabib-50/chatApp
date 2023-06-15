import React from 'react';
import {View, StyleSheet, Button, Text} from 'react-native';

import {HeaderComponent} from '../../components';
export const JoinRoomAsScreen = ({navigation}) => {
  return (
    <>
      <HeaderComponent
        // userName={'rehan'}
        navigation={() => navigation.goBack()}
        imageSource={require('../../assets/backIcon.png')}
      />
      <View style={styles.join}>
        <View>
          <Text style={{fontSize: 30}}>Join Room As </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
            marginTop: '3%',
          }}>
          <View>
            <Button
              title="Existing User"
              onPress={() => {
                navigation.navigate('userjoinroom', {
                  userType: 'existing',
                });
              }}
            />
          </View>
          <View>
            <Button
              title="New User"
              onPress={() => {
                navigation.navigate('userjoinroom', {
                  userType: 'new',
                });
              }}
            />
          </View>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  join: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '80%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 8,
    justifyContent: 'space-between',
    width: '80%',
  },
  input: {
    marginRight: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 4,
    width: '80%',
  },
});
