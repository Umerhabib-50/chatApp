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
      'http://192.168.1.215:5000/user/login',
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
      `http://192.168.1.215:5000/user/register`,
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
