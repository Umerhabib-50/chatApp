import {GET_USERS_FAIL, GET_USERS_REQUEST} from '../constants';

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

export const addRoomReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ROOM':
      return state.push(action.payload);

    default:
      return state;
  }
};
