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
  STATUS_UPLAOD_FAIL,
  STATUS_UPLAOD_REQUEST,
  STATUS_UPLAOD_SUCCESS,
} from '../constants';

//..............|| ALL USERS  REDUCER ||.............
export const allUsersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {loading: true};
    case GET_USERS_REQUEST:
      return {loading: false, allUsers: action.payload};
    case GET_USERS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

// export const addRoomReducer = (state = {rooms: []}, action) => {
//   switch (action.type) {
//     case 'ADD_ROOM':
//       return {rooms: [...state.rooms, {name: action.payload}]};
//     default:
//       return state;
//   }
// };
export const createRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_JOINROOM_REQUEST:
      return {loading: true, success: false};
    case CREATE_JOINROOM_SUCCESS:
      return {loading: false, createRoom: action.payload, success: true};
    case CREATE_JOINROOM_FAIL:
      return {loading: false, error: action.payload, success: false};
    default:
      return state;
  }
};

export const getRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ROOMS_REQUEST:
      return {loading: true, success: false};
    case GET_ROOMS_SUCCESS:
      return {loading: false, getRoom: action.payload, success: true};
    case GET_ROOMS_FAIL:
      return {loading: false, error: action.payload, success: false};
    default:
      return state;
  }
};
export const deleteMsgReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_MESSAGE_REQUEST:
      return {loading: true};
    case DELETE_MESSAGE_SUCCESS:
      return {loading: false, deleteMsg: action.payload};
    case DELETE_MESSAGE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
export const deleteRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_ROOM_REQUEST:
      return {loading: true, success: false};
    case DELETE_ROOM_SUCCESS:
      return {loading: false, deleteRoom: action.payload, success: true};
    case DELETE_ROOM_FAIL:
      return {loading: false, error: action.payload, success: false};
    default:
      return state;
  }
};
export const statusUploadReducer = (state = {}, action) => {
  switch (action.type) {
    case STATUS_UPLAOD_REQUEST:
      return {loading: true, success: false};
    case STATUS_UPLAOD_SUCCESS:
      return {loading: false, statusUpload: action.payload, success: true};
    case STATUS_UPLAOD_FAIL:
      return {loading: false, error: action.payload, success: false};
    case 'CLEAR':
      return {};
    default:
      return state;
  }
};
export const getStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_STATUS_REQUEST:
      return {loading: true, success: false};
    case GET_STATUS_SUCCESS:
      return {loading: false, statusGet: action.payload, success: true};
    case GET_STATUS_FAIL:
      return {loading: false, error: action.payload, success: false};
    default:
      return state;
  }
};
export const deleteStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_STATUS_REQUEST:
      return {loading: true, success: false};
    case DELETE_STATUS_SUCCESS:
      return {loading: false, statusdelete: action.payload, success: true};
    case DELETE_STATUS_FAIL:
      return {loading: false, error: action.payload, success: false};
    default:
      return state;
  }
};
