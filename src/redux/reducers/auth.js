import {
  // USER_REGISTER_REQUEST,
  // USER_REGISTER_SUCCESS,
  // USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  ROLE_MATCH_FAIL,

  // FORGOT_PASSWORD_REQUEST,
  // FORGOT_PASSWORD_SUCCESS,
  // FORGOT_PASSWORD_FAIL,
} from '../constants';

// user register
// export const userRegisterReducer = (state = {}, action) => {
//   switch (action.type) {
//     case USER_REGISTER_REQUEST:
//       return {loading: true};
//     case USER_REGISTER_SUCCESS:
//       return {loading: false, userInfo: action.payload};
//     case USER_REGISTER_FAIL:
//       return {loading: false, error: action.payload};

//     default:
//       return state;
//   }
// };

// user login
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {loading: true};
    case USER_LOGIN_SUCCESS:
      return {loading: false, userInfo: action.payload};
    case USER_LOGIN_FAIL:
      return {loading: false, error: action.payload};
    case ROLE_MATCH_FAIL:
      return {loading: false, error: action.payload};
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

// let user: Array<string>;

// export const forgotPasswordReducer = (state = {users: user}, action) => {
//   switch (action.type) {
//     case FORGOT_PASSWORD_REQUEST:
//       return {loading: true};
//     case FORGOT_PASSWORD_SUCCESS:
//       return {loading: false, success: true, userData: action.payload};
//     case FORGOT_PASSWORD_FAIL:
//       return {loading: false, error: action.payload};
//     default:
//       return state;
//   }
// };

//..............|| USER REGISTER REDUCER ||.............
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {loading: true};
    case USER_REGISTER_SUCCESS:
      return {loading: false, userRegister: action.payload};
    case USER_REGISTER_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
