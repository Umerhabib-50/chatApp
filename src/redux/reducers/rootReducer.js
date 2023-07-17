import {combineReducers} from 'redux';
import {userLoginReducer, userRegisterReducer} from './auth';
import {
  addRoomReducer,
  allUsersReducer,
  createRoomReducer,
  deleteMsgReducer,
  deleteRoomReducer,
  deleteStatusReducer,
  getRoomReducer,
  getStatusReducer,
  statusUploadReducer,
} from './main';

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  allUsers: allUsersReducer,
  // addRoom: addRoomReducer,
  createRoom: createRoomReducer,
  getRoom: getRoomReducer,
  deleteMsg: deleteMsgReducer,
  deleteRoom: deleteRoomReducer,
  statusUpload: statusUploadReducer,
  statusGet: getStatusReducer,
  statusdelete: deleteStatusReducer,
});
