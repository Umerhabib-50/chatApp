import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {CustomButton, CustomInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {userLoginAction} from '../../redux';

export const LoginScreen = () => {
  const data = useSelector(state => state?.userLogin);
  console.log('login user data', data);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = data => {
    dispatch(userLoginAction(data));
  };

  return (
    <View style={styles.input_main}>
      <CustomInput
        control={control}
        errors={errors}
        label="Email"
        name="email"
        errorMessage="email is required"
        placeholder="Email"
      />
      <CustomInput
        control={control}
        errors={errors}
        label="Password"
        name="password"
        errorMessage="password is required"
        placeholder="Password"
      />
      <CustomButton title={'Login'} onPress={handleSubmit(onSubmit)} />
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
