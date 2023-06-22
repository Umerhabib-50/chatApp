import axios from 'axios';
import {
  CREATE_JOINROOM_FAIL,
  CREATE_JOINROOM_REQUEST,
  CREATE_JOINROOM_SUCCESS,
  DELETE_MESSAGE_FAIL,
  DELETE_MESSAGE_REQUEST,
  DELETE_MESSAGE_SUCCESS,
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
    const {data} = await axios.get(
      ` https://bac9-103-184-1-9.ngrok-free.app/user/getusers`,
    );
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
      ` https://bac9-103-184-1-9.ngrok-free.app/room/createroom`,
      {
        name: roomName,
      },
    );
    dispatch({
      type: CREATE_JOINROOM_SUCCESS,
      payload: data,
    });
  } catch (error) {
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
    const {data} = await axios.get(
      ` https://bac9-103-184-1-9.ngrok-free.app/room/allroom`,
    );
    dispatch({
      type: GET_ROOMS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ROOMS_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
export const deleteMsgAction = (roomId, msgId) => async dispatch => {
  try {
    dispatch({
      type: DELETE_MESSAGE_REQUEST,
    });
    const config = {
      data: {
        roomId: roomId,
        messageId: msgId,
      },
    };
    const {data} = await axios.delete(
      ` https://bac9-103-184-1-9.ngrok-free.app/room/deletemessage`,
      config,
    );
    dispatch({
      type: DELETE_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log('error from delete error', error);
    dispatch({
      type: DELETE_MESSAGE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
