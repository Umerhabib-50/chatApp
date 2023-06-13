import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  EmployeeScreen,
  EmployeeData,
  EmptyEmployee,
  EmployeeList,
  AttendanceListScreen,
  AddEmployeeScreen,
  AddSuccess,
  EmptyScreen,
  PayrollScreen,
  EmptyInce,
  AddExpMgmtScreen,
  AddIncrementScreen,
  IncreListScreen,
  ExpenseManagementScreen,
  LeaveTabNavigationScreen,
  PayrollDetailScreen,
  PayrollListScreen,
  EmptyExpMgmtScreen,
  ExpListScreen,
  ExpDetailScreen,
  AttandanceDetailsScreen,
  EditScreen,
  AddClient,
  ClientList,
  HomeScreen,
  AddSalaryScreen,
  EmptyBounsScreen,
  AddBounsScreen,
  BounsDetailScreen,
  EmptyFundScreen,
  AddFundScreen,
  FundListScreen,
  FundDetailsScreen,
  OnBordScreen,
  EmptyEOScreen,
  AddEOScreen,
  EoListScreen,
  EoDetailScreen,
  EmptySSStyle,
  AddSSScreen,
  SsListScreen,
  SsDetailsScreen,
  EmptyFmScreen,
  AddFileScreen,
  FileListScreen,
  AttEmpList,
  FileListDetailsScreen,
  EmptyReference,
  AddReference,
  ReferenceList,
  MarkAttandanceScreen,
  BounesListScreen,
  ClientDetails,
  RefDetailScreen,
  EditEmployeeScreen,
  EditClient,
  ExpDetailslistScreen,
  EditExpMgmtScreen,
  EoDetailListScreen,
  EditEOScreen,
  SsDetailsList,
  EditSSScreen,
  SingleUserBonuseslistScreen,
  EditBounsScreen,
  FundListDetailsScreen,
  EditFundScreen,
  IncreDetailListScreen,
  EditIncrementScreen,
  LeaveApplyScreen,
  EmployeeLeaveList,
  AdminList,
} from '../screens';
import {DrawerNavigator} from './drawerNavigator';

const MainStack = createNativeStackNavigator();

