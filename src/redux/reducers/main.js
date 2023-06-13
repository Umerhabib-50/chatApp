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
  ADD_REFERENCE_SUCCESS,
  ADD_REFERENCE_FAIL,
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
  GET_BONUS_REQUEST,
  GET_BONUS_SUCCESS,
  GET_BONUS_FAIL,
  ADD_BONUS_REQUEST,
  ADD_BONUS_SUCCESS,
  ADD_BONUS_FAIL,
  GET_SALARYSTATEMENT_REQUEST,
  GET_SALARYSTATEMENT_SUCCESS,
  GET_SALARYSTATEMENT_FAIL,
  ADD_HOLIDAY_REQUEST,
  ADD_HOLIDAY_SUCCESS,
  ADD_HOLIDAY_FAIL,
  GET_HOLIDAY_REQUEST,
  GET_HOLIDAY_SUCCESS,
  GET_HOLIDAY_FAIL,
  UPDATE_SALARYSTATEMENT_REQUEST,
  UPDATE_SALARYSTATEMENT_SUCCESS,
  UPDATE_SALARYSTATEMENT_FAIL,
  UPDATE_BONUS_REQUEST,
  UPDATE_BONUS_SUCCESS,
  UPDATE_BONUS_FAIL,
  GET_PROVIDENT_REQUEST,
  GET_PROVIDENT_SUCCESS,
  GET_PROVIDENT_FAIL,
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
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_FAIL,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAIL,
  UPDATE_EMPLOYEE_REQUEST,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_FAIL,
  DELETE_SALARYSTATEMENT_REQUEST,
  DELETE_SALARYSTATEMENT_SUCCESS,
  DELETE_SALARYSTATEMENT_FAIL,
  DELETE_EMPLOYEE_REQUEST,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_FAIL,
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
  ATTANDANCE_LIST_SUCCESS_SINGLE,
  ATTANDANCE_LIST_FAIL_SINGLE,
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

export const addClientReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_CLIENT_REQUEST:
      return {loading: true};
    case ADD_CLIENT_SUCCESS:
      return {loading: false, addClient: action.payload};
    case ADD_CLIENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

//.............|| GET CLIENT REDUCER ||................
export const getClientReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CLIENT_REQUEST:
      return {loading: true};
    case GET_CLIENT_SUCCESS:
      return {loading: false, getClient: action.payload};
    case GET_CLIENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.............|| DELETE CLIENT REDUCER ||...............
export const deleteReducerReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CLIENT_REQUEST:
      return {loading: true};
    case DELETE_CLIENT_SUCCESS:
      return {loading: false, deleteClient: action.payload};
    case DELETE_CLIENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.............|| UPDATE CLIENT REDUCER ||................
export const updateClientReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CLIENT_REQUEST:
      return {loading: true};
    case UPDATE_CLIENT_SUCCESS:
      return {loading: false, updateClient: action.payload};
    case UPDATE_CLIENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.............|| ADD REFERENCE REDUCER ||................
export const addReferenceReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_REFERENCE_REQUEST:
      return {loading: true};
    case ADD_REFERENCE_SUCCESS:
      return {loading: false, addReference: action.payload};
    case ADD_REFERENCE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.............|| GET REFERENCE REDUCER ||................
export const getReferenceReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_REFERENCE_REQUEST:
      return {loading: true};
    case GET_REFERENCE_SUCCESS:
      return {loading: false, getClient: action.payload};
    case GET_REFERENCE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//................... || ADD EXPENCE REDUCER ||.........

export const addExpenceReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EXPENCE_REQUEST:
      return {loading: true};
    case ADD_EXPENCE_SUCCESS:
      return {loading: false, addExpence: action.payload};
    case ADD_EXPENCE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.............. GET EXPENCE REDUCER
export const getExpenceReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EXPENCE_REQUEST:
      return {loading: true};
    case GET_EXPENCE_SUCCESS:
      return {loading: false, getExpence: action.payload};
    case GET_EXPENCE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.............. GET SINGLE EXPENCE REDUCER
export const getSingleExpenceReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_EXPENCE_REQUEST:
      return {loading: true};
    case GET_SINGLE_EXPENCE_SUCCESS:
      return {loading: false, getSingleExpence: action.payload};
    case GET_SINGLE_EXPENCE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

//.............|| UPDATE EXPENCE REDUCER ||................
export const updateExpReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_EXPENCE_REQUEST:
      return {loading: true};
    case UPDATE_EXPENCE_SUCCESS:
      return {loading: false, updateExp: action.payload};
    case UPDATE_EXPENCE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//............|| DELETE EXPENCE REDUCER ||..............
