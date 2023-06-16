import axios from 'axios';
import {
  CREATE_JOINROOM_FAIL,
  CREATE_JOINROOM_REQUEST,
  CREATE_JOINROOM_SUCCESS,
  GET_ROOMS_FAIL,
  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
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
export const createRoomAction = roomName => async dispatch => {
  try {
    dispatch({
      type: CREATE_JOINROOM_REQUEST,
    });
    const {data} = await axios.post(
      `http://192.168.1.215:5000/room/createroom`,
      {name: roomName},
    );
    dispatch({
      type: CREATE_JOINROOM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATE_JOINROOM_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
export const getRoomAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_ROOMS_REQUEST,
    });
    const {data} = await axios.get(`http://192.168.1.215:5000/room/allroom`);
    console.log('data from api', data);
    dispatch({
      type: GET_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_ROOMS_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
