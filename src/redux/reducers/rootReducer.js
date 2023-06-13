import {combineReducers} from 'redux';
import {userLoginReducer, userRegisterReducer} from './auth';

export default combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
});
