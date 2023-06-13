import React, {useState, useEffect} from 'react';
import {CustomInput} from '../field/text-input';
import {config} from '../../config';
import axios from 'axios';
export const CustomEmployeeList = ({
  control,
  errors,
  errorMessage,
  defaultValue,
  name = 'userId',
  label = 'Select Employee',
}) => {
  const [listData, setListData] = useState([
    {label: 'No Reference', value: 'No Reference'},
  ]);

  const {SERVER_IP} = config;
  const getData = async () => {
    const {data} = await axios.get(`${SERVER_IP}/employees/get`);
    data.map(user => {
      const {
        image,
        userId: {fullName, _id},
      } = user;
      setListData(pre => [...pre, {label: fullName, value: _id}]);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <CustomInput
      data={listData}
      control={control}
      errors={errors}
      name={name}
      errorMessage={errorMessage}
      type="dropdown"
      label={label}
      defaultValue={defaultValue}
    />
  );
};
