import {combineReducers} from 'redux';
import {userLoginReducer, userRegisterReducer} from './auth';
import {addRoomReducer, allUsersReducer} from './main';

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  allUsers: allUsersReducer,
  addRoom: addRoomReducer,
});
