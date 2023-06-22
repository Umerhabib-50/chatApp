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
      return {loading: true};
    case GET_ROOMS_SUCCESS:
      return {loading: false, getRoom: action.payload};
    case GET_ROOMS_FAIL:
      return {loading: false, error: action.payload};
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
