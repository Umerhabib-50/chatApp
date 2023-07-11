import React from 'react';
import {Modal, View, Image} from 'react-native';
export const ImageModal = ({visible, setVisible, image}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => setVisible(!visible)}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        }}>
        <Image
          style={{width: '70%', height: '40%'}}
          source={image ? {uri: image} : require('../../assets/group.png')}
        />
      </View>
    </Modal>
  );
};