export const deleteExpReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_EXPENCE_REQUEST:
      return {loading: true};
    case DELETE_EXPENCE_SUCCESS:
      return {loading: false, deleteExp: action.payload};
    case DELETE_EXPENCE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//............|| ADD OVERTIME REDUCER ||...........
export const addOvertimeReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_OVERTIME_REQUEST:
      return {loading: true};
    case ADD_OVERTIME_SUCCESS:
      return {loading: false, addOvertime: action.payload};
    case ADD_OVERTIME_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

//...........|| GET OVERTIME REDUCER ||.........
export const getOvertimeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_OVERTIME_REQUEST:
      return {loading: true};
    case GET_OVERTIME_SUCCESS:
      return {loading: false, getOvertime: action.payload};
    case GET_OVERTIME_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//...........|| GET SINGLE OVERTIME REDUCER ||.........
export const getSingleOvertimeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_OVERTIME_REQUEST:
      return {loading: true};
    case GET_SINGLE_OVERTIME_SUCCESS:
      return {loading: false, getSingleOvertime: action.payload};
    case GET_SINGLE_OVERTIME_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.............|| UPDATE OVERTIME REDUCER ||................
export const updateEoReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_OVERTIME_REQUEST:
      return {loading: true};
    case UPDATE_OVERTIME_SUCCESS:
      return {loading: false, updateOverTime: action.payload};
    case UPDATE_OVERTIME_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.............|| UPDATE OVERTIME REDUCER ||................
export const deleteEoReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_OVERTIME_REQUEST:
      return {loading: true};
    case DELETE_OVERTIME_SUCCESS:
      return {loading: false, deleteOverTime: action.payload};
    case DELETE_OVERTIME_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

//............|| ADD SALARY STATEMENT REDUCER ||...........
export const addSalarySReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_SALARYSTATEMENT_REQUEST:
      return {loading: true};
    case ADD_SALARYSTATEMENT_SUCCESS:
      return {loading: false, addSalary: action.payload};
    case ADD_SALARYSTATEMENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//...........|| GET SALARY STATEMENT REDUCER ||.........
export const getSalarySReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SALARYSTATEMENT_REQUEST:
      return {loading: true};
    case GET_SALARYSTATEMENT_SUCCESS:
      return {loading: false, getSalary: action.payload};
    case GET_SALARYSTATEMENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//...........|| GET SINGLE SALARY STATEMENT REDUCER ||.........
export const getSingleSalarySReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_SALARYSTATEMENT_REQUEST:
      return {loading: true};
    case GET_SINGLE_SALARYSTATEMENT_SUCCESS:
      return {loading: false, getSingleSalary: action.payload};
    case GET_SINGLE_SALARYSTATEMENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.............|| UPDATE SALARY STATEMENT REDUCER ||................
export const updateSSReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SALARYSTATEMENT_REQUEST:
      return {loading: true};
    case UPDATE_SALARYSTATEMENT_SUCCESS:
      return {loading: false, updateSalary: action.payload};
    case UPDATE_SALARYSTATEMENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.............|| UPDATE SALARY STATEMENT REDUCER ||................
export const deleteSSReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_SALARYSTATEMENT_REQUEST:
      return {loading: true};
    case DELETE_SALARYSTATEMENT_SUCCESS:
      return {loading: false, deleteSalary: action.payload};
    case DELETE_SALARYSTATEMENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//............|| ADD BONUS REDUCER ||...........
export const addBonusReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BONUS_REQUEST:
      return {loading: true};
    case ADD_BONUS_SUCCESS:
      return {loading: false, addBonus: action.payload};
    case ADD_BONUS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//...........|| GET BONUS REDUCER ||.........
export const getBonusReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_BONUS_REQUEST:
      return {loading: true};
    case GET_BONUS_SUCCESS:
      return {loading: false, getBonus: action.payload};
    case GET_BONUS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//...........|| GET SINGLE BONUS REDUCER ||.........
export const getSingleBonusReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_BONUS_REQUEST:
      return {loading: true};
    case GET_SINGLE_BONUS_SUCCESS:
      return {loading: false, getSingleBonus: action.payload};
    case GET_SINGLE_BONUS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//............|| UPDATE BONUS REDUCER ||...........
export const updateBonusReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_BONUS_REQUEST:
      return {loading: true};
    case UPDATE_BONUS_SUCCESS:
      return {loading: false, updateBonus: action.payload};
    case UPDATE_BONUS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//............|| DELETE BONUS REDUCER ||...........
