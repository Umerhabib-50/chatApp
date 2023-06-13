import {Axios} from '../../utils';

import {config} from '../../config';

import {
  ADD_EMPLOYEE_FAIL,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAIL,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  ROLE_MATCH_FAIL,
  UPDATE_EMPLOYEE_FAIL,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from '../constants';

import AsyncStorage from '@react-native-async-storage/async-storage';

// import {CommonActions} from '@react-navigation/native';

// export const userRegisterAction = userData => async dispatch => {
//   try {
//     dispatch({
//       type: USER_REGISTER_REQUEST,
//     });
//     const {data} = await Axios.post(
//       `${config.SERVER_IP}/users/register`,
//       userData,
//     );

//     dispatch({
//       type: USER_REGISTER_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: USER_REGISTER_FAIL,
//       payload: error?.response && error?.response?.data,
//     });
//   }
// };

export const userLoginAction = (userData, role) => async dispatch => {
  const roleError = role?.length >= 2 ? 'Employee / Manager' : 'Admin';
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const {data} = await Axios.post('/user/login', userData);
    let result = role.some(i => data?.data?.role?.role.includes(i));

    if (result) {
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: ROLE_MATCH_FAIL,
        payload: {error: true, message: `Your are not ${roleError}`},
      });
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};

// export const forgotPassword = (data: userEmail) => async (dispatch: any) => {
//   try {
//     dispatch({type: FORGOT_PASSWORD_REQUEST});
//     const data = await Axios.get(`${SERVER_IP}/api/login/forgotpassword`, data);

//     dispatch({
//       type: FORGOT_PASSWORD_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       type: FORGOT_PASSWORD_FAIL,
//       payload: error,
//     });
//   }
// };

export const logOutAction = navigation => dispatch => {
  dispatch({type: USER_LOGOUT});

  AsyncStorage.getAllKeys()
    .then(keys => AsyncStorage.multiRemove(keys))
    .then(() => navigation.reset({index: 1, routes: [{name: 'role'}]}));
};

//................. || USER REGISTER ACTION ||.................

export const userRegister = register_data => async dispatch => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const {data} = await Axios.post(`/admins/register`, register_data);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
