import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {useNavigation} from '@react-navigation/native';
// icons

import {Text} from '../text/text';
import {CustomButton} from '../button/custom-button';
import {Icon} from '../common/icon';
import {Modal, TouchableRipple} from 'react-native-paper';
import {COLORS} from '../../constant';
import {useDispatch, useSelector} from 'react-redux';

export const CustomModal = ({
  children,
  modalVisible,
  modalHeight,
  setModalVisible,
  closeicon,
  navigateTo,
  navigationOptions,
  title,
  success,
  error,
  errormessage,
  successmessage,
  Delete,
  deleteName,
  deleteAction,
  selector,
  deleteId,
}) => {
  const initialRender = useRef(true);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);

  const onDelete = async () => {
    setloading(true);
    dispatch(deleteAction(deleteId));
    setloading(false);
  };

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      if (selector) {
        navigation.navigate(navigateTo);
      }
    }
  }, [selector]);

  return (
    <Modal visible={modalVisible}>
      <View style={modalStyle.main}>
        <View
          style={[
            modalStyle.submain,
            {
              height: modalHeight ? modalHeight : '50%',
            },
          ]}>
          {closeicon && (
            <View style={modalStyle.closeIcon}>
              <TouchableRipple onPress={setModalVisible}>
                <Icon name={closeicon} size={25} />
              </TouchableRipple>
            </View>
          )}
          {children}
          {error && (
            <View style={modalStyle.errmain}>
              <Icon name="ErrorIcon" size={120} />
              <Text style={{marginVertical: 15}} variant="titleMedium">
                {errormessage}
              </Text>
              <CustomButton
                onPress={setModalVisible}
                title={'OK'}
                color={COLORS.error}
                style={{width: '80%', position: 'absolute', top: '80%'}}
                textColor="white"
              />
            </View>
          )}
          {success && (
            <View style={modalStyle.successmain}>
              <Icon name="SuccessIcon" size={80} />
              <Text style={{marginVertical: 15}}>{successmessage}</Text>
              <CustomButton
                onPress={() => {
                  setModalVisible();
                  {
                    navigateTo && navigation.navigate(navigateTo);
                  }
                }}
                title={'OK'}
                color="green"
                style={{width: '80%', position: 'absolute', top: '80%'}}
                textColor="white"
              />
            </View>
          )}
          {Delete && (
            <View style={modalStyle.delmain}>
              <Icon name="DeleteIcon" size={100} />
              <Text style={{margin: 15}}>
                {/* {deletesuccessTest?.error?.message
                  ? deletesuccessTest?.error?.message
                  :  */}
                {`Are You Sure You Want To Delete this ${deleteName} `}
                {/* } */}
              </Text>
              {/* {deletesuccessTest?.error?.message ? (
                ''
              ) : ( */}
              <CustomButton
                onPress={onDelete}
                title={loading ? '' : 'Yes'}
                color={COLORS.error}
                style={{width: '80%', position: 'absolute', top: '80%'}}
                textColor="white"
                loading={loading}
              />
              {/* )} */}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const modalStyle = StyleSheet.create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  submain: {
    backgroundColor: COLORS.white,
    width: '80%',
    position: 'relative',
    borderRadius: 20,
  },
  closeIcon: {position: 'absolute', top: 15, right: 25},
  errmain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  successmain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
  delmain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    position: 'relative',
  },
});