export const deleteBonusReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_BONUS_REQUEST:
      return {loading: true};
    case DELETE_BONUS_SUCCESS:
      return {loading: false, deleteBonus: action.payload};
    case DELETE_BONUS_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

//............|| ADD HOLIDAY REDUCER ||........
export const addHolidayReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_HOLIDAY_REQUEST:
      return {loading: true};
    case ADD_HOLIDAY_SUCCESS:
      return {loading: false, addHoliday: action.payload};
    case ADD_HOLIDAY_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//...........|| GET HOLIDAY REDUCER ||.........
export const getHolidayReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_HOLIDAY_REQUEST:
      return {loading: true};
    case GET_HOLIDAY_SUCCESS:
      return {loading: false, getHoliday: action.payload};
    case GET_HOLIDAY_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

//...........|| UPDATE HOLIDAY REDUCER ||.........
export const updateHolidayReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_HOLIDAY_REQUEST:
      return {loading: true};
    case UPDATE_HOLIDAY_SUCCESS:
      return {loading: false, updateHoliday: action.payload};
    case UPDATE_HOLIDAY_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

//............|| DELETE HOLIDAY REDUCER ||...........
export const deleteHolidayReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_HOLIDAY_REQUEST:
      return {loading: true};
    case DELETE_HOLIDAY_SUCCESS:
      return {loading: false, deleteHoliday: action.payload};
    case DELETE_HOLIDAY_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

//...........|| ADD PROVIDENT FUND REDUCER ||.........
export const addProvidentReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PROVIDENT_REQUEST:
      return {loading: true};
    case ADD_PROVIDENT_SUCCESS:
      return {loading: false, addProvident: action.payload};
    case ADD_PROVIDENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//...........|| GET PROVIDENT FUND REDUCER ||.........
export const getProvidentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_PROVIDENT_REQUEST:
      return {loading: true};
    case GET_PROVIDENT_SUCCESS:
      return {loading: false, getProvident: action.payload};
    case GET_PROVIDENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//...........|| GET SINGLE PROVIDENT FUND REDUCER ||.........
export const getSingleProvidentReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_PROVIDENT_REQUEST:
      return {loading: true};
    case GET_SINGLE_PROVIDENT_SUCCESS:
      return {loading: false, getSingleProvident: action.payload};
    case GET_SINGLE_PROVIDENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//...........|| UPDATE PROVIDENT FUND REDUCER ||.........
export const editProvidentReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_PROVIDENT_REQUEST:
      return {loading: true};
    case UPDATE_PROVIDENT_SUCCESS:
      return {loading: false, editProvident: action.payload};
    case UPDATE_PROVIDENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//...........|| DELETE PROVIDENT FUND REDUCER ||.........
export const deleteProvidentReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROVIDENT_REQUEST:
      return {loading: true};
    case DELETE_PROVIDENT_SUCCESS:
      return {loading: false, deleteProvident: action.payload};
    case DELETE_PROVIDENT_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.........|| ADD INCREMENT LIST ||..................
export const addIncrementReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_INCREMENTLIST_REQUEST:
      return {loading: true};
    case ADD_INCREMENTLIST_SUCCESS:
      return {loading: false, addIncrement: action.payload};
    case ADD_INCREMENTLIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.........|| GET INCREMENT LIST ||..................
export const getIncrementReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_INCREMENTLIST_REQUEST:
      return {loading: true};
    case GET_INCREMENTLIST_SUCCESS:
      return {loading: false, getIncrement: action.payload};
    case GET_INCREMENTLIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.........|| GET SINGLE INCREMENT LIST ||..................
export const getSingleIncrementReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_INCREMENTLIST_REQUEST:
      return {loading: true};
    case GET_SINGLE_INCREMENTLIST_SUCCESS:
      return {loading: false, getSingleIncrement: action.payload};
    case GET_SINGLE_INCREMENTLIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.........|| GET INCREMENT LIST ||..................
export const editIncrementReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_INCREMENTLIST_REQUEST:
      return {loading: true};
    case UPDATE_INCREMENTLIST_SUCCESS:
      return {loading: false, editIncrement: action.payload};
    case UPDATE_INCREMENTLIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.........|| DELETE INCREMENT LIST ||..................
export const deleteIncrementReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_INCREMENTLIST_REQUEST:
      return {loading: true};
    case DELETE_INCREMENTLIST_SUCCESS:
      return {loading: false, deleteIncrement: action.payload};
    case DELETE_INCREMENTLIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//..................|| ADD EMPLOYEE REDUCER ||..............
