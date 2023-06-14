import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

export const UsersScreen = () => {
  return (
    <View style={styles.users}>
      <View style={styles.usersList}>
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            marginTop: '4%',
            marginLeft: '4%',
          }}>
          Chat
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  users: {
    backgroundColor: 'white',
    height: '100%',
  },
  usersList: {
    backgroundColor: '#000302',
    height: '10%',
    display: 'flex',
  },
});
