import axios from 'axios';
import {Axios} from '../../utils';
import {
  ADD_CLIENT_FAIL,
  ADD_CLIENT_REQUEST,
  ADD_CLIENT_SUCCESS,
  GET_CLIENT_FAIL,
  GET_CLIENT_REQUEST,
  GET_CLIENT_SUCCESS,
  GET_REFERENCE_REQUEST,
  GET_REFERENCE_SUCCESS,
  GET_REFERENCE_FAIL,
  DELETE_CLIENT_REQUEST,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAIL,
  ADD_REFERENCE_REQUEST,
  ADD_REFERENCE_FAIL,
  ADD_REFERENCE_SUCCESS,
  ADD_EXPENCE_REQUEST,
  ADD_EXPENCE_SUCCESS,
  ADD_EXPENCE_FAIL,
  GET_EXPENCE_REQUEST,
  GET_EXPENCE_SUCCESS,
  GET_EXPENCE_FAIL,
  UPDATE_CLIENT_REQUEST,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAIL,
  ADD_OVERTIME_REQUEST,
  ADD_OVERTIME_SUCCESS,
  ADD_OVERTIME_FAIL,
  GET_OVERTIME_REQUEST,
  GET_OVERTIME_SUCCESS,
  GET_OVERTIME_FAIL,
  UPDATE_OVERTIME_REQUEST,
  UPDATE_OVERTIME_SUCCESS,
  UPDATE_OVERTIME_FAIL,
  ADD_SALARYSTATEMENT_REQUEST,
  ADD_SALARYSTATEMENT_SUCCESS,
  ADD_SALARYSTATEMENT_FAIL,
  UPDATE_EXPENCE_REQUEST,
  UPDATE_EXPENCE_SUCCESS,
  UPDATE_EXPENCE_FAIL,
  GET_SALARYSTATEMENT_REQUEST,
  GET_SALARYSTATEMENT_SUCCESS,
  GET_SALARYSTATEMENT_FAIL,
  ADD_HOLIDAY_REQUEST,
  ADD_HOLIDAY_SUCCESS,
  ADD_HOLIDAY_FAIL,
  GET_HOLIDAY_REQUEST,
  GET_HOLIDAY_SUCCESS,
  GET_HOLIDAY_FAIL,
  UPDATE_SALARYSTATEMENT_SUCCESS,
  UPDATE_SALARYSTATEMENT_REQUEST,
  UPDATE_SALARYSTATEMENT_FAIL,
  GET_PROVIDENT_REQUEST,
  GET_PROVIDENT_SUCCESS,
  GET_PROVIDENT_FAIL,
  GET_BONUS_REQUEST,
  GET_BONUS_SUCCESS,
  GET_BONUS_FAIL,
  ADD_BONUS_REQUEST,
  ADD_BONUS_SUCCESS,
  ADD_BONUS_FAIL,
  UPDATE_BONUS_FAIL,
  UPDATE_BONUS_SUCCESS,
  UPDATE_BONUS_REQUEST,
  ADD_PROVIDENT_REQUEST,
  ADD_PROVIDENT_SUCCESS,
  ADD_PROVIDENT_FAIL,
  UPDATE_PROVIDENT_REQUEST,
  UPDATE_PROVIDENT_SUCCESS,
  UPDATE_PROVIDENT_FAIL,
  ADD_INCREMENTLIST_REQUEST,
  ADD_INCREMENTLIST_SUCCESS,
  ADD_INCREMENTLIST_FAIL,
  GET_INCREMENTLIST_REQUEST,
  GET_INCREMENTLIST_SUCCESS,
  GET_INCREMENTLIST_FAIL,
  UPDATE_INCREMENTLIST_REQUEST,
  UPDATE_INCREMENTLIST_SUCCESS,
  UPDATE_INCREMENTLIST_FAIL,
  UPDATE_HOLIDAY_REQUEST,
  UPDATE_HOLIDAY_SUCCESS,
  UPDATE_HOLIDAY_FAIL,
  DELETE_EXPENCE_REQUEST,
  DELETE_EXPENCE_SUCCESS,
  DELETE_EXPENCE_FAIL,
  DELETE_OVERTIME_REQUEST,
  DELETE_OVERTIME_SUCCESS,
  DELETE_OVERTIME_FAIL,
  DELETE_BONUS_REQUEST,
  DELETE_BONUS_SUCCESS,
  DELETE_BONUS_FAIL,
  ADD_EMPLOYEE_REQUEST,
  ADD_EMPLOYEE_FAIL,
  ADD_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAIL,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_FAIL,
  DELETE_SALARYSTATEMENT_REQUEST,
  DELETE_SALARYSTATEMENT_SUCCESS,
  DELETE_SALARYSTATEMENT_FAIL,
  DELETE_EMPLOYEE_FAIL,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_HOLIDAY_REQUEST,
  DELETE_HOLIDAY_SUCCESS,
  DELETE_HOLIDAY_FAIL,
  DELETE_PROVIDENT_REQUEST,
  DELETE_PROVIDENT_SUCCESS,
  DELETE_PROVIDENT_FAIL,
  DELETE_INCREMENTLIST_REQUEST,
  DELETE_INCREMENTLIST_SUCCESS,
  DELETE_INCREMENTLIST_FAIL,
  LEAVE_REQUEST,
  LEAVE_SUCCESS,
  LEAVE_FAIL,
  GET_LEAVE_REQUEST,
  GET_LEAVE_SUCCESS,
  GET_LEAVE_FAIL,
  UPDATE_LEAVE_REQUEST,
  UPDATE_LEAVE_SUCCESS,
  UPDATE_LEAVE_FAIL,
  ATTANDANCE_LIST_REQUEST,
  ATTANDANCE_LIST_SUCCESS,
  ATTANDANCE_LIST_FAIL,
  ATTANDANCE_INTIME_REQUEST,
  ATTANDANCE_INTIME_SUCCESS,
  ATTANDANCE_INTIME_FAIL,
  ATTANDANCE_OUTTIME_REQUEST,
  ATTANDANCE_OUTTIME_SUCCESS,
  ATTANDANCE_OUTTIME_FAIL,
  PROFILE_IMAGE_REQUEST,
  PROFILE_IMAGE_SUCCESS,
  PROFILE_IMAGE_FAIL,
  ATTANDANCE_LIST_REQUEST_SINGLE,
  ATTANDANCE_LIST_FAIL_SINGLE,
  ATTANDANCE_LIST_SUCCESS_SINGLE,
  GET_SINGLE_OVERTIME_REQUEST,
  GET_SINGLE_OVERTIME_SUCCESS,
  GET_SINGLE_OVERTIME_FAIL,
  GET_SINGLE_SALARYSTATEMENT_REQUEST,
  GET_SINGLE_SALARYSTATEMENT_SUCCESS,
  GET_SINGLE_SALARYSTATEMENT_FAIL,
  GET_SINGLE_EXPENCE_REQUEST,
  GET_SINGLE_EXPENCE_SUCCESS,
  GET_SINGLE_EXPENCE_FAIL,
  GET_SINGLE_INCREMENTLIST_REQUEST,
  GET_SINGLE_INCREMENTLIST_SUCCESS,
  GET_SINGLE_INCREMENTLIST_FAIL,
  GET_SINGLE_BONUS_REQUEST,
  GET_SINGLE_BONUS_SUCCESS,
  GET_SINGLE_BONUS_FAIL,
  GET_SINGLE_PROVIDENT_REQUEST,
  GET_SINGLE_PROVIDENT_SUCCESS,
  GET_SINGLE_PROVIDENT_FAIL,
  GET_SINGLE_LEAVE_REQUEST,
  GET_SINGLE_LEAVE_SUCCESS,
  GET_SINGLE_LEAVE_FAIL,
  GET_ADMIN_REQUEST,
  GET_ADMIN_SUCCESS,
  GET_ADMIN_FAIL,
} from '../constants';