export const addEmployeeReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_REQUEST:
      return {loading: true};
    case ADD_EMPLOYEE_SUCCESS:
      return {loading: false, addEmployee: action.payload};
    case ADD_EMPLOYEE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//......................|| GET EMLOYEE REDUCER ||...........
export const getEmployeeReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_REQUEST:
      return {loading: true, successMsg: false};
    case GET_EMPLOYEE_SUCCESS:
      return {loading: false, getEmployee: action.payload, successMsg: true};
    case GET_EMPLOYEE_FAIL:
      return {loading: false, error: action.payload, successMsg: false};
    default:
      return state;
  }
};
//...................|| UPDATE EMLOYEE REDUCER ||.............
export const updateEmployeeReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_EMPLOYEE_REQUEST:
      return {loading: true};
    case UPDATE_EMPLOYEE_SUCCESS:
      return {loading: false, updateEmployee: action.payload};
    case UPDATE_EMPLOYEE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};

//............|| DELETE EMPLOYEE REDUCER ||...........
export const deleteEmployeeReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_EMPLOYEE_REQUEST:
      return {loading: true};
    case DELETE_EMPLOYEE_SUCCESS:
      return {loading: false, deleteEmployee: action.payload};
    case DELETE_EMPLOYEE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//..........|| LEAVE MANAGMENT REDUCER ||...........
export const leaveReducer = (state = {}, action) => {
  switch (action.type) {
    case LEAVE_REQUEST:
      return {loading: true};
    case LEAVE_SUCCESS:
      return {loading: false, leaveSend: action.payload};
    case LEAVE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.......... || GET LEAVE REDUCER ||...........
export const getLeaveReucer = (state = {}, action) => {
  switch (action.type) {
    case GET_LEAVE_REQUEST:
      return {loading: true};
    case GET_LEAVE_SUCCESS:
      return {loading: false, getLeave: action.payload};
    case GET_LEAVE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.......... || GET SINGLE LEAVE REDUCER ||...........
export const getSingleLeaveReucer = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_LEAVE_REQUEST:
      return {loading: true};
    case GET_SINGLE_LEAVE_SUCCESS:
      return {loading: false, getSingleLeave: action.payload};
    case GET_SINGLE_LEAVE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//..........|| UPDATE LEAVE REDUCER ||..........
export const updateLeaveReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_LEAVE_REQUEST:
      return {loading: true};
    case UPDATE_LEAVE_SUCCESS:
      return {loading: false, updateLeave: action.payload};
    case UPDATE_LEAVE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//........... || ATTANDANCE IN TIME REDUCER ||..............
export const inTimeReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTANDANCE_INTIME_REQUEST:
      return {loading: true};
    case ATTANDANCE_INTIME_SUCCESS:
      return {loading: false, attandanceIntime: action.payload};
    case ATTANDANCE_INTIME_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//........... || ATTANDANCE OUT TIME REDUCER ||..............
export const outTimeReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTANDANCE_OUTTIME_REQUEST:
      return {loading: true};
    case ATTANDANCE_OUTTIME_SUCCESS:
      return {loading: false, attandanceOuttime: action.payload};
    case ATTANDANCE_OUTTIME_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//........... || ATTANDANCE IN TIME REDUCER ||..............
export const attandanceListReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTANDANCE_LIST_REQUEST:
      return {loading: true};
    case ATTANDANCE_LIST_SUCCESS:
      return {loading: false, attandanceList: action.payload};
    case ATTANDANCE_LIST_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//........... || SINGLE ATTANDANCE IN TIME REDUCER ||..............
export const singleAttandanceListReducer = (state = {}, action) => {
  switch (action.type) {
    case ATTANDANCE_LIST_REQUEST_SINGLE:
      return {loading: true};
    case ATTANDANCE_LIST_SUCCESS_SINGLE:
      return {loading: false, sinleAttandanceList: action.payload};
    case ATTANDANCE_LIST_FAIL_SINGLE:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.......... || PROFILE IMAGE REDUCER ||.............
export const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_IMAGE_REQUEST:
      return {loading: true};
    case PROFILE_IMAGE_SUCCESS:
      return {loading: false, profileImage: action.payload};
    case PROFILE_IMAGE_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
//.......... || GET ADMIN REDUCER ||.............
export const getAdminReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ADMIN_REQUEST:
      return {loading: true};
    case GET_ADMIN_SUCCESS:
      return {loading: false, getAdmin: action.payload};
    case GET_ADMIN_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
