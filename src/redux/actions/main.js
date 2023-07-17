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
  DELETE_STATUS_FAIL,
  DELETE_STATUS_REQUEST,
  DELETE_STATUS_SUCCESS,
  GET_ROOMS_FAIL,
  GET_ROOMS_REQUEST,
  GET_ROOMS_SUCCESS,
  GET_STATUS_FAIL,
  GET_STATUS_REQUEST,
  GET_STATUS_SUCCESS,
  GET_USERS_FAIL,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  STATUS_UPLAOD_FAIL,
  STATUS_UPLAOD_REQUEST,
  STATUS_UPLAOD_SUCCESS,
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
export const statusUplaodAction = (id, formData) => async dispatch => {
  try {
    dispatch({
      type: STATUS_UPLAOD_REQUEST,
    });
    const {data} = await axios.post(`${config}/status/create/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    dispatch({
      type: STATUS_UPLAOD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STATUS_UPLAOD_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
export const getstatusAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_STATUS_REQUEST,
    });
    const {data} = await axios.get(`${config}/status/getstatus`);
    dispatch({
      type: GET_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_STATUS_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
export const deleteStatusAction = obj => async dispatch => {
  try {
    dispatch({
      type: DELETE_STATUS_REQUEST,
    });

    const {data} = await axios.delete(`${config}/status/delete`, {
      data: obj,
    });
    dispatch({
      type: DELETE_STATUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_STATUS_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
