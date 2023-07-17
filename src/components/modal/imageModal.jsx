import React from 'react';
import {Modal, View, Image, Text, TouchableOpacity} from 'react-native';
export const ImageModal = ({visible, setVisible, image}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(!visible)}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#000000',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            height: '9%',
            marginLeft: '4%',
          }}>
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Image
              style={{height: 28, width: 28}}
              source={require('../../assets/backIcon.png')}
            />
          </TouchableOpacity>

          <Text
            style={{
              color: 'white',
              fontSize: 20,
              marginLeft: '4%',
              fontWeight: '700',
            }}>
            Group Image
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <Image
            style={{width: '100%', height: '55%'}}
            source={image ? {uri: image} : require('../../assets/group.png')}
          />
        </View>
      </View>
    </Modal>
  );
};
