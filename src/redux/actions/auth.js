import {Axios} from '../../utils';
import {config} from '../../config';

import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants';
import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const userLoginAction = userData => async dispatch => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const {data} = await axios.post(
      ' https://bac9-103-184-1-9.ngrok-free.app/user/login',
      userData,
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};

//................. || USER REGISTER ACTION ||.................

export const userRegister = register_data => async dispatch => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const {data} = await axios.post(
      ` https://bac9-103-184-1-9.ngrok-free.app/user/register`,
      register_data,
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
export const logOutAction = navigation => dispatch => {
  dispatch({type: USER_LOGOUT});

  AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => navigation.navigate('login'));
  // .then(() => navigation.reset({index: 1, routes: [{name: 'login'}]}));
};
