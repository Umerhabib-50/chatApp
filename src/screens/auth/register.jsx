import React, {useEffect, useRef} from 'react';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, Text, View} from 'react-native';
import {CustomButton, CustomInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {userRegister} from '../../redux';
export const RegisterScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const registerData = useSelector(state => state?.userRegister?.userRegister);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    dispatch(userRegister(data));
  };
  return (
    <View style={styles.input_main}>
      <CustomInput
        placeholder="Name"
        control={control}
        errors={errors}
        label="UserName"
        name="username"
        errorMessage="Enter Name"
      />
      <CustomInput
        placeholder="Email"
        control={control}
        errors={errors}
        label="email"
        name="email"
        errorMessage="Enter Email "
      />
      <CustomInput
        placeholder="Password"
        control={control}
        errors={errors}
        label="password"
        name="password"
        errorMessage="Enter password"
      />
      <CustomButton
        style={{marginTop: '10%'}}
        title={'Sign Up'}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  input_main: {
    display: 'flex',
    padding: '3%',
    justifyContent: 'center',
    height: '100%',
  },
});
