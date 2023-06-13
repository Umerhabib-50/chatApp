import React from 'react';
import {Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {CustomButton, CustomInput} from '../../components';

export const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <View>
      <Text>loginScreen</Text>
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
