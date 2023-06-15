import axios from 'axios';
import {
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from '../constants';

export const allUsersAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
    });
    const {data} = await axios.get(`http://192.168.1.215:5000/user/getusers`);
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};

export const addRoomAction = room => {
  return {
    type: 'ADD_ROOM',
    payload: room,
  };
};
