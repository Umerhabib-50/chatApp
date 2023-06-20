import {combineReducers} from 'redux';
import {userLoginReducer, userRegisterReducer} from './auth';
import {
  addRoomReducer,
  allUsersReducer,
  createRoomReducer,
  deleteMsgReducer,
  getRoomReducer,
} from './main';

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  allUsers: allUsersReducer,
  // addRoom: addRoomReducer,
  createRoom: createRoomReducer,
  getRoom: getRoomReducer,
  deleteMsg: deleteMsgReducer,
});
