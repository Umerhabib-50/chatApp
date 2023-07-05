import axios from 'axios';
import {
  CREATE_JOINROOM_FAIL,
  CREATE_JOINROOM_REQUEST,
  CREATE_JOINROOM_SUCCESS,
  DELETE_MESSAGE_FAIL,
  DELETE_MESSAGE_REQUEST,
  DELETE_MESSAGE_SUCCESS,
  DELETE_ROOM_FAIL,
  DELETE_ROOM_REQUEST,
  DELETE_ROOM_SUCCESS,
  GET_ROOMS_FAIL,
  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  UPDATE_IMAGE_ROOM_FAIL,
  UPDATE_IMAGE_ROOM_REQUEST,
  UPDATE_IMAGE_ROOM_SUCCESS,
} from '../constants';
import {config} from '../../config';

export const allUsersAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_USERS_REQUEST,
    });
    const {data} = await axios.get(`${config}/user/getusers`);
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
    const {data} = await axios.post(`${config}/room/createroom`, {
      name: roomName,
    });
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
    const {data} = await axios.get(`${config}/room/allroom`);
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
    const deleteObj = {
      data: {
        roomId: roomId,
        messageId: msgId,
      },
    };
    const {data} = await axios.delete(
      `${config}/room/deletemessage`,
      deleteObj,
    );
    dispatch({
      type: DELETE_MESSAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_MESSAGE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
export const deleteRoomAction = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_ROOM_REQUEST,
    });
    const {data} = await axios.delete(`${config}/room/deleteroom/${id}`);
    dispatch({
      type: DELETE_ROOM_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_ROOM_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
