import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
export const HeaderComponent = ({navigation, userName, imageSource}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={navigation}>
        <View style={{marginLeft: 7}}>
          {imageSource && (
            <Image source={imageSource} style={{width: 40, height: 40}} />
          )}
        </View>
      </TouchableOpacity>
      <View style={{marginLeft: 7}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
          {userName}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#212121',
    height: '10%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