export const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* <MainStack.Screen name="onBord" component={OnBordScreen} /> */}
      {/* ................."" EM STACK ""............ */}
      <MainStack.Screen name="drawerStack" component={DrawerNavigator} />
      <MainStack.Screen name="employee" component={EmployeeScreen} />
      <MainStack.Screen name="emloyeelist" component={EmployeeList} />
      <MainStack.Screen name="employeeData" component={EmployeeData} />
      <MainStack.Screen name="addEmployee" component={AddEmployeeScreen} />
      <MainStack.Screen name="editEmployee" component={EditEmployeeScreen} />
      <MainStack.Screen name="addSuccess" component={AddSuccess} />

      {/* ............."" EM OVER TIME STACK..........."" */}
      <MainStack.Screen name="addeo" component={AddEOScreen} />
      <MainStack.Screen name="eoList" component={EoListScreen} />
      <MainStack.Screen name="eoDetail" component={EoDetailScreen} />
      <MainStack.Screen name="eoDetailList" component={EoDetailListScreen} />
      <MainStack.Screen name="editOverTime" component={EditEOScreen} />
      {/* ......."" EM SALARY SHEET""...... */}
      <MainStack.Screen name="addSS" component={AddSSScreen} />
      <MainStack.Screen name="editSS" component={EditSSScreen} />
      <MainStack.Screen name="ssList" component={SsListScreen} />
      <MainStack.Screen name="ssDetailsList" component={SsDetailsList} />
      <MainStack.Screen name="ssDetail" component={SsDetailsScreen} />
      {/* .........""EM FILE MANAGER STACK".......... */}
      <MainStack.Screen name="emptyFm" component={EmptyFmScreen} />
      <MainStack.Screen name="addfile" component={AddFileScreen} />
      <MainStack.Screen name="filelist" component={FileListScreen} />
      <MainStack.Screen name="listDetail" component={FileListDetailsScreen} />
      {/* ..........EM Referenece........ */}
      <MainStack.Screen name="refList" component={ReferenceList} />
      <MainStack.Screen name="refDetail" component={RefDetailScreen} />
      <MainStack.Screen name="addRef" component={AddReference} />
      {/* EM LEAVE APPLY */}
      <MainStack.Screen name="leave" component={LeaveApplyScreen} />
      {/* ................."" PM STACK ""............ */}
      <MainStack.Screen name="payroll" component={PayrollScreen} />
      <MainStack.Screen name="addPayroll" component={AddIncrementScreen} />
      <MainStack.Screen name="editPayroll" component={EditIncrementScreen} />
      <MainStack.Screen name="increList" component={IncreListScreen} />
      <MainStack.Screen
        name="increDetailList"
        component={IncreDetailListScreen}
      />
      <MainStack.Screen name="p_l_details" component={PayrollDetailScreen} />
      {/* <MainStack.Screen name="p_l_List" component={PayrollListScreen} />/ */}
      {/* ................"" PM SALARY SHEET */}
      <MainStack.Screen name="salarySheet" component={AddSalaryScreen} />

      {/* ................"" PM Bouns  */}
      <MainStack.Screen name="addBounes" component={AddBounsScreen} />
      <MainStack.Screen name="bounsList" component={BounesListScreen} />
      <MainStack.Screen
        name="singleuserBonuses"
        component={SingleUserBonuseslistScreen}
      />
      <MainStack.Screen name="bounsDetail" component={BounsDetailScreen} />
      <MainStack.Screen name="editBonus" component={EditBounsScreen} />

      {/* ........."" PM Fund ""...... */}
      <MainStack.Screen name="addFund" component={AddFundScreen} />
      <MainStack.Screen name="editFund" component={EditFundScreen} />
      <MainStack.Screen name="fundList" component={FundListScreen} />
      <MainStack.Screen name="fundDetail" component={FundDetailsScreen} />
      <MainStack.Screen
        name="fundDetailList"
        component={FundListDetailsScreen}
      />

      {/* .........."" CM STACK ""............ */}
      <MainStack.Screen name="addClient" component={AddClient} />
      <MainStack.Screen name="editClient" component={EditClient} />
      <MainStack.Screen name="clientList" component={ClientList} />
      <MainStack.Screen name="clientdetail" component={ClientDetails} />

      {/* -------------------attendance Screens */}

      <MainStack.Screen name="attEmplist" component={AttEmpList} />
      <MainStack.Screen
        name="markAttandance"
        component={MarkAttandanceScreen}
      />
      <MainStack.Screen
        name="attaendancelist"
        component={AttendanceListScreen}
      />

      <MainStack.Screen
        name="attandanceDetail"
        component={AttandanceDetailsScreen}
      />
      <MainStack.Screen
        name="leavetabnavigation"
        component={LeaveTabNavigationScreen}
      />
      <MainStack.Screen name="EmployeeLeave" component={EmployeeLeaveList} />

      {/* / --------------Expense Mnagement Screens----------------------------------------------------- / */}

      <MainStack.Screen
        name="expensemanagement"
        component={ExpenseManagementScreen}
      />
      <MainStack.Screen name="editExp" component={EditExpMgmtScreen} />
      <MainStack.Screen
        name="addexpensemanagement"
        component={AddExpMgmtScreen}
      />
      <MainStack.Screen name="explist" component={ExpListScreen} />

      <MainStack.Screen
        name="expdetailslist"
        component={ExpDetailslistScreen}
      />
      <MainStack.Screen name="expdetail" component={ExpDetailScreen} />

      {/* / --------------Drawer edit Screens----------------------------------------------------- / */}

      <MainStack.Screen name="edit" component={EditScreen} />
    </MainStack.Navigator>
  );
};