export const addClientAction = newObj => async dispatch => {
  try {
    dispatch({
      type: ADD_CLIENT_REQUEST,
    });
    const {data} = await Axios.post(`/client/addClient`, newObj);

    dispatch({
      type: ADD_CLIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_CLIENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};

//.............|| GET CLIENT ACTION ||........................
export const getClientAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_CLIENT_REQUEST,
    });
    const {data} = await Axios.get(`/client/`);
    dispatch({
      type: GET_CLIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CLIENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............|| DELETE CLIENT ACTION ||........................
export const deleteClientAction = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_CLIENT_REQUEST,
    });
    const {data} = await Axios.delete(`/client/delete/${id}`);

    dispatch({
      type: DELETE_CLIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CLIENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............|| UPDATE CLIENT ACTION ||........................
export const updateClientAction = (newObj, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_CLIENT_REQUEST,
    });
    const {data} = await Axios.put(`/client/update/${id}`, newObj);
    dispatch({
      type: UPDATE_CLIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CLIENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............|| ADD REFERENCE ACTION ||........................
export const addReferenceAction = dataObj => async dispatch => {
  try {
    dispatch({
      type: ADD_REFERENCE_REQUEST,
    });
    const {data} = await Axios.post(`/reference/addReference`, dataObj);
    dispatch({
      type: ADD_REFERENCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_REFERENCE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............|| GET REFERENCE ACTION ||........................

export const getReferenceAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_REFERENCE_REQUEST,
    });
    const {data} = await Axios.get(`/reference/`);
    dispatch({
      type: GET_REFERENCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_REFERENCE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};

//.............. || ADD EXPENCE ACTION ||...........
export const addExpenceAction = (expenceData, userId) => async dispatch => {
  try {
    dispatch({
      type: ADD_EXPENCE_REQUEST,
    });
    const {data} = await Axios.post(
      `/expence/addExpence/${userId}`,
      expenceData,
    );
    dispatch({
      type: ADD_EXPENCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_EXPENCE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.................|| GET EXPENCE ACTION ||...........
export const getExpenseAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_EXPENCE_REQUEST,
    });
    const {data} = await Axios.get(`expence/`);
    dispatch({
      type: GET_EXPENCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_EXPENCE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.................|| GET SINGLE EXPENCE ACTION ||...........
export const getSingleExpenseAction = id => async dispatch => {
  try {
    dispatch({
      type: GET_SINGLE_EXPENCE_REQUEST,
    });
    const {data} = await Axios.get(`expence/${id}`);
    dispatch({
      type: GET_SINGLE_EXPENCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_EXPENCE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.........|| UPDATE EXPENCE ACTION ||........
export const updateExpAction = (editExp, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_EXPENCE_REQUEST,
    });
    const {data} = await Axios.put(`/expence/update/${id}`, editExp);
    dispatch({
      type: UPDATE_EXPENCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_EXPENCE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.........|| DELETE EXPENCE ACTION ||........
export const deleteExpAction = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_EXPENCE_REQUEST,
    });
    const {data} = await Axios.delete(`/expence/delete/${id}`);
    dispatch({
      type: DELETE_EXPENCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_EXPENCE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.........|| ADD OVERTIME ACTION ||...........
export const addOvertimeAction = (overTimeData, userId) => async dispatch => {
  try {
    dispatch({
      type: ADD_OVERTIME_REQUEST,
    });
    const {data} = await Axios.post(
      `/overtime/addOvertime/${userId}`,
      overTimeData,
    );
    dispatch({
      type: ADD_OVERTIME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_OVERTIME_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//...........|| GET OVERTIME ACTION ||.............
export const getOvertimeAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_OVERTIME_REQUEST,
    });
    const {data} = await Axios.get(`/overtime/`);
    dispatch({
      type: GET_OVERTIME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_OVERTIME_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//...........|| GET SINGLE OVERTIME ACTION ||.............
export const getSingleOvertimeAction = id => async dispatch => {
  try {
    dispatch({
      type: GET_SINGLE_OVERTIME_REQUEST,
    });
    const {data} = await Axios.get(`/overtime/${id}`);
    dispatch({
      type: GET_SINGLE_OVERTIME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_OVERTIME_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//........|| UPDATE OVER TIME ACTION ||.........
export const updateEoAction = (editoverTimeData, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_OVERTIME_REQUEST,
    });
    const {data} = await Axios.put(`/overtime/update/${id}`, editoverTimeData);
    dispatch({
      type: UPDATE_OVERTIME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_OVERTIME_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.................|| DELETE OVERTIME ACTION ||........
export const deleteEoAction = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_OVERTIME_REQUEST,
    });
    const {data} = await Axios.delete(`/overtime/delete/${id}`);
    dispatch({
      type: DELETE_OVERTIME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_OVERTIME_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.................|| ADD SALARY STATEMENT ACTION ||.......
export const addSalarySAction = (salaryObj, userId) => async dispatch => {
  try {
    dispatch({
      type: ADD_SALARYSTATEMENT_REQUEST,
    });
    const {data} = await Axios.post(
      `/salaryStatement/addSalaryStatement/${userId}`,
      salaryObj,
    );

    dispatch({
      type: ADD_SALARYSTATEMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_SALARYSTATEMENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.................|| GET SALARY STATEMENT ACTION ||.......
export const getSalarySAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_SALARYSTATEMENT_REQUEST,
    });
    const {data} = await Axios.get(`/salaryStatement/`);
    dispatch({
      type: GET_SALARYSTATEMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SALARYSTATEMENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.................|| GET SINGLE SALARY STATEMENT ACTION ||.......
export const getSingleSalarySAction = id => async dispatch => {
  try {
    dispatch({
      type: GET_SINGLE_SALARYSTATEMENT_REQUEST,
    });
    const {data} = await Axios.get(`/salaryStatement/${id}`);
    dispatch({
      type: GET_SINGLE_SALARYSTATEMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_SALARYSTATEMENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//...........|| UPDATE SALARY STATEMENT ACTION ||.....
export const updateSSAction = (salaryObj, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_SALARYSTATEMENT_REQUEST,
    });
    const {data} = await Axios.put(`/salaryStatement/update/${id}`, salaryObj);

    dispatch({
      type: UPDATE_SALARYSTATEMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_SALARYSTATEMENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//............|| DELETE SALARY STATEMENT ACTION ||........
export const deleteSSAction = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_SALARYSTATEMENT_REQUEST,
    });
    const {data} = await Axios.delete(`/salaryStatement/delete/${id}`);
    dispatch({
      type: DELETE_SALARYSTATEMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_SALARYSTATEMENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//............|| ADD BOUNES ACTION ||.........
export const addBonusAction = (overTimeData, userId) => async dispatch => {
  try {
    dispatch({
      type: ADD_BONUS_REQUEST,
    });
    const {data} = await Axios.post(`bonus/addBonus/${userId}`, overTimeData);
    dispatch({
      type: ADD_BONUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_BONUS_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//...........|| GET BONUS ACTION ||.............
export const getBonusAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_BONUS_REQUEST,
    });
    const {data} = await Axios.get(`/bonus/`);
    dispatch({
      type: GET_BONUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_BONUS_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//...........|| GET SINGLE BONUS ACTION ||.............
export const getSingleBonusAction = id => async dispatch => {
  try {
    dispatch({
      type: GET_SINGLE_BONUS_REQUEST,
    });
    const {data} = await Axios.get(`/bonus/${id}`);
    dispatch({
      type: GET_SINGLE_BONUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_BONUS_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};

//............|| UPDATE BOUNES ACTION ||.........
export const updateBonusAction = (updatebonus, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_BONUS_REQUEST,
    });
    const {data} = await Axios.put(`/bonus/update/${id}`, updatebonus);
    dispatch({
      type: UPDATE_BONUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_BONUS_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............|| DELETE BONUS ACTION ||.......
export const deleteBonusAction = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_BONUS_REQUEST,
    });
    const {data} = await Axios.delete(`/bonus/delete/${id}`);
    dispatch({
      type: DELETE_BONUS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_BONUS_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............|| ADD HOLIDAY ACTION ||.........
export const addHolidayAction = (holidayObj, id) => async dispatch => {
  try {
    dispatch({
      type: ADD_HOLIDAY_REQUEST,
    });
    const {data} = await Axios.post(`/holiday/addHoliday/`, holidayObj);

    dispatch({
      type: ADD_HOLIDAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_HOLIDAY_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............|| GET HOLIDAY ACTION ||.............
export const getHolidayAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_HOLIDAY_REQUEST,
    });
    const {data} = await Axios(`/holiday/`);
    dispatch({
      type: GET_HOLIDAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_HOLIDAY_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};

//.............|| UPDATE HOLIDAY ACTION ||.............
export const updateHolidayAction = (updateData, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_HOLIDAY_REQUEST,
    });
    const {data} = await Axios.put(`/holiday/update/${id}`, updateData);
    dispatch({
      type: UPDATE_HOLIDAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_HOLIDAY_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};

//.............|| DELETE HOLIDAY ACTION ||.......
export const deleteHolidayAction = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_HOLIDAY_REQUEST,
    });
    const {data} = await Axios.delete(`/holiday/delete/${id}`);
    dispatch({
      type: DELETE_HOLIDAY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_HOLIDAY_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};

//...........|| ADD PROVIDENT FUND ACTION ||............
export const addProvidentAction = (fundData, userId) => async dispatch => {
  try {
    dispatch({
      type: ADD_PROVIDENT_REQUEST,
    });
    const {data} = await Axios.post(
      `/providentFund/addProvidentFund/${userId}`,
      fundData,
    );
    dispatch({
      type: ADD_PROVIDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PROVIDENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//...........|| GET PROVIDENT FUND ACTION ||.............
export const getProvidentAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_PROVIDENT_REQUEST,
    });
    const {data} = await Axios.get(`/providentFund/`);
    dispatch({
      type: GET_PROVIDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROVIDENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//...........|| GET SINGLE PROVIDENT FUND ACTION ||.............
export const getSingleProvidentAction = id => async dispatch => {
  try {
    dispatch({
      type: GET_SINGLE_PROVIDENT_REQUEST,
    });
    const {data} = await Axios.get(`/providentFund/${id}`);
    dispatch({
      type: GET_SINGLE_PROVIDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_PROVIDENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//...........|| UPDATE PROVIDENT FUND ACTION ||.............
export const editProvidentAction = (fund_data, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_PROVIDENT_REQUEST,
    });
    const {data} = await Axios.put(`/providentFund/update/${id}`, fund_data);
    dispatch({
      type: UPDATE_PROVIDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROVIDENT_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.........|| DELETE PROVIDENT FUND ACTION ||.....
export const deleteProvidentAction = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_PROVIDENT_REQUEST,
    });
    const {data} = await Axios.delete(`/providentFund/delete/${id}`);
    dispatch({
      type: DELETE_PROVIDENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_PROVIDENT_FAIL,
    });
  }
};
//.........|| ADD INCREMENT LIST ||.......
export const addIncrementAction = (add_increment, userId) => async dispatch => {
  try {
    dispatch({
      type: ADD_INCREMENTLIST_REQUEST,
    });
    const {data} = await Axios.post(
      `/increment/addIncrement/${userId}`,
      add_increment,
    );
    dispatch({
      type: ADD_INCREMENTLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_INCREMENTLIST_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//...........|| GET INCREMENT LIST ||..........
export const getIncrementAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_INCREMENTLIST_REQUEST,
    });
    const {data} = await Axios.get(`/increment/`);
    dispatch({
      type: GET_INCREMENTLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_INCREMENTLIST_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//...........|| GET SINGLE INCREMENT LIST ||..........
export const getSingleIncrementAction = id => async dispatch => {
  try {
    dispatch({
      type: GET_SINGLE_INCREMENTLIST_REQUEST,
    });
    const {data} = await Axios.get(`/increment/${id}`);
    dispatch({
      type: GET_SINGLE_INCREMENTLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_INCREMENTLIST_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//...............|| UPDATE INCREMENT LIST ||........
export const editIncrementAction = (edit_increment, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_INCREMENTLIST_REQUEST,
    });
    const {data} = await Axios.put(`/increment/update/${id}`, edit_increment);
    dispatch({
      type: UPDATE_INCREMENTLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_INCREMENTLIST_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............|| DELETE INCREMENT LIST ||................
export const deleteIncrementAction = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_INCREMENTLIST_REQUEST,
    });
    const {data} = await Axios.delete(`/increment/delete/${id}`);
    dispatch({
      type: DELETE_INCREMENTLIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_INCREMENTLIST_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............|| ADD EMPLOYEE ACTION ||........................
export const addEmployeeAction = add_emp => async dispatch => {
  try {
    dispatch({
      type: ADD_EMPLOYEE_REQUEST,
    });
    const {data} = await Axios.post(`/employees/addEmployee`, add_emp);
    dispatch({
      type: ADD_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_EMPLOYEE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
// //.............|| GET EMPLOYEE ACTION ||........................
export const getEmployeeAction = (page, search) => async dispatch => {
  try {
    dispatch({
      type: GET_EMPLOYEE_REQUEST,
    });
    const {data} = await Axios.get(
      // `/employees?page=${page}?search=${search}`,
      `/employees?page=${page}&pageSize=5`,
    );
    // const {data} = await Axios.get(`/employees`);

    dispatch({
      type: GET_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_EMPLOYEE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};

//.................|| UPDATE EMPLOYEE ACTION ||...................
export const updateEmployeeAction = (edit_emp, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_EMPLOYEE_REQUEST,
    });
    const {data} = await Axios.put(`/employees/updateEmployee/${id}`, edit_emp);

    dispatch({
      type: UPDATE_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_EMPLOYEE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};

//.............|| DELETE EMPLOYEE ACTION ||.......
export const deleteEmployeeAction = id => async dispatch => {
  try {
    dispatch({
      type: DELETE_EMPLOYEE_REQUEST,
    });
    const {data} = await Axios.delete(`/employees/delete/${id}`);

    dispatch({
      type: DELETE_EMPLOYEE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_EMPLOYEE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//........... || LEAVE MANAGMENT ACTION ||...........
export const leaveAction = leaveObj => async dispatch => {
  try {
    dispatch({
      type: LEAVE_REQUEST,
    });
    const {data} = await Axios.post(`/leaveManagement/addLeave`, leaveObj);
    dispatch({
      type: LEAVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LEAVE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//........... || GET LEAVE ACTION ||...........
export const getLeaveAction = () => async dispatch => {
  try {
    dispatch({
      type: GET_LEAVE_REQUEST,
    });
    const {data} = await Axios.get(`/leaveManagement/`);
    dispatch({
      type: GET_LEAVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_LEAVE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//........... || GET SINGLE LEAVE ACTION ||...........
export const getSingleLeaveAction = id => async dispatch => {
  try {
    dispatch({
      type: GET_SINGLE_LEAVE_REQUEST,
    });
    const {data} = await Axios.get(`/leaveManagement/${id}`);
    dispatch({
      type: GET_SINGLE_LEAVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_SINGLE_LEAVE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//........... || UPDATE LEAVE ACTION ||...........
export const updateLeaveAction = (rejectObj, id) => async dispatch => {
  try {
    dispatch({
      type: UPDATE_LEAVE_REQUEST,
    });
    const {data} = await Axios.put(`/leaveManagement/update/${id}`, rejectObj);
    dispatch({
      type: UPDATE_LEAVE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      dispatch: UPDATE_LEAVE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............. || ATTANDANCE IN TIME ACTION ||.............
export const inTimeAction = obj => async dispatch => {
  try {
    dispatch({
      type: ATTANDANCE_INTIME_REQUEST,
    });
    const {data} = await Axios.post(
      `/attendenceManagement/addAttendenceIn`,
      obj,
    );
    dispatch({
      type: ATTANDANCE_INTIME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ATTANDANCE_INTIME_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............. || ATTANDANCE OUT TIME ACTION ||.............
export const outTimeAction = obj => async dispatch => {
  try {
    dispatch({
      type: ATTANDANCE_OUTTIME_REQUEST,
    });
    const {data} = await Axios.post(
      `/attendenceManagement/addAttendenceOut`,
      obj,
    );
    dispatch({
      type: ATTANDANCE_OUTTIME_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ATTANDANCE_OUTTIME_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............. || ATTANDANCE List TIME ACTION ||.............
export const attandanceListAction = () => async dispatch => {
  try {
    dispatch({
      type: ATTANDANCE_LIST_REQUEST,
    });
    const {data} = await Axios.get(`/attendenceManagement/`);
    dispatch({
      type: ATTANDANCE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      dispatch: ATTANDANCE_LIST_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
//.............. || SINGLE ATTANDANCE List TIME ACTION ||.............
export const AttandanceListSingleAction = id => async dispatch => {
  try {
    dispatch({
      type: ATTANDANCE_LIST_REQUEST_SINGLE,
    });
    const {data} = await Axios.get(`/attendenceManagement/${id}`);
    dispatch({
      type: ATTANDANCE_LIST_SUCCESS_SINGLE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      dispatch: ATTANDANCE_LIST_FAIL_SINGLE,
      payload: error?.response && error?.response?.data,
    });
  }
};
//............. || ADMIN ACTION GET ||.............
export const getAdminAction = id => async dispatch => {
  try {
    dispatch({
      type: GET_ADMIN_REQUEST,
    });
    const {data} = await Axios.get(`/admins/`);
    dispatch({
      type: GET_ADMIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      dispatch: GET_ADMIN_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
// //.............. || SINGLE ATTANDANCE List TIME ACTION ||.............
// export const sigleAttandanceListAction = id => async dispatch => {
//   try {
//     dispatch({
//       type: ATTANDANCE_LIST_REQUEST_SINGLE,
//     });
//     const {data} = await Axios.get(`/employees/profile/${id}`);
//     dispatch({
//       type: ATTANDANCE_LIST_SUCCESS_SINGLE,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({
//       dispatch: ATTANDANCE_LIST_FAIL_SINGLE,
//       payload: error?.response && error?.response?.data,
//     });
//   }
// };
// ..............|| PROFILE IMAGE ACTION ||..........
export const profileImage = formData => async dispatch => {
  try {
    dispatch({
      type: PROFILE_IMAGE_REQUEST,
    });
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const {data} = await axios.post(
      'http://192.168.1.89:8000/api/v1/image-upload/',
      formData,
      config,
    );
    dispatch({
      type: PROFILE_IMAGE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_IMAGE_FAIL,
      payload: error?.response && error?.response?.data,
    });
  }
};
